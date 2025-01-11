<script setup lang="ts">
  useHeadAndMeta()
  const { route } = usePage()
</script>

<template>
  <div class="relative">
    <div
      class="bg-white dark:bg-neutral-950 dark:text-neutral-50 flex flex-col relative text-neutral-900"
    >
      <NavBar
        :class="[route.path === '/' ? 'absolute bg-transparent z-10' : '']"
        :current-path="route.path"
      />
      <main class="shadow">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
<style></style>
