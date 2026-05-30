---
title: "Deploying a Bilingual Site on GitHub"
subtitle: "How to Host Your Hugo Site on GitHub Pages for Free"
date: 2026-05-30
summary: "Step-by-step guide for deploying a bilingual Hugo site on GitHub Pages"
tags: ["hugo", "github-pages", "deploy"]
---

## Prerequisites

To host your site on GitHub Pages, you will need:

- A GitHub repository
- A Hugo site ready for building
- Basic Git skills

## Build and Deploy

The deployment process consists of several steps:

1. Install Hugo and create your site
2. Configure bilingual support
3. Build the site: `hugo --gc --minify`
4. Copy to docs/: `cp -r public docs`
5. Add `.nojekyll`: `touch docs/.nojekyll`
6. Commit and push: `git push origin main`

## GitHub Pages Settings

In your repository settings (Settings → Pages):

- Source: **Deploy from a branch**
- Branch: **main**, folder: **/docs**

Your site will be available at: `https://username.github.io/my-academic-site/`

## Bilingual Site Features

When using two languages:

- Primary language (RU) is served at the root `/`
- Secondary language (EN) is at `/en/`
- A redirect from `/en/` to `/en/home/` may be needed
- A language switcher is placed in the header

## GitHub Pages Benefits

- Free hosting
- Automatic HTTPS
- Simple git push deployment
- Full version control
