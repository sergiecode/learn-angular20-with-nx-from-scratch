# 📚 Sergie Code Angular 20 with NX from Scratch

## 📋 Descripción del Proyecto

Este proyecto es un **monorepo NX** que demuestra cómo construir aplicaciones modernas utilizando Angular 20 y Node.js. El proyecto incluye:

- 🅰️ **2 aplicaciones Angular** (app1 y app2)
- 🟢 **1 servidor Node.js** 
- 🎨 **Librería UI compartida** (ui-shared)
- 🔧 **Utilidades comunes** (utils-common)

### 🏗️ Arquitectura del Proyecto

```
📦 learn-angular20-with-nx-from-scratch/
├── 📱 packages/
│   ├── 🅰️ app1/                    # App Angular - Inscripciones de estudiantes
│   ├── 🅰️ app2/                    # App Angular - Gestión de cursos y profesores
│   ├── 🟢 server/                  # Servidor Node.js
│   ├── 🎨 ui-shared/               # Componentes UI compartidos
│   └── 🔧 utils-common/            # Modelos y servicios compartidos
└── 📚 clases/                      # Documentación de las clases
```

### 🏷️ Sistema de Tags y Arquitectura

El proyecto utiliza un sistema de **tags de NX** para controlar las dependencias y mantener una arquitectura limpia:

```
┌─────────────────┐
│   scope:app     │  ← Aplicaciones (app1, app2)
│  (Frontend Apps)│
└─────────────────┘
         │
         ▼
┌─────────────────┐
│   scope:ui      │  ← Componentes UI (ui-shared)
│  (UI Library)   │
└─────────────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│  scope:utils    │     │   scope:api     │
│   (Utilities)   │     │    (Server)     │
└─────────────────┘     └─────────────────┘
```

**Reglas de dependencias:**
- `scope:app` puede usar todo
- `scope:ui` solo puede usar `scope:utils`
- `scope:api` solo puede usar `scope:utils`
- `scope:utils` es independiente

## ✨ Características Destacadas

- 🏷️ **Sistema de Tags NX**: Control automático de dependencias entre proyectos
- 🧪 **Tests Unitarios**: Coverage completo con Jest
- 🔍 **ESLint**: Código limpio y consistente en todo el monorepo
- 📦 **Librerías Compartidas**: Reutilización de código entre aplicaciones
- ⚡ **NX Cache**: Build y tests optimizados con cache inteligente
- 🌐 **Full-Stack**: Frontend Angular + Backend Node.js
- 📚 **Documentación Completa**: Guías paso a paso para cada funcionalidad

## 📖 Índice de Clases

### 🏗️ Configuración y Estructura Básica
1. [¿Qué es NX y Monorepo?](clases/que-es-nx-y-monorepo.md)
2. [Instalaciones necesarias](clases/instalaciones-necesarias.md)
3. [Inicializar proyecto NX](clases/inicializar-proyecto-nx.md)
4. [Estructura proyecto NX y agregar Angular](clases/estructura-proyecto-nx-y-agregar-angular.md)
5. [Crear apps Angular](clases/crear-apps-angular.md)

### 📦 Desarrollo de Librerías y Backend
6. [Creación de librerías comunes](clases/creacion-de-librerias-comunes.md)
7. [Node.js](clases/node-js.md)
8. [UI Utils Common - Componentes, Modelos y Servicios](clases/ui-utils-common.md)
9. [Agregar Servidor Node.js](clases/agregar-server-nodejs.md)

### 🅰️ Desarrollo de Aplicaciones Frontend
10. [Agregar App1 - Inscripciones de Estudiantes](clases/agregar-app1-inscripciones.md)
11. [Agregar App2 - Cursos y Profesores](clases/agregar-app2-cursos-profesores.md)

### 🧪 Testing y Calidad de Código
12. [Agregar Tests Unitarios](clases/agregar-test-unitarios.md)
13. [Lint - Errores y Soluciones](clases/lint-errores.md)

### ☁️ NX Cloud y Herramientas Avanzadas
14. [Conectar a NX Cloud](clases/conectar-nx-cloud.md)
15. [NX Affected](clases/nx_affected_doc.md)
16. [NX Storybook](clases/nx_storybook_doc.md)

### 🏗️ Arquitectura y Organización Avanzada
17. [NX Tags - Organización con Tags](clases/nx_tags_doc.md)
18. [Comandos NX run-many](clases/nx_comandos_run-many.md)

## 🚀 Tecnologías Utilizadas

- **Framework Frontend:** Angular 20
- **Framework Backend:** Node.js
- **Monorepo Tool:** NX 21.4.1
- **Testing:** Jest
- **Linting:** ESLint
- **Package Manager:** npm
- **TypeScript:** 5.8.2

## 🛠️ Comandos Principales

### 🚀 Desarrollo
```bash
# Instalar dependencias
npm install

# Ejecutar app1 (Inscripciones)
npx nx serve app1

# Ejecutar app2 (Cursos y Profesores)  
npx nx serve app2

# Ejecutar servidor Node.js
npx nx serve server

# Ejecutar todo simultáneamente
npx nx run-many --target=serve --projects=app1,app2,server
```

### 🧪 Testing y Calidad
```bash
# Ejecutar tests en todos los proyectos
npx nx run-many --target=test --all

# Ejecutar lint en todos los proyectos
npx nx run-many --target=lint --all

# Ejecutar tests solo en proyectos afectados
npx nx affected --target=test
```

### 🏗️ Build y Deploy
```bash
# Build de todos los proyectos
npx nx run-many --target=build --all

# Build solo de aplicaciones
npx nx run-many --target=build --projects=tag:scope:app

# Build de producción
npx nx run-many --target=build --configuration=production --all
```

### 🔍 Información y Debugging
```bash
# Ver todos los proyectos
npx nx show projects

# Ver grafo de dependencias
npx nx graph

# Limpiar cache
npx nx reset
```

---

### 👨‍💻 Sergie Code
*Software Engineer especializado en enseñanza de programación*

**Sígueme en:**
- 📺 [YouTube](https://www.youtube.com/@SergieCode)
- 💼 [LinkedIn](https://www.linkedin.com/in/sergiecode/)
- 🐙 [GitHub](https://github.com/sergiecode)
- 📸 [Instagram](https://www.instagram.com/sergiecode)
- 🐦 [Twitter](https://twitter.com/sergiecode)
- 🧵 [Threads](https://www.threads.net/@sergiecode)
- 🎵 [TikTok](https://www.tiktok.com/@sergiecode)
- 📘 [Facebook](https://www.facebook.com/sergiecodeok) 