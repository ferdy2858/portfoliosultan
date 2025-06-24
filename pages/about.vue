<template>
  <main
    class="min-h-screen bg-gradient-to-b from-slate-50 via-gray-300 to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-1000 py-16 px-4 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-start lg:space-x-12">
        <!-- Image Section -->
        <div class="w-full lg:w-1/3 mb-10 lg:mb-0">
          <img src="/img/fotobaru.jpg" alt="About Me"
            class="rounded-2xl shadow-xl w-full h-auto object-cover transition-transform duration-300 hover:scale-100" />
        </div>

        <!-- Text Section -->
        <div class="w-full lg:w-2/3">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
          <div class="prose prose-indigo max-w-none dark:prose-invert">
            <p>
              Hello! I'm Sultan, I'm a passionate developer with expertise in modern web technologies.
              I specialize in creating responsive, user-friendly applications that solve
              real-world problems. I believe clean code and great design go hand-in-hand.
            </p>
            <br>
            <strong>
              <h2>Skills</h2>
            </strong>
            <ul>
              <li>Frontend Development (Vue, Nuxt, React)</li>
              <li>UI/UX Design (Figma, Tailwind CSS)</li>
              <li>Responsive Web Design</li>
              <li>JavaScript / TypeScript</li>
              <li>Backend Development (Python, PHP, Java)</li>
            </ul>
            <br>
            <strong>
              <h2>Experience</h2>
            </strong>
            <p>
              With over 5 years of experience, I've built websites and web apps for small businesses,
              startups, and large-scale platforms. I'm comfortable collaborating with designers, engineers,
              and stakeholders to bring ideas to life.
            </p>
            <br>
            <strong>
              <h1>Contact Me</h1>
            </strong>
            <ul class="space-y-2 text-sm mt-3">
              <!-- Email -->
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16v16H4z" stroke="none" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span class="text-gray-800 dark:text-gray-200">sultanputra.f35@gmail.com</span>
              </li>

              <!-- Phone -->
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-500 dark:text-green-400" fill="none" stroke="currentColor"
                  stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 16.92V21a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.37A19.79 19.79 0 0 1 3.18 6.18 2 2 0 0 1 5 4h4.09a1 1 0 0 1 1 .75l1.1 4.38a1 1 0 0 1-.29 1L8.91 11.09a16 16 0 0 0 7 7l1.95-1.95a1 1 0 0 1 1-.29l4.38 1.1a1 1 0 0 1 .75 1z" />
                </svg>
                <span class="text-gray-800 dark:text-gray-200">087753705899</span>
              </li>

              <!-- GitHub -->
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.1-.74.08-.72.08-.72 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1 .11-.78.42-1.32.76-1.63-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.23-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0C17 5.1 18 5.42 18 5.42c.66 1.64.25 2.86.12 3.16.77.85 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.57A12 12 0 0012 0z" />
                </svg>
                <a href="https://github.com/ferdy2858" class="hover:underline text-gray-800 dark:text-gray-200"
                  target="_blank">ferdy2858</a>
              </li>

              <!-- Instagram -->
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-pink-500 dark:text-pink-400" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
                <a href="https://www.instagram.com/f3rdyanto_/" class="hover:underline text-gray-800 dark:text-gray-200"
                  target="_blank">@f3rdyanto_</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
