/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package registryservice

import (
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/singulatron/superplatform/sdk/go/logger"
	registry "github.com/singulatron/superplatform/server/internal/services/registry/types"
)

func (ns *RegistryService) instanceScan() {
	ticker := time.NewTicker(15 * time.Second)
	defer ticker.Stop()

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, os.Interrupt, syscall.SIGTERM)

	go func() {
		ns.triggerChan <- struct{}{}
	}()

	for {
		select {
		case <-ticker.C:
			ns.instanceScanCycle()

		case <-ns.triggerChan:
			ns.instanceScanCycle()

		case <-sigChan:
			return
		}
	}
}

func (ns *RegistryService) instanceScanCycle() {
	instances, err := ns.instanceStore.Query().Find()
	if err != nil {
		logger.Error("Failed to query instances: %v", err)
		return
	}

	for _, instance := range instances {
		err = ns.scanInstance(instance)
		if err != nil {
			logger.Error("Failed to scan instance: %v", err)
			continue
		}
	}

}

// scan the port of the instance to see if its available, update lastHeartbeat if it is
func (ns *RegistryService) scanInstance(instance *registry.Instance) error {
	return nil
}
