package generictypes

import (
	"github.com/singulatron/singulatron/localtron/datastore"
)

// GenericObject holds any kind of data, so
// we don't have to implement simple CRUD for
// any new simple entity.
//
// When JSON marshalled, might look like this:
//
//	{
//		"id": "id1",
//		"createdAt": "2024-05-30 13:53:22",
//		"createdAt": "2024-05-30 13:53:22",
//		"userId": "userid1",
//		"data": {
//			"anyfield1": "anyvalue",
//			"anyfield2": 42
//		}
//	}
type GenericObject struct {
	Id        string `json:"id"`
	Table     string `json:"table"`
	CreatedAt string `json:"createdAt"`
	UpdatedAt string `json:"updatedAt,omitempty"`
	UserId    string `json:"userId,omitempty"`
	// Entry is visible to all users of the app
	Public bool `json:"public,omitempty"`

	Data any `json:"data,omitempty"`
}

func (g GenericObject) GetId() string {
	return g.Id
}

type FindRequest struct {
	Table      string                `json:"table"`
	Conditions []datastore.Condition `json:"conditions"`
}

type FindResponse struct {
	Objects []*GenericObject `json:"objects,omitempty"`
}

type CreateRequest struct {
	Table  string         `json:"table,omitempty"`
	Object *GenericObject `json:"object,omitempty"`
}

type UpsertRequest struct {
	Table  string         `json:"table,omitempty"`
	Object *GenericObject `json:"object,omitempty"`
}

type DeleteRequest struct {
	Table      string                `json:"table"`
	Conditions []datastore.Condition `json:"conditions"`
}

type DeleteResponse struct {
}

type UpdateRequest struct {
	Table      string                `json:"table,omitempty"`
	Conditions []datastore.Condition `json:"conditions,omitempty"`
	Object     *GenericObject        `json:"object,omitempty"`
}

type UpdateResponse struct {
}
