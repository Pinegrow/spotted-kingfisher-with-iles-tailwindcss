<page>
    title: Explore
</page>
<script setup lang="ts">
  // import { usePage } from 'iles'
  // const { frontmatter, meta } = usePage()
</script>
<template>
  <div class="py-12">
    <section class="container mt-6 mx-auto p-4">
      <h2 class="mb-4">Facts about the endangered spotted kingfisher</h2>
      <div class="spotted-kingfisher">
        <div>
          <img
            src="https://images.unsplash.com/photo-1473731308450-b3a5fc9f16d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDEwfHxzcG90dGVkJTIwa2luZ2Zpc2hlcnxlbnwwfHx8fDE2OTA0MjYwNDd8MA&ixlib=rb-4.0.3&q=85"
            alt="Spotted Kingfisher"
            class="w-full md:rounded-2xl"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1578763260904-16e35fc8877a?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDR8fHNwb3R0ZWQlMjBraW5nZmlzaGVyfGVufDB8fHx8MTY5MDQyNjAyN3ww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop"
            alt="Spotted Kingfisher"
            class="w-full md:rounded-2xl"
          />
        </div>
      </div>
      <p class="mt-4">
        The spotted kingfisher is an endangered bird species known for its
        vibrant plumage and distinctive call. It is native to tropical
        rainforests and relies on clean water sources for hunting its prey. Due
        to habitat loss and pollution, the population of spotted kingfishers has
        been declining rapidly in recent years.
      </p>
    </section>
    <section class="container mt-6 mx-auto p-4">
      <div class="oz-wildlife">
        <div>
          <img
            src="https://images.unsplash.com/photo-1589685523979-6544ec36b055?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDZ8fGthbmdhcm9vfGVufDB8fHx8MTY5MDQyNjEyM3ww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop"
            alt="kangaroo"
            class="md:rounded-2xl"
          />
          <h2 class="mt-4">Kangaroo</h2>
          <p>
            Kangaroos are marsupials native to Australia. They are known for
            their powerful hind legs, large feet, and long tail. Kangaroos are
            herbivores and mainly eat grasses and plants. They are also
            excellent swimmers and can hop at high speeds, reaching up to 40
            mph. Unfortunately, kangaroos are facing various threats and are
            listed as endangered species in some parts of Australia.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1556811431-ec33c663aa89?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDEzfHxrb2FsYXxlbnwwfHx8fDE2OTA0MjYxMjN8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop"
            alt="koala"
            class="md:rounded-2xl"
          />
          <h2 class="mt-4">Koala</h2>
          <p>
            Koalas are an endangered species. They are native to Australia and
            primarily feed on eucalyptus leaves. Due to habitat loss and other
            factors, their population has significantly declined in recent
            years.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1579571274591-51ace815723a?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDExfHxwbGF0eXB1c3xlbnwwfHx8fDE2OTA0MjYxMjN8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop"
            alt="platypus"
            class="md:rounded-2xl"
          />
          <h2 class="mt-4">Platypus</h2>
          <p>
            The platypus is a unique and fascinating creature. It is one of the
            few mammals that lay eggs and produce milk to feed their young.
            Found only in Australia, the platypus is classified as an endangered
            species due to habitat loss and pollution.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1629005732355-e1ac75a75e3f?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDExfHx0YXNtYW5pYW4lMjBkZXZpbHxlbnwwfHx8fDE2OTA0MjYxMjR8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop"
            alt="tasmanian-devil"
            class="md:rounded-2xl"
          />
          <h2 class="mt-4">Tasmanian Devil</h2>
          <p>
            The Tasmanian Devil is an endangered marsupial native to Tasmania,
            Australia. It is known for its stocky build, black fur, and loud
            screeching sound. Tasmanian Devils are carnivorous and mainly feed
            on carrion. They are facing threats such as habitat loss, disease,
            and road accidents.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
  .spotted-kingfisher {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
  }
  @media (min-width: 768px) {
    .spotted-kingfisher {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }
  .oz-wildlife {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
  }
  @media (min-width: 768px) {
    .oz-wildlife {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }
</style>
