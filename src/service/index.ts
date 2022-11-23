import { APIResponse } from 'lunch-learn-typescript-shared'

export async function callApi<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const res = await fetch(`http://localhost:3000${url}`, options)
    const jsonRes = await res.json() as APIResponse<T>
    return jsonRes.data
  } catch (err) {
    console.warn('API call failed')
    throw err
  }
}