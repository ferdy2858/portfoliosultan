<template>
  <main class="bg-gradient-to-b from-slate-50 via-gray-300 to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen py-16 px-4">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">My Projects</h2><br>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="h-48 w-full object-cover bg-gray-200 dark:bg-gray-700"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ project.title }}
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              {{ project.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="(tag, index) in project.tags"
                :key="index"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-sm"
              >
                {{ tag }}
              </span>
            </div>
            <NuxtLink
              :to="`/project/${project.slug}`"
              class="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
            >
              View Project
              <span class="ml-2">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
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
  },
  {
    title: 'Weather App',
    slug: 'weather-app',
    description: 'Weather forecast application using API integration.',
    image: '/img/mmm.png',
    tags: ['Vue Js', 'Axios', 'API']
  },
  {
    title: 'Blog CMS',
    slug: 'blog-cms',
    description: 'Content management system for blogging built with Nuxt and Strapi.',
    image: '/img/kebas.jpg',
    tags: ['Nuxt Js', 'Strapi', 'Java Script']
  },
  {
    title: 'Task Manager',
    slug: 'task-manager',
    description: 'A simple task management app with authentication.',
    image: '/img/nTask.png',
    tags: ['Vue Js', 'Pinia', 'Tailwind']
  }
]
</script>
