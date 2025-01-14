<script setup lang="ts">
  const { frontmatter, site, route } = usePage()
  const { title, description, ogImage, generator, tags } = frontmatter
  const canonicalUrl = new URL(route.path, site.url)

  useHeadAndMeta({ title, description, ogImage, canonicalUrl, generator, tags })

  const currentPath = computed(() => {
    return route.path
  })
</script>

<template>
  <div class="relative">
    <div
      class="bg-white dark:bg-neutral-950 dark:text-neutral-50 flex flex-col relative text-neutral-900"
    >
      <NavBar
        :class="[route.path === '/' ? 'absolute bg-transparent z-10' : '']"
        :current-path="currentPath"
      />
      <main class="shadow">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
<style></style>
