---
layout: ../../layouts/BlogLayout.astro
title: My Fourth Blog Post
author: AchroDev
description: "This post is used as an example for the dynamic list gathering"
image:
    url: 'https://raw.githubusercontent.com/AchroDev/AchroDev/refs/heads/main/assets/logo.svg'
    alt: 'A Green custom font capital letter A on a clear background.'
pubDate: 2025-11-12
tags: ["astro", "successes"]
---

This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.