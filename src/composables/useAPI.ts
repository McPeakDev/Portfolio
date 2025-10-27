import { API } from '@/assets/classes/api'

export const useAPI = () => {
  const api = new API()

  return {
    ...api,
  }
}
