---
title: 'Непрерывная интеграция и непрерывное развертывание (CI/CD)'
subtitle: 'Автоматизация сборки и публикации проектов'
summary: 'Обзор CI/CD и его применение на примере GitHub Actions'
date: 2026-05-16T01:00:00+03:00
authors:
  - admin
tags:
  - cicd
  - github-actions
  - automation
categories:
  - Технологии
---

## Что такое CI/CD?

**CI/CD (Continuous Integration / Continuous Deployment)** — это подход к разработке, при котором каждое изменение кода автоматически собирается, тестируется и разворачивается.

- **CI (непрерывная интеграция)** — автоматическая сборка и тестирование при каждом коммите
- **CD (непрерывное развертывание)** — автоматическая публикация готового продукта

## GitHub Actions

GitHub Actions — это встроенная система CI/CD от GitHub. Она позволяет описывать сценарии сборки в YAML-файлах.

Пример workflow для Hugo:

```yaml
name: Deploy Hugo site to Pages
on:
  push:
    branches: ['main']
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.121.2'
          extended: true
      - run: hugo --gc --minify
      - uses: peaceiris/actions-gh-pages@v3
        with:
          publish_dir: ./public
```

## Преимущества CI/CD

1. **Автоматизация** — не нужно вручную собирать и заливать
2. **Надёжность** — каждый коммит проверяется
3. **Скорость** — публикация занимает минуты
4. **Прозрачность** — вся история сборок видна в GitHub

## Заключение

CI/CD — важный инструмент для современной разработки. На примере этого сайта мы используем GitHub Actions для автоматической сборки Hugo и публикации на GitHub Pages.
