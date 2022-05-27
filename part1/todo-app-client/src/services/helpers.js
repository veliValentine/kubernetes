export const healthCheck = async (axiosInstance, apiName = '') => {
  const { data } = await axiosInstance.get('/health') ?? {}
  if (data !== 'ok') {
    console.error(`Can not connect to ${apiName}`)
  }
}
