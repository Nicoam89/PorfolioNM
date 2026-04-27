# Portfolio NM (React + Vite + Sass)

Proyecto portfolio personal construido con React y Vite, con estilos organizados en Sass (`src/styles`).

## Requisitos

- Node.js 20+
- npm 10+

## Instalación

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev      # servidor de desarrollo
npm run start    # alias de dev
npm run build    # build de producción
npm run lint     # eslint
npm run preview  # preview del build
```

## Si aparece `Missing script: "dev"`

Ese error suele pasar cuando se ejecuta `npm run dev` fuera de la carpeta donde está este `package.json`.

Verificá:

1. Estar dentro de la raíz del proyecto (`PorfolioNM`).
2. Que `npm run` muestre `dev`, `build`, `lint` y `preview`.
3. Si no aparecen, corré `npm install` nuevamente en esta misma carpeta.

## Estructura de estilos

- `src/styles/base`: variables y estilos base
- `src/styles/layout`: layout global (navbar)
- `src/styles/sections`: estilos por sección
- `src/styles/main.scss`: punto de entrada Sass
