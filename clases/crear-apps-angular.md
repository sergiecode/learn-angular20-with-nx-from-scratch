# Clase: Agregar Aplicaciones Angular con Nx

Esta clase cubre el proceso profesional para crear y configurar aplicaciones Angular dentro de un monorepo Nx, explicando los comandos, opciones y archivos generados.

---

## 1. Creación de la Primera Aplicación Angular

Para crear una nueva aplicación Angular en Nx, ejecuta el siguiente comando:

```bash
npx nx g @nx/angular:application packages/app1 --standalone --routing --style=css
```

Durante el proceso, Nx solicitará algunas configuraciones:
- **Unit test runner:** `jest` (tecnología para pruebas unitarias en frontend)
- **E2E test runner:** `none` (no se crea proyecto de pruebas end-to-end)
- **Bundler:** `esbuild` (empaquetador moderno y rápido)
- **SSR/SSG/Prerendering:** `false` (no habilitado por defecto)

### Archivos y Configuración Generados
- **Prettier:** Se agregan archivos de configuración para el formateo automático de código.
- **Jest:** Se agregan archivos y configuración para pruebas unitarias.
- **TypeScript:** Se actualiza la configuración global y específica de la app.
- **Carpeta de la aplicación:** Todo el código y configuración individual se encuentra en `packages/app1`.

### Ejecutar la Aplicación
Para iniciar la aplicación en modo desarrollo:

```bash
npx nx serve app1 --port=4200
```

---

## 2. Creación de la Segunda Aplicación Angular

Para agregar una segunda aplicación, ejecuta:

```bash
npx nx g @nx/angular:application packages/app2 --standalone --routing --style=css
```

Configuraciones relevantes:
- **Bundler:** `esbuild`
- **SSR/SSG/Prerendering:** `false`

### Ejecutar la Aplicación

```bash
npx nx serve app2 --port=4201
```

---

## Visualización de dependencias entre proyectos

Nx permite analizar gráficamente las dependencias entre aplicaciones y librerías usando el siguiente comando:

```bash
npx nx graph
```

Esto abrirá una visualización interactiva en el navegador mostrando cómo se relacionan las apps y librerías del monorepo. Es útil para mantener una arquitectura limpia y detectar dependencias innecesarias.

---

## Notas Adicionales
- Cada aplicación creada tiene su propia configuración y puede ejecutarse de forma independiente.
- Nx permite escalar el monorepo agregando más aplicaciones o librerías fácilmente.
- Las configuraciones de herramientas como Prettier y Jest ayudan a mantener la calidad y consistencia del código.
- Puedes personalizar el puerto y otras opciones de ejecución según tus necesidades.

---

> **Recomendación:** Consulta la documentación oficial de Nx y Angular para profundizar en opciones avanzadas, integración de librerías y mejores prácticas de desarrollo en monorepos.
