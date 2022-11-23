<script setup lang="ts">
import { onMounted, toRefs } from "vue";

import { useGlobalStore } from "../store/globalStore";

const globalStore = useGlobalStore();
const { fetchAllRefinementSessions, createSampleRefinementSessions } =
  globalStore;
const { refinementSessions } = toRefs(globalStore);

onMounted(fetchAllRefinementSessions);
</script>

<template>
  <div>
    <button type="button" @click="createSampleRefinementSessions()">
      Create sample refinement session
    </button>
    <main>
      <h1>Refinement sessions</h1>
      <span v-if="!refinementSessions.length">No refinement sessions yet</span>
      <div
        v-for="refinementSession in refinementSessions"
        :key="refinementSession.id"
      >
        <h2>{{ refinementSession.code }}</h2>
        <h3>Tickets</h3>
        <p v-for="ticket in refinementSession.tickets" :key="ticket.id">
          {{ ticket.jiraRef }}
        </p>
      </div>
    </main>
  </div>
</template>
