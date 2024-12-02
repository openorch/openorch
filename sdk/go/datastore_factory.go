package sdk

import (
	"database/sql"
	"log/slog"
	"os"
	"path"

	"github.com/pkg/errors"
	"github.com/singulatron/superplatform/sdk/go/datastore"
	"github.com/singulatron/superplatform/sdk/go/datastore/localstore"
	"github.com/singulatron/superplatform/sdk/go/datastore/sqlstore"
	"github.com/singulatron/superplatform/sdk/go/logger"
)

func NewDatastoreFactory(tablePrefix string) (func(tableName string, instance any) (datastore.DataStore, error), error) {
	dbDriver := os.Getenv("SINGULATRON_DB_DRIVER")
	dbString := os.Getenv("SINGULATRON_DB_STRING")

	if dbDriver == "" {
		homeDir, _ := os.UserHomeDir()
		localStorePath := path.Join(homeDir, ".superplatform", "data")
		err := os.MkdirAll(localStorePath, 0755)
		if err != nil {
			logger.Error(
				"Creating data folder failed",
				slog.String("error", err.Error()),
			)
			os.Exit(1)
		}

		return func(tableName string, instance any) (datastore.DataStore, error) {
			return localstore.NewLocalStore(
				instance,
				path.Join(localStorePath, tableName),
			)
		}, nil
	}

	db, err := sql.Open(dbDriver, dbString)
	if err != nil {
		return nil, errors.Wrap(err, "error opening sql db")
	}

	return func(tableName string, instance any) (datastore.DataStore, error) {
		return sqlstore.NewSQLStore(
			instance,
			dbDriver,
			db,
			tablePrefix+"_"+tableName,
			false,
		)
	}, nil
}
