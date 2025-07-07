<!-- filepath: /Users/gokayyildiz/Documents/Workspace/gokayyildiz.com/src/components/ThemeToogle.vue -->
<template>
  <button id="themeToggle" @click="toggleTheme"
    class="flex justify-center items-center h-full text-red-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-950"
    aria-label="Toggle theme">
    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
      aria-hidden="true">
      <path fill="currentColor"
        d="M11.5 5.423V2.039h1v3.384zm5.496 2.289l-.682-.683l2.357-2.452l.727.733zm1.581 4.788v-1h3.385v1zM11.5 21.962v-3.366h1v3.366zM7.042 7.68L4.577 5.329l.752-.708L7.73 7.004zm11.624 11.742l-2.352-2.452l.677-.657l2.388 2.346zM2.039 12.5v-1h3.384v1zm3.27 6.923l-.688-.752l2.358-2.357l.36.348l.378.354zM12.006 17q-2.082 0-3.544-1.457T7 12.005T8.457 8.46T11.995 7t3.544 1.457T17 11.995t-1.457 3.544T12.005 17M12 16q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16m0-4">
      </path>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
      aria-hidden="true">
      <path fill="currentColor" fill-rule="evenodd"
        d="M10.567 4.128a8 8 0 0 0 6.867 13.744a8 8 0 1 1-6.867-13.744m1.611.006C12.66 3.82 12.575 3 12 3a9 9 0 1 0 7.334 14.218c.3-.42-.245-.913-.724-.72a7 7 0 0 1-6.432-12.363"
        clip-rule="evenodd"></path>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

function setTheme(dark) {
  isDark.value = dark;
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", dark ? "dark" : "light");
}

function applyTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme === "dark");
  } else {
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
}

function toggleTheme() {
  setTheme(!isDark.value);
}

onMounted(() => {
  applyTheme();
  document.addEventListener("astro:after-swap", applyTheme);
});
</script>
