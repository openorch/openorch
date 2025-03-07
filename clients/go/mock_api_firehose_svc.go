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

// MockFirehoseSvcAPI is a mock of FirehoseSvcAPI interface.
type MockFirehoseSvcAPI struct {
	ctrl     *gomock.Controller
	recorder *MockFirehoseSvcAPIMockRecorder
	isgomock struct{}
}

// MockFirehoseSvcAPIMockRecorder is the mock recorder for MockFirehoseSvcAPI.
type MockFirehoseSvcAPIMockRecorder struct {
	mock *MockFirehoseSvcAPI
}

// NewMockFirehoseSvcAPI creates a new mock instance.
func NewMockFirehoseSvcAPI(ctrl *gomock.Controller) *MockFirehoseSvcAPI {
	mock := &MockFirehoseSvcAPI{ctrl: ctrl}
	mock.recorder = &MockFirehoseSvcAPIMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockFirehoseSvcAPI) EXPECT() *MockFirehoseSvcAPIMockRecorder {
	return m.recorder
}

// PublishEvent mocks base method.
func (m *MockFirehoseSvcAPI) PublishEvent(ctx context.Context) ApiPublishEventRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "PublishEvent", ctx)
	ret0, _ := ret[0].(ApiPublishEventRequest)
	return ret0
}

// PublishEvent indicates an expected call of PublishEvent.
func (mr *MockFirehoseSvcAPIMockRecorder) PublishEvent(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PublishEvent", reflect.TypeOf((*MockFirehoseSvcAPI)(nil).PublishEvent), ctx)
}

// PublishEventExecute mocks base method.
func (m *MockFirehoseSvcAPI) PublishEventExecute(r ApiPublishEventRequest) (*http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "PublishEventExecute", r)
	ret0, _ := ret[0].(*http.Response)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// PublishEventExecute indicates an expected call of PublishEventExecute.
func (mr *MockFirehoseSvcAPIMockRecorder) PublishEventExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PublishEventExecute", reflect.TypeOf((*MockFirehoseSvcAPI)(nil).PublishEventExecute), r)
}

// SubscribeToEvents mocks base method.
func (m *MockFirehoseSvcAPI) SubscribeToEvents(ctx context.Context) ApiSubscribeToEventsRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SubscribeToEvents", ctx)
	ret0, _ := ret[0].(ApiSubscribeToEventsRequest)
	return ret0
}

// SubscribeToEvents indicates an expected call of SubscribeToEvents.
func (mr *MockFirehoseSvcAPIMockRecorder) SubscribeToEvents(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SubscribeToEvents", reflect.TypeOf((*MockFirehoseSvcAPI)(nil).SubscribeToEvents), ctx)
}

// SubscribeToEventsExecute mocks base method.
func (m *MockFirehoseSvcAPI) SubscribeToEventsExecute(r ApiSubscribeToEventsRequest) (string, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SubscribeToEventsExecute", r)
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// SubscribeToEventsExecute indicates an expected call of SubscribeToEventsExecute.
func (mr *MockFirehoseSvcAPIMockRecorder) SubscribeToEventsExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SubscribeToEventsExecute", reflect.TypeOf((*MockFirehoseSvcAPI)(nil).SubscribeToEventsExecute), r)
}
