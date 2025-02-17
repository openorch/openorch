/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package dynamicservice

import (
	"encoding/json"
	"errors"

	"github.com/openorch/openorch/sdk/go/datastore"

	data "github.com/openorch/openorch/server/internal/services/data/types"
)

func (g *DataService) query(
	readers []string,
	options data.QueryOptions,
) ([]*data.Object, error) {
	if options.Table == "" {
		return nil, errors.New("no table name")
	}

	filters := []datastore.Filter{}
	if options.Query != nil {
		filters = append(filters, options.Query.Filters...)
	}

	filters = append(filters,
		datastore.Equals(datastore.Field("table"), options.Table),
	)

	readersAny := []any{}
	for _, reader := range readers {
		readersAny = append(readersAny, reader)
	}
	filters = append(filters,
		datastore.Intersects(datastore.Field("readers"), readersAny),
	)

	q := g.store.Query(
		filters...,
	)

	if options.Query != nil {
		q.OrderBy(options.Query.OrderBys...)

		if options.Query.Limit != 0 {
			q.Limit(options.Query.Limit)
		}

		if options.Query.JSONAfter != "" {
			v := []any{}
			err := json.Unmarshal([]byte(options.Query.JSONAfter), &v)
			if err != nil {
				return nil, err
			}
			q = q.After(v...)
		}
	}

	objectIs, err := q.Find()
	if err != nil {
		return nil, err
	}

	objects := []*data.Object{}
	for _, objectI := range objectIs {
		objects = append(objects, objectI.(*data.Object))
	}

	return objects, nil
}
