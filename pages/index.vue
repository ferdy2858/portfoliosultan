<template>
  <main class="bg-gradient-to-b from-slate-50 via-gray-300 to-slate-50 dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 min-h-screen">
    <!-- Hero Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Frontend & Backend Developer creating beautiful digital experiences 
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <NuxtLink
                to="/projects"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 md:py-4 md:text-lg md:px-10"
              >
                View My Work
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-slate-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ project.title }}</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-300">{{ project.description }}</p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="(tag, index) in project.tags"
                  :key="index"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-sm"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script setup>
const projects = [
  {
    title: 'CRUD App',
    slug: 'crud-app',
    description: 'Simple CRUD application using Vue & Firebase.',
    image: '/img/crudsimple.png',
    tags: ['Vue Js', 'Fire Base', 'Java Script']
  },
  {
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    description: 'Personal portfolio built with Nuxt and Tailwind CSS.',
    image: '/img/tunat.png',
    tags: ['Nuxt Js', 'Tailwind', 'Java Script']
  },
  {
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    description: 'Online store prototype using Nuxt.js and Strapi CMS.',
    image: '/img/oke.png',
    tags: ['Laravel', 'Bootstrap', 'Java Script']
  }
]
</script>
