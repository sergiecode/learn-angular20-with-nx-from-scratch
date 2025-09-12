# Clase: Crear Server NodeJS

En esta clase aprenderás cómo agregar Node.js con TypeScript a tu monorepo Nx para crear un miniservidor que permita manipular información en memoria entre aplicaciones.

## 1. Agregar soporte para Node.js en Nx

Ejecuta el siguiente comando para instalar el plugin de Node.js para Nx:

```bash
npx nx add @nx/node
```

Esto habilita la generación y administración de aplicaciones Node.js dentro de tu workspace Nx.

## 2. Crear una aplicación Node.js

Genera una nueva aplicación Node.js llamada `server` dentro de la carpeta `packages`:

```bash
npx nx g @nx/node:application packages/server
```

Esto creará la estructura básica de una aplicación Node.js con TypeScript.

## 3. Limpieza de la carpeta assets

Por defecto, Nx genera una carpeta `assets` dentro de la nueva aplicación. Si no la vas a utilizar, puedes eliminarla para mantener tu proyecto más limpio:

- Navega a `packages/server/src/assets` y elimina la carpeta.

---

> **Tip:** Usar Nx con Node.js y TypeScript te permite compartir lógica y tipos entre el backend y el frontend, facilitando la comunicación y el mantenimiento del código.
