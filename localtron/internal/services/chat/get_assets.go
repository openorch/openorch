/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package chatservice

import (
	chattypes "github.com/singulatron/singulatron/localtron/internal/services/chat/types"
	"github.com/singulatron/singulatron/sdk/go/datastore"
)

func (a *ChatService) getAssets(assetIds []string) ([]*chattypes.Asset, error) {
	assetIs, err := a.assetsStore.Query(
		datastore.Equals(datastore.Field("id"), assetIds),
	).Find()

	if err != nil {
		return nil, err
	}

	assets := []*chattypes.Asset{}
	for _, assetI := range assetIs {
		assets = append(assets, assetI.(*chattypes.Asset))
	}

	return assets, nil
}
