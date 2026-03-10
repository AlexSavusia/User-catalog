# User Catalog

Небольшое frontend-приложение на **React 19 + TypeScript + Vite**.

## Стек

-   React 19
-   TypeScript
-   Vite
-   Sass
-   ESLint

## Требования

Перед запуском убедись, что у тебя установлены:

-   **Node.js** 18+
-   **npm** 9+

Проверить версии можно командами:

``` bash
node -v
npm -v
```

## Установка зависимостей

``` bash
npm install
```

## Запуск проекта в режиме разработки

``` bash
npm run dev
```

После запуска Vite покажет локальный адрес, обычно:

    http://localhost:5173

## Сборка проекта

``` bash
npm run build
```

Команда выполняет:

-   проверку TypeScript через `tsc -b`
-   production-сборку через `vite build`

Готовая сборка появится в папке:

    dist

## Предпросмотр production-сборки

``` bash
npm run preview
```

Эта команда запускает локальный сервер для проверки собранного
приложения.

## Проверка линтером

``` bash
npm run lint
```

## Структура команд

### `npm run dev`

Запускает проект в режиме разработки с hot reload.

### `npm run build`

Собирает проект для production.

### `npm run preview`

Запускает локальный preview production-сборки.

### `npm run lint`

Проверяет код через ESLint.

## Стили

В проекте используется **Sass**, поэтому можно подключать файлы:

-   `.scss`
-   `.sass`

## Разработка

Проект создан на шаблоне **Vite** с поддержкой React Compiler и HMR.

## Быстрый старт

``` bash
npm install
npm run dev
```
