<template>
  <header class="container flex flex-row mx-auto">
    <a class="dark:hover:text-neutral-100 hover:text-neutral-950" href="mailto:gokayildiz@icloud.com"
      aria-label="Email Gokay Yildiz" role="button">
      gokayildiz@icloud.com
    </a>
    <nav class="flex flex-row-reverse flex-1 order-last" aria-label="Main Navigation">
      <ul class="hidden md:inline-flex flex-row gap-2" role="list">
        <li class="dark:hover:text-neutral-100 hover:text-neutral-950" role="listitem">
          <a href="/" aria-label="Home Page">Home</a>
        </li>
        <li role="separator">/</li>
        <li class="dark:hover:text-neutral-100 hover:text-neutral-950" role="listitem">
          <a href="/projects" aria-label="Projects Page">Projects</a>
        </li>
        <li role="separator">/</li>
        <li class="dark:hover:text-neutral-100 hover:text-neutral-950" role="listitem">
          <a href="/blog" aria-label="Blog Page">Blog</a>
        </li>
        <li role="listitem">
          <ThemeToogle />
        </li>
      </ul>
      <ul class="inline-flex md:hidden flex-row gap-5" role="list">
        <li role="listitem">
          <button class="flex justify-center items-center content-center" @click="isMobileMenuOpen = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
              aria-hidden="true">
              <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
        </li>
        <li role="listitem">
          <ThemeToogle />
        </li>
      </ul>
    </nav>
    <nav v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false" id="mobile-nav"
      class="flex justify-center absolute top-0 left-0 dark:bg-neutral-950 bg-neutral-100 w-full h-full p-20">
      <ul class="inline-flex flex-col gap-12 text-6xl" role="list">
        <li class="dark:hover:text-neutral-100 hover:text-neutral-950" role="listitem">
          <a href="/" aria-label="Home Page">Home</a>
        </li>
        <li class="dark:hover:text-neutral-100 hover:text-neutral-950" role="listitem">
          <a href="/projects" aria-label="Projects Page">Projects</a>
        </li>
        <li class="dark:hover:text-neutral-100 hover:text-neutral-950" role="listitem">
          <a href="/blog" aria-label="Blog Page">Blog</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToogle from './ThemeToogle.vue'

const isMobileMenuOpen = ref(false)
</script>