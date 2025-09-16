# Comandos Nx: run-many y herramientas de gestión masiva

---

## ¿Qué es `nx run-many` y por qué es útil?

`nx run-many` es un comando de Nx que permite ejecutar tareas (como lint, test, build) en múltiples proyectos del monorepo de forma simultánea. Es fundamental para automatizar procesos, ahorrar tiempo y mantener la calidad en proyectos grandes.

Su uso es clave para:
- Ejecutar tareas en todos los proyectos o en grupos específicos.
- Aprovechar la paralelización y el caché de Nx.
- Optimizar flujos de trabajo en equipos y CI/CD.

---

## 🔹 ¿Qué es `nx run-many`?

`nx run-many` es un comando que permite ejecutar un target (lint, test, build, etc.) en múltiples proyectos simultáneamente, aprovechando la paralelización y el cache de Nx.

**Sintaxis básica:**
```bash
npx nx run-many --target=<target-name> [opciones]
```

---

## 🔹 Comandos básicos de `run-many`

### 1. Ejecutar en TODOS los proyectos
```bash
# Lint en todos los proyectos
npx nx run-many --target=lint --all

# Tests en todos los proyectos
npx nx run-many --target=test --all

# Build en todos los proyectos
npx nx run-many --target=build --all

# ESLint específico en todos
npx nx run-many --target=eslint:lint --all
```

### 2. Ejecutar en proyectos específicos
```bash
# Solo en proyectos seleccionados
npx nx run-many --target=test --projects=app1,app2,ui-shared

# Múltiples targets en proyectos específicos
npx nx run-many --target=lint,test --projects=app1,app2
```

### 3. Filtrar por tags
```bash
# Solo proyectos con scope:app
npx nx run-many --target=build --projects=tag:scope:app

# Solo librerías (excluyendo apps)
npx nx run-many --target=test --projects=tag:scope:ui,tag:scope:utils

# Excluir ciertos tags
npx nx run-many --target=lint --all --exclude=tag:scope:api
```

---

## 🔹 Opciones avanzadas de control

### Control de paralelización
```bash
# Controlar número de procesos paralelos (por defecto: 3)
npx nx run-many --target=test --all --parallel=5
npx nx run-many --target=build --all --parallel=1  # Secuencial

# Máximo paralelismo disponible
npx nx run-many --target=test --all --maxParallel
```

### Control de cache
```bash
# Saltar cache local de Nx
npx nx run-many --target=build --all --skip-nx-cache

# Saltar cache remoto (Nx Cloud)
npx nx run-many --target=test --all --skip-remote-cache

# Saltar ambos caches
npx nx run-many --target=lint --all --skip-nx-cache --skip-remote-cache
```

### Control de errores
```bash
# Detener en el primer error (por defecto: false)
npx nx run-many --target=test --all --stop-on-failure
npx nx run-many --target=test --all --bail

# Continuar aunque falle algún proyecto
npx nx run-many --target=lint --all  # Comportamiento por defecto
```

---

## 🔹 Comandos de información y filtrado

### Mostrar información sin ejecutar
```bash
# Ver qué proyectos se ejecutarían (dry-run)
npx nx run-many --target=build --all --dry-run

# Mostrar gráfico de dependencias de la ejecución
npx nx run-many --target=build --all --graph

# Modo verbose para más información
npx nx run-many --target=test --all --verbose
```

### Filtrar por estado de archivos
```bash
# Solo proyectos afectados por cambios desde main
npx nx run-many --target=test --base=main

# Solo proyectos con cambios uncommitted
npx nx run-many --target=lint --uncommitted

# Solo proyectos con archivos untracked
npx nx run-many --target=build --untracked

# Archivos específicos
npx nx run-many --target=test --files="packages/app1/src/app.ts,packages/ui-shared/src/index.ts"
```

---

## 🔹 Configuraciones específicas

### Usando configuraciones específicas
```bash
# Build de producción en todas las apps
npx nx run-many --target=build --configuration=production --projects=tag:scope:app

# Tests con coverage
npx nx run-many --target=test --configuration=ci --all

# Desarrollo
npx nx run-many --target=build --configuration=development --projects=app1,app2
```

### Output y formato
```bash
# Diferentes formatos de output
npx nx run-many --target=test --all --output-style=stream
npx nx run-many --target=build --all --output-style=static
npx nx run-many --target=lint --all --output-style=dynamic

# Sin prefijos en la salida
npx nx run-many --target=test --all --output-style=stream-without-prefixes
```

---

## 🔹 Comandos alternativos relacionados

### `nx affected` - Solo proyectos afectados
```bash
# Test solo en proyectos afectados
npx nx affected --target=test

# Build solo en proyectos afectados desde una rama específica
npx nx affected --target=build --base=origin/main

# Lint en proyectos afectados con paralelización específica
npx nx affected --target=lint --parallel=4
```

### `nx run` - Proyecto individual
```bash
# Ejecutar en un solo proyecto
npx nx run app1:build
npx nx run ui-shared:test
npx nx run utils-common:lint

# Con configuración específica
npx nx run app1:build:production
npx nx run server:serve:development
```

### Comandos de información
```bash
# Ver todos los proyectos
npx nx show projects

# Ver proyectos con tags específicos
npx nx show projects --with-target=test
npx nx show projects --type=lib

# Ver configuración de un proyecto
npx nx show project app1
npx nx show project app1 --web  # En navegador
```

---

## 🔹 Ejemplos prácticos del proyecto

### Validación completa del proyecto
```bash
# Pipeline completo de validación
npx nx run-many --target=lint --all
npx nx run-many --target=test --all  
npx nx run-many --target=build --all
```

### Desarrollo por capas
```bash
# Primero utils, luego UI, luego apps
npx nx run-many --target=build --projects=tag:scope:utils
npx nx run-many --target=build --projects=tag:scope:ui
npx nx run-many --target=build --projects=tag:scope:app
```

### Solo aplicaciones o solo librerías
```bash
# Solo aplicaciones
npx nx run-many --target=serve --projects=tag:scope:app

# Solo librerías
npx nx run-many --target=build --projects=tag:scope:ui,tag:scope:utils

# Excluir el servidor
npx nx run-many --target=test --all --exclude=server
```

### Comandos con configuraciones específicas
```bash
# Build de producción de apps
npx nx run-many --target=build --configuration=production --projects=tag:scope:app

# Tests con coverage
npx nx run-many --target=test --configuration=ci --all

# ESLint con fix automático
npx nx run-many --target=eslint:lint --all -- --fix
```

---

## 🔹 Troubleshooting y optimización

### Performance
```bash
# Ver estadísticas de ejecución
npx nx run-many --target=build --all --verbose

# Optimizar paralelización según tu máquina
npx nx run-many --target=test --all --parallel=$(nproc)  # Linux/Mac
npx nx run-many --target=test --all --parallel=4  # Manual

# Usar solo cache local (más rápido en algunos casos)
npx nx run-many --target=lint --all --skip-remote-cache
```

### Debugging
```bash
# Ver qué se ejecutaría sin ejecutar
npx nx run-many --target=build --all --dry-run

# Salida detallada para debugging
npx nx run-many --target=test --all --verbose

# Visualizar dependencias
npx nx run-many --target=build --all --graph=dependencies.html
```

### Cache management
```bash
# Limpiar cache antes de ejecutar
npx nx reset && npx nx run-many --target=build --all

# Forzar re-ejecución sin cache
npx nx run-many --target=test --all --skip-nx-cache
```

---

## 🔹 Alias y scripts útiles

### En package.json (recomendado)
```json
{
  "scripts": {
    "lint:all": "nx run-many --target=lint --all",
    "test:all": "nx run-many --target=test --all",
    "build:all": "nx run-many --target=build --all",
    "build:apps": "nx run-many --target=build --projects=tag:scope:app",
    "build:libs": "nx run-many --target=build --projects=tag:scope:ui,tag:scope:utils",
    "ci": "nx run-many --target=lint --all && nx run-many --target=test --all && nx run-many --target=build --all",
    "affected:test": "nx affected --target=test",
    "affected:build": "nx affected --target=build"
  }
}
```

### Entonces puedes usar:
```bash
npm run lint:all
npm run test:all  
npm run build:apps
npm run ci
npm run affected:test
```

---

## 🔹 Mejores prácticas

### 1. **Orden de ejecución recomendado**
```bash
# 1. Lint primero (rápido, detecta errores sintácticos)
npx nx run-many --target=lint --all

# 2. Tests (detecta errores lógicos)
npx nx run-many --target=test --all

# 3. Build (confirma que todo compila)
npx nx run-many --target=build --all
```

### 2. **Usar affected en CI/CD**
```bash
# En CI, solo proyectos afectados
npx nx affected --target=test --base=origin/main
npx nx affected --target=build --base=origin/main
```

### 3. **Optimizar paralelización**
```bash
# Para máquinas potentes
npx nx run-many --target=test --all --parallel=8

# Para máquinas con menos recursos
npx nx run-many --target=build --all --parallel=2
```

### 4. **Usar tags efectivamente**
```bash
# Desarrollo incremental por capas
npx nx run-many --target=build --projects=tag:scope:utils
npx nx run-many --target=build --projects=tag:scope:ui  
npx nx run-many --target=build --projects=tag:scope:app
```

---

## ✅ **Resumen de comandos más útiles**

```bash
# Validación completa
npx nx run-many --target=lint --all
npx nx run-many --target=test --all  
npx nx run-many --target=build --all

# Solo proyectos afectados
npx nx affected --target=test
npx nx affected --target=build

# Por tipo de proyecto
npx nx run-many --target=build --projects=tag:scope:app
npx nx run-many --target=test --projects=tag:scope:ui,tag:scope:utils

# Con optimizaciones
npx nx run-many --target=build --all --parallel=4 --skip-remote-cache

# Información
npx nx show projects
npx nx run-many --target=build --all --dry-run
```

Con estos comandos tenés control completo sobre tu monorepo y podés ejecutar tareas de forma eficiente en múltiples proyectos! 🚀