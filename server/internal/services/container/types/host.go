package container_svc

type GetDockerHostRequest struct{}

type GetDockerHostResponse struct {
	Host string `json:"host" binding:"required"`
}
