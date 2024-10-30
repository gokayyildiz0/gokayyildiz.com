---
title: 'Why I Used Astro, Tailwind, and Qwik to Build My Personal Website'
pubDate: 2024-10-30
description: “Here’s the story of my weekend journey choosing the tech stack for my personal website.”
author: “Gökay Yıldız”
image:
  url: "/images/post-banners/astro-tailwind-qwik.svg"
  alt: "Example"
tags: ["astro", “qwik”, “webdev”]
---


# Why I Used Astro, Tailwind, and Qwik to Build My Personal Website
**Published on:** 2024-10-30
Here’s the story of my weekend journey choosing the tech stack for my personal website.
# Why Did I Make a Personal Website?
A few reasons led me to create my own site:
* Building an online presence as a developer
* Creating an interactive CV for potential business partners
* A 4-day holiday... and boredom

⠀Truthfully, boredom was the biggest motivator. I've had my domain, gokayyildiz.com, for ages, just sitting unused. So, I finally decided to build a site to share my blog and showcase my projects.
# How Did I Choose the Tech Stack?
Choosing a tech stack can be one of the most daunting tasks for developers, and it often trips up less-experienced devs. (But how to choose the best tech stack is a topic for another post!)
For this project, I knew I wanted a lightweight and fun stack that allowed me to experiment with new tools. Since the website is relatively simple, it felt like the perfect chance to try something new. JavaScript frameworks evolve constantly, each promising improved performance and ease of use, so I figured I'd test some of the latest options.
### Why Astro 🧑🏼‍🚀?
Since I wanted to host a blog and I'm primarily a Vue.js developer, my initial thought was to use Nuxt with its Static Site Generation (SSG) and Content Module.
But I’d been curious about Astro for a while—especially its concept of ~[partial hydration](https://docs.astro.build/en/concepts/islands/)~, which minimizes JavaScript on initial load and leads to faster apps. I opened the Astro Docs and started exploring, and it quickly became clear that Astro is a powerful SSG framework with a strong focus on content.
Astro offers SSG and SSR support, seamless integration with backend services, type-safe content schemas with Zod, and a unique ability to use any frontend framework for interactive elements through partial hydration. It also supports a managed database, simple Lucia authentication, and much more.
After diving into the docs, I knew I had to give Astro a try. And what better way to learn than by building something?
### Why Tailwind?
I'll be honest: I've always had a bit of a love-hate relationship with Tailwind. Piling on tons of class names in HTML can make the code look cluttered and almost unreadable. But when it comes to building apps quickly and efficiently, Tailwind just can’t be beaten.
Developing with Tailwind feels effortless. Its utility-first approach allows me to skip a lot of the setup and dive straight into designing. And until there’s a better solution for rapid development, Tailwind will remain my go-to.
The ~[Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)~ extension for VSCode has also been a lifesaver, letting me collapse those long chains of utility classes and keep my code much cleaner.
###	Why Qwik?
For the past four years, I’ve relied on Vue and Nuxt in almost every project, but Qwik has always piqued my curiosity—particularly its concept of "[resumability](https://qwik.dev/docs/concepts/resumable/)." This feature promises enhanced performance by loading only the essential code for interaction, which I wanted to explore.
Since I only needed a bit of interactivity for this project and learning Qwik is quite easy with prior React experience, I thought, "Why not give it a try?"
## Conclusion 
Building my personal website with Astro, Tailwind, and Qwik was a rewarding experience that combined curiosity, a need for speed, and the chance to try out new tech. Astro gave me the powerful content-first framework I needed, Tailwind allowed me to style quickly without getting bogged down in setup, and Qwik let me explore a new, exciting way to add interactivity.
This project was more than just putting up a site; it was a journey of experimentation and growth. I’m excited to see how these tools evolve and to continue exploring new ways to create fast, efficient web experiences. If you're a developer looking to learn something fresh, I highly recommend diving into these tools—you might find a new favorite just as I did.




