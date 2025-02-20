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

// MockPromptSvcAPI is a mock of PromptSvcAPI interface.
type MockPromptSvcAPI struct {
	ctrl     *gomock.Controller
	recorder *MockPromptSvcAPIMockRecorder
	isgomock struct{}
}

// MockPromptSvcAPIMockRecorder is the mock recorder for MockPromptSvcAPI.
type MockPromptSvcAPIMockRecorder struct {
	mock *MockPromptSvcAPI
}

// NewMockPromptSvcAPI creates a new mock instance.
func NewMockPromptSvcAPI(ctrl *gomock.Controller) *MockPromptSvcAPI {
	mock := &MockPromptSvcAPI{ctrl: ctrl}
	mock.recorder = &MockPromptSvcAPIMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPromptSvcAPI) EXPECT() *MockPromptSvcAPIMockRecorder {
	return m.recorder
}

// ListPrompts mocks base method.
func (m *MockPromptSvcAPI) ListPrompts(ctx context.Context) ApiListPromptsRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListPrompts", ctx)
	ret0, _ := ret[0].(ApiListPromptsRequest)
	return ret0
}

// ListPrompts indicates an expected call of ListPrompts.
func (mr *MockPromptSvcAPIMockRecorder) ListPrompts(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListPrompts", reflect.TypeOf((*MockPromptSvcAPI)(nil).ListPrompts), ctx)
}

// ListPromptsExecute mocks base method.
func (m *MockPromptSvcAPI) ListPromptsExecute(r ApiListPromptsRequest) (*PromptSvcListPromptsResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListPromptsExecute", r)
	ret0, _ := ret[0].(*PromptSvcListPromptsResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// ListPromptsExecute indicates an expected call of ListPromptsExecute.
func (mr *MockPromptSvcAPIMockRecorder) ListPromptsExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListPromptsExecute", reflect.TypeOf((*MockPromptSvcAPI)(nil).ListPromptsExecute), r)
}

// Prompt mocks base method.
func (m *MockPromptSvcAPI) Prompt(ctx context.Context) ApiPromptRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Prompt", ctx)
	ret0, _ := ret[0].(ApiPromptRequest)
	return ret0
}

// Prompt indicates an expected call of Prompt.
func (mr *MockPromptSvcAPIMockRecorder) Prompt(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Prompt", reflect.TypeOf((*MockPromptSvcAPI)(nil).Prompt), ctx)
}

// PromptExecute mocks base method.
func (m *MockPromptSvcAPI) PromptExecute(r ApiPromptRequest) (*PromptSvcPromptResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "PromptExecute", r)
	ret0, _ := ret[0].(*PromptSvcPromptResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// PromptExecute indicates an expected call of PromptExecute.
func (mr *MockPromptSvcAPIMockRecorder) PromptExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PromptExecute", reflect.TypeOf((*MockPromptSvcAPI)(nil).PromptExecute), r)
}

// PromptTypes mocks base method.
func (m *MockPromptSvcAPI) PromptTypes(ctx context.Context) ApiPromptTypesRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "PromptTypes", ctx)
	ret0, _ := ret[0].(ApiPromptTypesRequest)
	return ret0
}

// PromptTypes indicates an expected call of PromptTypes.
func (mr *MockPromptSvcAPIMockRecorder) PromptTypes(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PromptTypes", reflect.TypeOf((*MockPromptSvcAPI)(nil).PromptTypes), ctx)
}

// PromptTypesExecute mocks base method.
func (m *MockPromptSvcAPI) PromptTypesExecute(r ApiPromptTypesRequest) (*PromptSvcTypesResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "PromptTypesExecute", r)
	ret0, _ := ret[0].(*PromptSvcTypesResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// PromptTypesExecute indicates an expected call of PromptTypesExecute.
func (mr *MockPromptSvcAPIMockRecorder) PromptTypesExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PromptTypesExecute", reflect.TypeOf((*MockPromptSvcAPI)(nil).PromptTypesExecute), r)
}

// RemovePrompt mocks base method.
func (m *MockPromptSvcAPI) RemovePrompt(ctx context.Context) ApiRemovePromptRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RemovePrompt", ctx)
	ret0, _ := ret[0].(ApiRemovePromptRequest)
	return ret0
}

// RemovePrompt indicates an expected call of RemovePrompt.
func (mr *MockPromptSvcAPIMockRecorder) RemovePrompt(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RemovePrompt", reflect.TypeOf((*MockPromptSvcAPI)(nil).RemovePrompt), ctx)
}

// RemovePromptExecute mocks base method.
func (m *MockPromptSvcAPI) RemovePromptExecute(r ApiRemovePromptRequest) (map[string]any, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RemovePromptExecute", r)
	ret0, _ := ret[0].(map[string]any)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// RemovePromptExecute indicates an expected call of RemovePromptExecute.
func (mr *MockPromptSvcAPIMockRecorder) RemovePromptExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RemovePromptExecute", reflect.TypeOf((*MockPromptSvcAPI)(nil).RemovePromptExecute), r)
}

// SubscribeToPromptResponses mocks base method.
func (m *MockPromptSvcAPI) SubscribeToPromptResponses(ctx context.Context, threadId string) ApiSubscribeToPromptResponsesRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SubscribeToPromptResponses", ctx, threadId)
	ret0, _ := ret[0].(ApiSubscribeToPromptResponsesRequest)
	return ret0
}

// SubscribeToPromptResponses indicates an expected call of SubscribeToPromptResponses.
func (mr *MockPromptSvcAPIMockRecorder) SubscribeToPromptResponses(ctx, threadId any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SubscribeToPromptResponses", reflect.TypeOf((*MockPromptSvcAPI)(nil).SubscribeToPromptResponses), ctx, threadId)
}

// SubscribeToPromptResponsesExecute mocks base method.
func (m *MockPromptSvcAPI) SubscribeToPromptResponsesExecute(r ApiSubscribeToPromptResponsesRequest) (string, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SubscribeToPromptResponsesExecute", r)
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// SubscribeToPromptResponsesExecute indicates an expected call of SubscribeToPromptResponsesExecute.
func (mr *MockPromptSvcAPIMockRecorder) SubscribeToPromptResponsesExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SubscribeToPromptResponsesExecute", reflect.TypeOf((*MockPromptSvcAPI)(nil).SubscribeToPromptResponsesExecute), r)
}
