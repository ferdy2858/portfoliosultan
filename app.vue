<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (path) => route.path === path

const isDark = ref(false)
const isMobileMenuOpen = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

import { useHead } from '@vueuse/head'

useHead({
  title: 'Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Deskripsi singkat halaman ini.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200">
    <header class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <NuxtLink to="about" class="text-2xl font-extrabold text-gray-900 dark:text-white">
            Sultan
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-6 items-center">
            <template v-for="link in [
              { name: 'Home', path: '/' },
              { name: 'Projects', path: '/projects' },
              { name: 'About', path: '/about' },
            ]" :key="link.path">
              <NuxtLink
                :to="link.path"
                :class="[
                  'relative group font-medium transition',
                  isActive(link.path)
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                ]"
              >
                {{ link.name }}
                <span
                  :class="[
                    'absolute left-0 bottom-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all',
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  ]"
                ></span>
              </NuxtLink>
            </template>

            <!-- Dark Mode Button -->
            <button @click="toggleDark" class="ml-4 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <span v-if="isDark">🌙</span>
              <span v-else>☀️</span>
            </button>
          </nav>

          <!-- Mobile Menu Button -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2">
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-800 dark:text-gray-100" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6 text-gray-800 dark:text-gray-100" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden px-4 pb-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col space-y-2">
          <NuxtLink
            v-for="link in [
              { name: 'Home', path: '/' },
              { name: 'Projects', path: '/projects' },
              { name: 'About', path: '/about' },
            ]"
            :key="link.path"
            :to="link.path"
            @click="isMobileMenuOpen = false"
            :class="[
              'py-2 px-3 rounded-md text-base font-medium',
              isActive(link.path)
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            ]"
          >
            {{ link.name }}
          </NuxtLink>
          <button @click="toggleDark" class="mt-2 py-2 px-3 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
            <span v-if="isDark">🌙 Dark Mode</span>
            <span v-else>☀️ Light Mode</span>
          </button>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <NuxtPage />
    </main>

    <footer class="bg-white dark:bg-gray-800 w-full mt-auto border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-200 transition">
          © 2024 Portfolio Sultan. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
