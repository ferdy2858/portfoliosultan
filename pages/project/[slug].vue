<template>
  <main
    class="min-h-screen bg-gradient-to-b from-slate-50 via-gray-300 to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-1000 py-16 px-4 transition-colors duration-300">
    <div class="max-w-5xl mx-auto">
      <div v-if="project" class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {{ project.title }}
            </h1>
            <p class="text-lg text-gray-700 dark:text-gray-300">
              {{ project.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="(tag, index) in project.tags" :key="index"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-sm">
                {{ tag }}
              </span>
            </div>
          </div>
          <img :src="project.image" alt="Project Image" class="w-full rounded-xl shadow-md object-cover" />
        </div>

        <NuxtLink to="/projects"
          class="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
          ← Back to Project
        </NuxtLink>
      </div>

      <div v-else class="text-center mt-20">
        <h2 class="text-3xl font-semibold text-red-600 dark:text-red-400 mb-4">
          Project tidak ditemukan
        </h2>
        <NuxtLink to="/projects" class="text-indigo-600 dark:text-indigo-400 hover:underline text-lg">
          ← Kembali ke project
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()

const projects = [
  {
    title: 'CRUD App',
    slug: 'crud-app',
    description: 'This is a fully functional CRUD (Create, Read, Update, Delete) application developed using Vue.js for the frontend and Firebase as the backend and real-time database. The app allows users to perform real-time data operations with instant synchronization across devices. It features form validation, dynamic rendering, and a clean user interface that focuses on usability and performance. This project demonstrates my understanding of state management, component-based architecture, and integrating third-party services like Firebase Authentication and Firestore.',
    image: '/img/crudsimple.png',
    tags: ['Vue Js', 'Fire Base', 'Java Script']
  },
  {
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    description: 'This is a personal portfolio website built with Nuxt.js and styled using Tailwind CSS. It highlights my professional experience, showcases selected projects, and includes contact information and social links. The site is fully responsive, SEO-optimized, and supports dark mode for improved accessibility. It was designed with performance and minimalism in mind, and reflects my skills in frontend development, UI/UX design, and building fast-loading, accessible web applications. The portfolio is continuously updated to reflect the latest work and technology stack I am using.',
    image: '/img/tunat.png',
    tags: ['Nuxt Js', 'Tailwind', 'Java Script']
  },
  {
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    description: 'This e-commerce platform prototype was developed using Laravel for the backend and Bootstrap for the UI layer. It features product listing, filtering, cart functionality, and a mock checkout flow. The backend includes RESTful APIs, product management with CRUD operations, and user authentication. This project focuses on scalability and clean architecture, allowing for easy future integration with payment gateways and inventory systems. The design is responsive and aims to deliver a user-friendly shopping experience across all devices.',
    image: '/img/oke.png',
    tags: ['Laravel', 'Bootstrap', 'Java Script']
  },
  {
    title: 'Weather App',
    slug: 'weather-app',
    description: 'The Weather App is a real-time weather forecasting application that integrates with a third-party weather API to provide accurate and up-to-date weather information based on user input. Built with Vue.js for a dynamic and responsive user interface and Axios for handling HTTP requests, this application allows users to search for any city worldwide and receive detailed weather data including temperature, humidity, wind speed, and daily conditions. The app features a clean, user-friendly design with intuitive navigation, making it suitable for users of all ages. Ideal for travelers, outdoor planners, or anyone needing instant weather updates.',
    image: '/img/mmm.png',
    tags: ['Vue Js', 'Axios', 'API']
  },
  {
    title: 'Blog CMS',
    slug: 'blog-cms',
    description: 'The Blog CMS is a powerful and modern content management system designed specifically for blogging. It utilizes Nuxt.js for the frontend, leveraging server-side rendering for better SEO and performance, and Strapi as a headless CMS for flexible content creation and management. The system includes a rich text editor, media upload support, tag and category management, and an admin dashboard thats intuitive and easy to use. Authors can create and manage blog posts efficiently, while the frontend delivers fast page loads and responsive design. This CMS is perfect for personal bloggers, content teams, or businesses seeking a customizable publishing platform',
    image: '/img/kebas.jpg',
    tags: ['Nuxt Js', 'Strapi', 'Java Script']
  },
  {
    title: 'Task Manager',
    slug: 'task-manager',
    description: 'The Task Manager is a lightweight yet efficient task management application designed to help users stay organized and productive. Developed using Vue.js, it integrates Pinia for a simple yet powerful state management solution and Tailwind CSS for sleek, responsive styling. The app allows users to register, log in, and manage their daily tasks with features like task creation, editing, deletion, and filtering by status or priority. With a focus on simplicity and speed, this app is perfect for individuals or small teams who need a straightforward tool to keep track of their to-dos and goals.',
    image: '/img/nTask.png',
    tags: ['Vue Js', 'Pinia', 'Tailwind']
  }
]

const project = projects.find(p => p.slug === route.params.slug)

if (project) {
  useHead({
    title: project.title,
    meta: [
      { name: 'description', content: project.description }
    ]
  })
}
</script>
