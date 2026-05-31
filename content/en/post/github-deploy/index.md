---
title: "Step-by-Step Deployment Guide for a Bilingual Hugo Website on GitHub Pages"
subtitle: "Free hosting for your Hugo academic site"
date: 2026-05-30
summary: "How to deploy a bilingual Hugo/Wowchemy site to GitHub Pages for free"
tags: ["lab", "github-deploy"]
---

## How to Deploy Your Site for Free

This guide covers deploying a bilingual (Russian/English) Hugo + Wowchemy site to GitHub Pages.

## Preparation

Before deployment, you will need:

- A ready-to-build Hugo site with Wowchemy
- A GitHub repository for your site
- Basic knowledge of git and command line

## Build and Deploy: Step by Step

1. **Build the site**: Run \`hugo\` to generate the \`public/\` directory
2. **Copy to docs/**: Run \`cp -r public/* docs/\` (GitHub Pages serves from the \`docs\` folder)
3. **Commit**: \`git add -A && git commit -m "deploy"\`
4. **Push**: \`git push origin main\`

## Configuration

- **GitHub Pages settings**: Branch \`main\`, folder \`/docs\`
- **Custom domain**: Can be configured in the repository settings

## Features

- Free hosting with automatic HTTPS
- Automatic build after each push
- Simple and fast workflow
- Professional appearance for your academic portfolio
