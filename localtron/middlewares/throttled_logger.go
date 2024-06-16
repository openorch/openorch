/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 *
 * For commercial use, a separate license must be obtained by purchasing from The Authors.
 * For commercial licensing inquiries, please contact The Authors listed in the AUTHORS file.
 */
package middlewares

import (
	"fmt"
	"log/slog"
	"net/http"
	"strings"
	"sync"
	"time"

	"github.com/singulatron/singulatron/localtron/logger"
)

// Define constants for log interval
const LogInterval = 240 * time.Second

type endpointData struct {
	LastLogTime  time.Time
	RequestCount int
	ErrorCount   int
}

var (
	endpointStats map[string]*endpointData
	mu            sync.Mutex
)

func init() {
	endpointStats = make(map[string]*endpointData)
}

// ThrottledLogger Middleware
func ThrottledLogger(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		customWriter := newThrottledResponseWriter(w, r.URL.Path)
		next(customWriter, r)

		duration := time.Since(start)

		mu.Lock()
		data, exists := endpointStats[r.URL.Path]
		if !exists {
			data = &endpointData{LastLogTime: time.Now().Add(-LogInterval), RequestCount: 0}
			endpointStats[r.URL.Path] = data
		}
		data.RequestCount++
		requestCount := data.RequestCount
		shouldLog := time.Since(data.LastLogTime) > LogInterval
		if shouldLog {
			logger.Info("Endpoint request count",
				slog.String("method", r.Method),
				slog.String("path", r.URL.Path),
				slog.Int("statusCode", customWriter.statusCode),
				slog.String("duration", duration.String()),
				slog.Int("requestCount", requestCount),
				slog.Int64("logInterval", int64(LogInterval)))
			data.LastLogTime = time.Now()
			data.RequestCount = 0 // Reset the count after logging
		}
		mu.Unlock()
	}
}

type throttledResponseWriter struct {
	http.ResponseWriter
	statusCode int
	endpoint   string
}

func newThrottledResponseWriter(w http.ResponseWriter, endpoint string) *throttledResponseWriter {
	return &throttledResponseWriter{ResponseWriter: w, statusCode: http.StatusOK, endpoint: endpoint}
}

func (rw *throttledResponseWriter) WriteHeader(code int) {
	rw.statusCode = code
	rw.ResponseWriter.WriteHeader(code)
}

func (rw *throttledResponseWriter) Write(b []byte) (int, error) {
	if rw.statusCode >= 400 {
		// Convert bytes to string and truncate at the first newline to avoid multiline.
		errorMsgStr := strings.Split(string(b), "\n")[0]
		// Escape double quotes to ensure JSON validity.
		errorMsgStr = strings.ReplaceAll(errorMsgStr, `"`, `\"`)

		// Wrap the error message in a JSON object
		errorMsg := fmt.Sprintf(`{"error": "%s"}`, errorMsgStr)

		// Log the error message with the endpoint name, using the original message
		logger.Error("Endpoint returned error",
			slog.String("endpoint", rw.endpoint),
			slog.String("error", strings.TrimSuffix(string(b), "\n")))

		return rw.ResponseWriter.Write([]byte(errorMsg))
	}
	return rw.ResponseWriter.Write(b)
}

func (tw *throttledResponseWriter) Flush() {
	if flusher, ok := tw.ResponseWriter.(http.Flusher); ok {
		flusher.Flush()
	} else {
		logger.Warn("Flushing is not supported by the underlying responsewriter of throttledResponseWriter")
	}
}
