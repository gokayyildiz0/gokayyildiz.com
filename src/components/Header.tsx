import { component$ } from "@builder.io/qwik";
import ThemeToogle from "./ThemeToogle";

export default component$(() => {
    return (
        <header class="container flex flex-row mx-auto">
            <a
                class="dark:hover:text-neutral-100 hover:text-neutral-950"
                href="mailto:gokayildiz@icloud.com"
                aria-label="Email Gokay Yildiz"
                role="button"
            >
                gokayildiz@icloud.com
            </a>
            <nav class="flex flex-row-reverse flex-1 order-last" aria-label="Main Navigation">
                <ul class="inline-flex flex-row gap-2" role="list">
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
            </nav>
        </header>
    );
});
