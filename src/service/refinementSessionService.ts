import { RefinementSessionDTO } from "lunch-learn-typescript-shared"
import { callApi } from "."

export const getAllRefinementSessions = async () => {
  return callApi<RefinementSessionDTO[]>('/refinementSessions')
}

export const postCreateSampleRefinementSessions = async () => {
  return callApi<RefinementSessionDTO[]>('/refinementSession', { method: 'POST' })
}
