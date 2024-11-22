package chatservice_test

import (
	"context"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/require"

	openapi "github.com/singulatron/superplatform/clients/go"
	sdk "github.com/singulatron/superplatform/sdk/go"
	"github.com/singulatron/superplatform/server/internal/di"
	chattypes "github.com/singulatron/superplatform/server/internal/services/chat/types"
)

func TestMessageCreatesThread(t *testing.T) {
	hs := &di.HandlerSwitcher{}
	server := httptest.NewServer(hs)
	defer server.Close()

	options := &di.Options{
		Test: true,
		Url:  server.URL,
	}
	universe, starterFunc, err := di.BigBang(options)
	require.NoError(t, err)

	hs.UpdateHandler(universe)

	err = starterFunc()
	require.NoError(t, err)

	token, err := sdk.RegisterUser(options.ClientFactory.Client().UserSvcAPI, "someuser", "pw123", "Some name")
	require.NoError(t, err)
	userClient := options.ClientFactory.Client(sdk.WithToken(token))

	t.Run("no thread id", func(t *testing.T) {
		req := &chattypes.AddMessageRequest{
			Message: &chattypes.Message{
				Id:      sdk.Id("msg"),
				Content: "hi there",
			},
		}

		_, _, err := userClient.ChatSvcAPI.AddMessage(context.Background(), "-").Request(
			openapi.ChatSvcAddMessageRequest{
				Message: &openapi.ChatSvcMessage{
					Id:      openapi.PtrString(req.Message.Id),
					Content: openapi.PtrString(req.Message.Content),
				},
			},
		).Execute()
		require.Error(t, err)
	})

	t.Run("thread does not exist", func(t *testing.T) {
		req := &chattypes.AddMessageRequest{
			Message: &chattypes.Message{
				Id:       sdk.Id("msg"),
				ThreadId: "1",
				Content:  "hi there",
			},
		}

		_, _, err := userClient.ChatSvcAPI.AddMessage(context.Background(), req.Message.ThreadId).Request(
			openapi.ChatSvcAddMessageRequest{
				Message: &openapi.ChatSvcMessage{
					Id:      openapi.PtrString(req.Message.Id),
					Content: openapi.PtrString(req.Message.Content),
				},
			},
		).Execute()
		require.Error(t, err)
	})

	t.Run("no user id should not fail", func(t *testing.T) {
		tid := sdk.Id("thr")
		title := "Test Thread Title"

		req := &chattypes.AddThreadRequest{
			Thread: &chattypes.Thread{
				Id:    tid,
				Title: title,
			},
		}

		_, _, err = userClient.ChatSvcAPI.AddThread(context.Background()).Request(
			openapi.ChatSvcAddThreadRequest{
				Thread: &openapi.ChatSvcThread{
					Id:    openapi.PtrString(req.Thread.Id),
					Title: openapi.PtrString(req.Thread.Title),
				},
			},
		).Execute()
		require.NoError(t, err)
	})

	userId := "usr-1"
	var threadId string

	t.Run("create thread", func(t *testing.T) {
		tid := sdk.Id("thr")
		title := "Test Thread Title"

		req := &chattypes.AddThreadRequest{
			Thread: &chattypes.Thread{
				Id:      tid,
				Title:   title,
				UserIds: []string{userId},
			},
		}

		rsp, _, err := userClient.ChatSvcAPI.AddThread(context.Background()).Request(
			openapi.ChatSvcAddThreadRequest{
				Thread: &openapi.ChatSvcThread{
					Id:      openapi.PtrString(req.Thread.Id),
					Title:   openapi.PtrString(req.Thread.Title),
					UserIds: []string{userId},
				},
			},
		).Execute()
		require.NoError(t, err)

		thread := rsp.Thread

		require.Equal(t, tid, thread.Id)
		require.Equal(t, title, thread.Title)
		threadId = req.Thread.Id
	})

	t.Run("no user id", func(t *testing.T) {
		req := chattypes.AddMessageRequest{
			Message: &chattypes.Message{
				Id:       sdk.Id("msg"),
				ThreadId: threadId,
				Content:  "hi there",
			}}

		_, _, err := userClient.ChatSvcAPI.AddMessage(context.Background(), req.Message.ThreadId).Request(
			openapi.ChatSvcAddMessageRequest{
				Message: &openapi.ChatSvcMessage{
					Id:      openapi.PtrString(req.Message.Id),
					Content: openapi.PtrString(req.Message.Content),
				},
			},
		).Execute()
		require.Error(t, err)
	})
}
