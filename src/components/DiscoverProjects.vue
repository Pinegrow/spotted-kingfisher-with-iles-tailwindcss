<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'DiscoverProjects',
  // 	},
  // })

  const projectImages = [
    'https://images.unsplash.com/photo-1513633200258-fcd8728b598d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIyMXx8d2lsZGxpZmUlMjBuYXR1cmV8ZW58MHx8fHwxNjI0ODMxOTA0&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1535077863442-d02c5a67da76?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDczOXx8d2lsZGxpZmUlMjBuYXR1cmV8ZW58MHx8fHwxNjI0OTA1MjQ1&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1535715145821-23c425db8a2c?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDU4M3x8d2lsZGxpZmUlMjBuYXR1cmV8ZW58MHx8fHwxNjI0OTA1MTky&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519515449982-8b104b672029?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDl8fHR1cnRsZXxlbnwwfHx8fDE2MjQ5MTMzNTk&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1475813664016-f6a7ecaee6bf?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDY5NXx8d2lsZGxpZmUlMjBuYXR1cmV8ZW58MHx8fHwxNjI0OTA1MjM3&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559417050-039d66224d3d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE0Mnx8ZWxlcGhhbnR8ZW58MHx8fHwxNjI0OTEzMzM4&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=300&fit=crop',
  ]
</script>
<template>
  <section
    class="bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="text-white dark:text-neutral-950"
      fill="currentColor"
    >
      <path
        data-name="Path 7040"
        d="M1440 256l-80-10.7c-80-10.3-240-32.3-400-74.6C800 128 640 64 480 69.3 320 75 160 149 80 186.7L0 224V0h1440z"
      ></path>
    </svg>
    <div class="container mx-auto px-4 relative py-12">
      <div class="mb-8 text-left">
        <h2 class="font-bold mb-2 text-5xl">Discover Projects</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          congue tortor.
        </p>
      </div>
      <div class="-mx-4 flex flex-wrap justify-center">
        <div class="px-4 w-full">
          <div class="-mx-1 flex flex-wrap">
            <ProjectCard
              v-for="(image, index) in projectImages"
              :key="index"
              :project-image="image"
              :project-name="`Project ${index + 1}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
