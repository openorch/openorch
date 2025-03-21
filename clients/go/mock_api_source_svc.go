// Code generated by MockGen. DO NOT EDIT.
//
// Generated by this command:
//
//

// Package openapi is a generated GoMock package.
package openapi

import (
	context "context"
	http "net/http"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"
)

// MockSourceSvcAPI is a mock of SourceSvcAPI interface.
type MockSourceSvcAPI struct {
	ctrl     *gomock.Controller
	recorder *MockSourceSvcAPIMockRecorder
	isgomock struct{}
}

// MockSourceSvcAPIMockRecorder is the mock recorder for MockSourceSvcAPI.
type MockSourceSvcAPIMockRecorder struct {
	mock *MockSourceSvcAPI
}

// NewMockSourceSvcAPI creates a new mock instance.
func NewMockSourceSvcAPI(ctrl *gomock.Controller) *MockSourceSvcAPI {
	mock := &MockSourceSvcAPI{ctrl: ctrl}
	mock.recorder = &MockSourceSvcAPIMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockSourceSvcAPI) EXPECT() *MockSourceSvcAPIMockRecorder {
	return m.recorder
}

// CheckoutRepo mocks base method.
func (m *MockSourceSvcAPI) CheckoutRepo(ctx context.Context) ApiCheckoutRepoRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CheckoutRepo", ctx)
	ret0, _ := ret[0].(ApiCheckoutRepoRequest)
	return ret0
}

// CheckoutRepo indicates an expected call of CheckoutRepo.
func (mr *MockSourceSvcAPIMockRecorder) CheckoutRepo(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CheckoutRepo", reflect.TypeOf((*MockSourceSvcAPI)(nil).CheckoutRepo), ctx)
}

// CheckoutRepoExecute mocks base method.
func (m *MockSourceSvcAPI) CheckoutRepoExecute(r ApiCheckoutRepoRequest) (*SourceSvcCheckoutRepoResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CheckoutRepoExecute", r)
	ret0, _ := ret[0].(*SourceSvcCheckoutRepoResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// CheckoutRepoExecute indicates an expected call of CheckoutRepoExecute.
func (mr *MockSourceSvcAPIMockRecorder) CheckoutRepoExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CheckoutRepoExecute", reflect.TypeOf((*MockSourceSvcAPI)(nil).CheckoutRepoExecute), r)
}
