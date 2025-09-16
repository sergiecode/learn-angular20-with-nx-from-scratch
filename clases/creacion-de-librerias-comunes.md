# Clase: Agregar Librerías Comunes entre Proyectos NX

En proyectos NX, es recomendable crear librerías reutilizables para compartir código entre aplicaciones. A continuación se detallan los pasos para crear y gestionar librerías comunes en un monorepo NX.

---

## 📚 Creación de Librerías

### 1. Librería Angular (Componentes/Servicios)

Para crear una librería Angular que contenga componentes, servicios o módulos reutilizables:

```bash
npx nx g @nx/angular:library packages/ui-shared --standalone
```
- Selecciona `jest` como test runner cuando se solicite.
- Esta librería puede contener componentes, servicios y módulos que serán usados en varias apps.

### 2. Librería TypeScript Pura (Utils, Modelos, Helpers)

Para crear una librería de utilidades, modelos o helpers en TypeScript puro:

```bash
npx nx g @nx/js:lib packages/utils-common --bundler=tsc --linter=eslint --unitTestRunner=jest
```
- Ideal para lógica compartida, helpers, modelos y funciones puras.

### 3. Visualizar Dependencias entre Proyectos

Para analizar gráficamente las dependencias entre apps y librerías en el monorepo:

```bash
npx nx graph
```
- Abre una visualización interactiva en el navegador mostrando cómo se relacionan las apps y librerías.

---

## 📝 Recomendaciones Adicionales

- Mantén las librerías pequeñas y enfocadas en una sola responsabilidad.
- Documenta los componentes y funciones exportadas para facilitar su uso.
- Usa pruebas unitarias para asegurar la calidad y evitar regresiones.
- Revisa las dependencias regularmente con `nx graph` para evitar acoplamientos innecesarios.

---

## Exportación centralizada y separación de responsabilidades

- Exporta todos los componentes, servicios y modelos reutilizables desde el archivo `index.ts` de cada librería. Esto facilita su uso en las aplicaciones del monorepo.
- Separa las librerías de UI (por ejemplo, `ui-shared`) de las de lógica y modelos (por ejemplo, `utils-common`) para mantener una arquitectura limpia y escalable.

---

> **Tip:** Las librerías pueden ser importadas fácilmente en cualquier app del monorepo usando la ruta relativa configurada en `tsconfig.base.json`.
