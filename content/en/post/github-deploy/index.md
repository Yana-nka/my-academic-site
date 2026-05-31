---
title: "Deploying a Bilingual Website on GitHub"
subtitle: "Как бесплатно разместить Hugo-сайт на GitHub Pages"
date: 2026-05-30
summary: "Step-by-step deployment guide bilingual Hugo-сайта на GitHub Pages"
tags: ["hugo", "github-pages", "deploy"]
---

## Подготовка

Для размещения сайта на GitHub Pages понадобится:

- Репозиторий на GitHub
- Hugo-сайт, готовый к сборке
- Базовые навыки работы с Git

## Сборка и деплой

Процесс деплоя состоит из нескольких шагов:

1. Установить Hugo и создать сайт
2. Настроить конфигурацию и двуязычность
3. Собрать сайт: `hugo --gc --minify`
4. Скопировать в docs/: `cp -r public docs`
5. Добавить `.nojekyll`: `touch docs/.nojekyll`
6. Закоммитить и запушить: `git push origin main`

## Настройка GitHub Pages

В настройках репозитория (Settings → Pages):

- Source: **Deploy from a branch**
- Branch: **main**, folder: **/docs**

После этого сайт будет доступен по адресу: `https://username.github.io/my-academic-site/`

## Особенности bilingual сайта

При использовании двух языков:

- Основной язык (RU) размещается на корне `/`
- Дополнительный язык (EN) на `/en/`
- Для корректной работы нужен редирект с `/en/` на `/en/home/`
- В хедере размещается переключатель языка

## Преимущества GitHub Pages

- Бесплатный хостинг
- Автоматический HTTPS
- Простота деплоя через git push
- Версионирование всех изменений
