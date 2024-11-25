/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package secretservice_test

import (
	"context"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/gorilla/mux"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/clients/llm"
	"github.com/singulatron/superplatform/sdk/go/test"
	"github.com/singulatron/superplatform/server/internal/di"
	"go.uber.org/mock/gomock"
)

func TestSecretService(t *testing.T) {
	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, "SecretService Suite")
}

var _ = ginkgo.Describe("Secret Tests", func() {
	var (
		server     *httptest.Server
		ctrl       *gomock.Controller
		ctx        context.Context
		lc         *llm.MockClientI
		userClient *openapi.APIClient

		mockClientFactory *sdk.MockClientFactory
		mockUserSvc       *openapi.MockUserSvcAPI

		universe    *mux.Router
		starterFunc func() error

		responses []*llm.CompletionResponse
	)

	ginkgo.BeforeEach(func() {
		ctx = context.Background()
		ctrl = gomock.NewController(ginkgo.GinkgoT())
		hs := &di.HandlerSwitcher{}
		server = httptest.NewServer(hs)

		lc = llm.NewMockClientI(ctrl)

		mockClientFactory = sdk.NewMockClientFactory(ctrl)
		mockUserSvc = test.MockUserSvc(ctx, ctrl)

		mockClientFactory.EXPECT().
			Client(gomock.Any()).
			Return(&openapi.APIClient{
				UserSvcAPI: mockUserSvc,
			}).
			AnyTimes()

		options := &di.Options{
			Test:          true,
			Url:           server.URL,
			LLMClient:     lc,
			ClientFactory: mockClientFactory,
		}

		var err error
		universe, starterFunc, err = di.BigBang(options)
		gomega.Expect(err).NotTo(gomega.HaveOccurred())

		hs.UpdateHandler(universe)

		gomega.Expect(err).NotTo(gomega.HaveOccurred())
	})

	ginkgo.JustBeforeEach(func() {
		err := starterFunc()
		gomega.Expect(err).NotTo(gomega.HaveOccurred())
	})

	ginkgo.AfterEach(func() {
		server.Close()
		ctrl.Finish()
	})

	ginkgo.Context("secret read works", func() {
		ginkgo.BeforeEach(func() {

		})

		ginkgo.It("returns ok for not existing secret", func() {
				/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package promptservice_test

import (
	"context"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/gorilla/mux"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/sdk/go/clients/llm"
	"github.com/singulatron/superplatform/sdk/go/test"
	"github.com/singulatron/superplatform/server/internal/di"
	modeltypes "github.com/singulatron/superplatform/server/internal/services/model/types"
	"go.uber.org/mock/gomock"
)

func TestSecretService(t *testing.T) {
	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, "SecretService Suite")
}

var _ = ginkgo.Describe("Secret Endpoints", func() {
	var (
		server     *httptest.Server
		ctrl       *gomock.Controller
		ctx        context.Context
		lc         *llm.MockClientI
		userClient *openapi.APIClient

		mockClientFactory *sdk.MockClientFactory
		mockUserSvc       *openapi.MockUserSvcAPI


		universe    *mux.Router
		starterFunc func() error

	)

	ginkgo.BeforeEach(func() {
		ctx = context.Background()
		ctrl = gomock.NewController(ginkgo.GinkgoT())
		hs := &di.HandlerSwitcher{}
		server = httptest.NewServer(hs)

		lc = llm.NewMockClientI(ctrl)

		mockClientFactory = sdk.NewMockClientFactory(ctrl)
		mockUserSvc = test.MockUserSvc(ctx, ctrl)


		mockClientFactory.EXPECT().
			Client(gomock.Any()).
			Return(&openapi.APIClient{
				UserSvcAPI:     mockUserSvc,
				SecretSvcAPI: sdk.NewApiClientFactory(server.URL).
					Client().
					SecretSvcAPI,
			}).
			AnyTimes()

		options := &di.Options{
			Test:          true,
			Url:           server.URL,
			LLMClient:     lc,
			ClientFactory: mockClientFactory,
		}

		var err error
		universe, starterFunc, err = di.BigBang(options)
		gomega.Expect(err).NotTo(gomega.HaveOccurred())

		hs.UpdateHandler(universe)

		gomega.Expect(err).NotTo(gomega.HaveOccurred())
	})

	ginkgo.JustBeforeEach(func() {
	
		err := starterFunc()
		gomega.Expect(err).NotTo(gomega.HaveOccurred())
	})

	ginkgo.AfterEach(func() {
		server.Close()
		ctrl.Finish()
	})

	ginkgo.Context("read works", func() {
		ginkgo.BeforeEach(func() {
			
		})

		ginkgo.It("read returns nonexistent", func() {
			//crsp, _, err := userClient.SecretServiceAPI.
			//gomega.Expect(err).NotTo(gomega.HaveOccurred())

		})
	})
})
