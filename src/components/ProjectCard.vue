<script setup lang="ts">
  defineProps({
    projectName: {
      type: String,
      default: 'Project',
    },
    projectImage: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1473731308450-b3a5fc9f16d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDEwfHxzcG90dGVkJTIwa2luZ2Zpc2hlcnxlbnwwfHx8fDE2OTA0MjYwNDd8MA&ixlib=rb-4.0.3&q=85',
    },
  })
</script>
<template>
  <div class="p-4 w-6/12 lg:w-4/12">
    <div
      class="block group relative overflow-hidden text-primary-600 dark:text-primary-200 bg-neutral-50 dark:bg-neutral-900 rounded-lg"
    >
      <img
        class="group-hover:opacity-90 w-full"
        width="300"
        height="300"
        :src="projectImage"
      />

      <div class="m-4">
        <h6 class="font-bold">{{ projectName }}</h6>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
