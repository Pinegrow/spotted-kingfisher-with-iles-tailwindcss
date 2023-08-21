<script setup lang="ts">
  const currentRoute = useRoute()
</script>
<template>
  <div class="relative">
    <MetaTags />
    <div
      class="bg-white dark:bg-neutral-950 dark:text-neutral-50 flex flex-col relative text-neutral-900"
    >
      <NavBar
        :class="[
          currentRoute.path === '/' ? 'absolute bg-transparent z-10' : '',
        ]"
      />
      <div class="shadow">
        <slot />
      </div>
      <TheFooter client:visible />
    </div>
  </div>
</template>
<style></style>
