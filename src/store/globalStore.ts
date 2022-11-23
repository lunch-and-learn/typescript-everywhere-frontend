import { defineStore } from 'pinia'
import { RefinementSessionDTO } from 'lunch-learn-typescript-shared'
import { getAllRefinementSessions, postCreateSampleRefinementSessions } from '@/service/refinementSessionService'
import { Ref, ref } from 'vue'

export const useGlobalStore = defineStore('main', () => {
  const refinementSessions: Ref<RefinementSessionDTO[]> = ref([])

  const fetchAllRefinementSessions = async () => {
    refinementSessions.value = await getAllRefinementSessions()
  }

  const createSampleRefinementSessions = async () => {
    await postCreateSampleRefinementSessions()
    await fetchAllRefinementSessions()
  }

  return {
    refinementSessions,
    fetchAllRefinementSessions,
    createSampleRefinementSessions,
  }
})