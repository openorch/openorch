/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package email_svc

type ErrorResponse struct {
	Error string `json:"error"`
}

type Event struct {
	Name string `json:"name"`
	Data any    `json:"data"`
}

type SendEmailRequest struct {
	To          []string `json:"to"`            // List of recipient email addresses
	CC          []string `json:"cc,omitempty"`  // List of CC recipient email addresses (optional)
	BCC         []string `json:"bcc,omitempty"` // List of BCC recipient email addresses (optional)
	Subject     string   `json:"subject"`       // Email subject line
	Body        string   `json:"body"`          // Email body content (plain text or HTML)
	ContentType string   `json:"content_type"`  // Content type: "text/plain" or "text/html"
	Attachments []File   `json:"attachments"`   // List of file attachments (optional)
}

type File struct {
	Filename    string `json:"filename"`     // Name of the attached file
	Content     []byte `json:"content"`      // File content in bytes
	ContentType string `json:"content_type"` // MIME type of the file (e.g., "application/pdf")
}

type SendEmailResponse struct {
	MessageID string `json:"message_id"` // Unique identifier for the sent email
	Status    string `json:"status"`     // Status of the email send operation ("sent", "queued", etc.)
}
