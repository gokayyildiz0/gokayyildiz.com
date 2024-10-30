import { component$, useStore, useVisibleTask$, $ } from "@builder.io/qwik";

export default component$(() => {
    // Initialize theme state
    const themeStore = useStore({
        theme: "light",
    });

    // Set the theme based on local storage or system preference
    useVisibleTask$(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme) {
            themeStore.theme = savedTheme;
        } else if (prefersDark) {
            themeStore.theme = "dark";
        }

        document.documentElement.classList.toggle("dark", themeStore.theme === "dark");
        localStorage.setItem("theme", themeStore.theme);
    });

    // Handle theme toggle click
    const handleToggleClick = $(() => {
        themeStore.theme = themeStore.theme === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("dark", themeStore.theme === "dark");
        localStorage.setItem("theme", themeStore.theme);
    });

    return (
        <button
            id="themeToggle"
            onClick$={handleToggleClick}
            class="flex justify-center items-center h-full text-red-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-950"
            aria-label="Toggle theme"
        >
            {themeStore.theme === "light" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                >
                    <path
                        fill="currentColor"
                        d="M11.5 5.423V2.039h1v3.384zm5.496 2.289l-.682-.683l2.357-2.452l.727.733zm1.581 4.788v-1h3.385v1zM11.5 21.962v-3.366h1v3.366zM7.042 7.68L4.577 5.329l.752-.708L7.73 7.004zm11.624 11.742l-2.352-2.452l.677-.657l2.388 2.346zM2.039 12.5v-1h3.384v1zm3.27 6.923l-.688-.752l2.358-2.357l.36.348l.378.354zM12.006 17q-2.082 0-3.544-1.457T7 12.005T8.457 8.46T11.995 7t3.544 1.457T17 11.995t-1.457 3.544T12.005 17M12 16q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16m0-4"
                    ></path>
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                >
                    <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M10.567 4.128a8 8 0 0 0 6.867 13.744a8 8 0 1 1-6.867-13.744m1.611.006C12.66 3.82 12.575 3 12 3a9 9 0 1 0 7.334 14.218c.3-.42-.245-.913-.724-.72a7 7 0 0 1-6.432-12.363"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            )}
        </button>
    );
});
