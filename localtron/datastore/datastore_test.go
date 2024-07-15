/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package datastore_test

import (
	"fmt"
	"testing"

	"github.com/singulatron/singulatron/localtron/datastore"
	localstore "github.com/singulatron/singulatron/localtron/datastore/localstore"
	"github.com/stretchr/testify/require"
)

func TestAll(t *testing.T) {
	stores := map[string]func(instance any) datastore.DataStore{
		"localStore": func(instance any) datastore.DataStore {
			store, err := localstore.NewLocalStore(instance, "")
			require.NoError(t, err)
			return store
		},
	}
	pointerStores := map[string]func(instance any) datastore.DataStore{
		"localStore": func(instance any) datastore.DataStore {
			store, err := localstore.NewLocalStore(instance, "")
			require.NoError(t, err)
			return store
		},
	}
	tests := map[string]func(t *testing.T, store datastore.DataStore){
		"Create":                 datastore.TestCreate,
		"CreatedAt":              datastore.TestCreatedAt,
		"Upsert":                 datastore.TestUpsert,
		"InClause":               datastore.TestInClause,
		"ReverseInClause":        datastore.TestReverseInClause,
		"CreateReadUpdateDelete": datastore.TestCreateReadUpdateDelete,
		"CreateManyUpdateDelete": datastore.TestCreateManyUpdateDelete,
		"Query":                  datastore.TestQuery,
		"Transactions":           datastore.TestTransactions,
		"DotNotation":            datastore.TestDotNotation,
		"Pagination":             datastore.TestPagination,
		"FindOne":                datastore.TestFindOne,
		"Update":                 datastore.TestUpdate,
		"Map":                    datastore.TestMap,
		"Contains":               datastore.TestContains,
	}
	pointerTests := map[string]func(t *testing.T, store datastore.DataStore){
		"PointerCreate":                 datastore.TestPointerCreate,
		"PointerCreatedAt":              datastore.TestPointerCreatedAt,
		"PointerUpsert":                 datastore.TestPointerUpsert,
		"PointerInClause":               datastore.TestPointerInClause,
		"PointerReverseInClause":        datastore.TestPointerReverseInClause,
		"PointerCreateReadUpdateDelete": datastore.TestPointerCreateReadUpdateDelete,
		"PointerCreateManyUpdateDelete": datastore.TestPointerCreateManyUpdateDelete,
		"PointerQuery":                  datastore.TestPointerQuery,
		"PointerTransactions":           datastore.TestPointerTransactions,
		"PointerDotNotation":            datastore.TestPointerDotNotation,
		"PointerPagination":             datastore.TestPointerPagination,
		"PointerFindOne":                datastore.TestPointerFindOne,
		"PointerUpdate":                 datastore.TestPointerUpdate,
		"MapPointer":                    datastore.TestMapPointer,
	}

	for testName, test := range tests {
		for storeName, storeFunc := range stores {
			t.Run(fmt.Sprintf("%v %v", storeName, testName), func(t *testing.T) {
				store := storeFunc(datastore.TestObject{})
				test(t, store)
			})
		}

	}
	for testName, test := range pointerTests {
		for storeName, storeFunc := range pointerStores {
			t.Run(fmt.Sprintf("%v %v", storeName, testName), func(t *testing.T) {
				store := storeFunc(&datastore.TestObject{})
				test(t, store)
			})
		}

	}

}
