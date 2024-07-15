/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package chattypes

import (
	"time"
)

type Thread struct {
	Id        string    `json:"id"`
	CreatedAt time.Time `json:"createdAt,omitempty"`
	UpdatedAt time.Time `json:"updatedAt,omitempty"`

	TopicIds []string `json:"topicIds,omitempty"`
	UserIds  []string `json:"userIds,omitempty"`

	Title string `json:"title"`
}

func (c *Thread) GetId() string {
	return c.Id
}

func (c *Thread) GetUpdatedAt() string {
	return c.Id
}

type ThreadByTime []*Thread

func (a ThreadByTime) Len() int      { return len(a) }
func (a ThreadByTime) Swap(i, j int) { a[i], a[j] = a[j], a[i] }

func (a ThreadByTime) Less(i, j int) bool {
	ti := a[i].CreatedAt
	tj := a[j].CreatedAt

	return ti.After(tj)
}

type AddThreadRequest struct {
	Thread *Thread `json:"thread"`
}

type UpdateThreadRequest struct {
	Thread *Thread `json:"thread"`
}

type AddThreadResponse struct {
	Thread *Thread `json:"thread"`
}

type DeleteThreadRequest struct {
	ThreadId string `json:"threadId"`
}

type GetThreadRequest struct {
	ThreadId string `json:"threadId"`
}

type GetThreadResponse struct {
	Thread Thread `json:"thread"`
}

type GetThreadsRequest struct{}

type GetThreadsResponse struct {
	Threads []*Thread `json:"threads"`
}
