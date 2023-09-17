<script setup lang="ts">
  // defineProps({
  //   name: {
  //     type: String,
  //     default: 'HeroSection',
  //   },
  // })
</script>
<template>
  <section class="bg-primary-900 relative text-white">
    <div
      class="bg-center bg-cover bg-design-image bg-no-repeat blur-none z-0 lg:bg-design-image-large"
    >
      <div class="shadow"></div>
      <div class="container mx-auto pb-10 pt-36 px-4">
        <div class="-mx-4 flex flex-wrap">
          <div class="px-4 w-full lg:w-7/12 2xl:w-6/12">
            <h1 class="font-light mb-4 text-6xl sm:text-7xl xl:text-8xl">
              Help the World&rsquo;s Most
              <span class="font-bold">Iconic Species</span>
            </h1>
            <p class="mb-6 text-xl sm:pr-12">
              Conserve the endangered spotted kingfisher to protect nature's
              beauty, preserve biodiversity, and ensure a sustainable future.
            </p>
            <BaseButton
              size="xl"
              label="Explore Now"
              target="_blank"
              to="https://github.com/pinegrow/spotted-kingfisher-with-iles-tailwindcss"
              trailing-icon="i-material-symbols-barefoot"
            >
            </BaseButton>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="currentColor"
        class="bg-transparent text-white dark:text-neutral-950"
      >
        <path
          d="M0,64L80,74.7C160,85,320,107,480,149.3C640,192,800,256,960,250.7C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>
<style scoped></style>
