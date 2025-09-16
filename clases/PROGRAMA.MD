Curso: Fundamentos del Monorepo con Nx

Módulo 1: Fundamentos y Configuración Inicial
Clase 1. Qué es NX y Monorepo: conceptos fundamentales
Objetivo: Comprender qué es un monorepo y NX, sus ventajas y desventajas.


Contenidos centrales: definición de monorepo, NX Core y task runner, ventajas frente a multi-repo, gestión unificada, reutilización de código, colaboración centralizada.


Clase 2. Instalaciones necesarias para el desarrollo con NX
Objetivo: Preparar el entorno de desarrollo completo para trabajar con NX y Angular.


Contenidos centrales: instalación de Node.js, Git, VS Code, extensiones recomendadas (Angular Language Service, NX Console), verificación del entorno.


Clase 3. Inicializar proyecto NX desde cero
Objetivo: Crear y configurar un workspace NX base para el monorepo.


Contenidos centrales: comando create-nx-workspace, configuración inicial, conexión con GitHub, integración con NX Cloud, estructura básica del workspace.


Clase 4. Estructura proyecto NX y agregar Angular
Objetivo: Entender la organización del workspace y habilitar soporte para Angular.


Contenidos centrales: carpetas packages/ y nx/, archivos nx.json y package.json, instalación del plugin @nx/angular, configuración de extensiones VS Code.



Módulo 2: Creación de Estructura del Monorepo
Clase 5. Crear aplicaciones Angular con NX
Objetivo: Generar múltiples aplicaciones Angular dentro del monorepo.


Contenidos centrales: comando nx generate application, configuración de bundler esbuild, tests con Jest, ejecutar aplicaciones en puertos específicos.


Clase 6. Creación de librerías comunes entre proyectos
Objetivo: Establecer librerías reutilizables para componentes y utilidades.


Contenidos centrales: librerías Angular con @nx/angular:library, librerías TypeScript con @nx/js:lib, visualización con nx graph, separación de responsabilidades.


Clase 7. Agregar servidor Node.js al monorepo
Objetivo: Integrar un backend Node.js con TypeScript en el workspace NX.


Contenidos centrales: plugin @nx/node, generación de aplicación servidor, estructura básica, preparación para API REST.


Clase 8. UI Utils Common: componentes, modelos y servicios
Objetivo: Desarrollar librerías compartidas con componentes UI y lógica de negocio.


Contenidos centrales: ui-shared con componentes reutilizables, utils-common con modelos y servicios, API service para comunicación backend, exportación centralizada.



Módulo 3: Desarrollo de Funcionalidades
Clase 9. Implementar servidor Node.js con API REST
Objetivo: Crear endpoints para gestión de cursos, estudiantes e inscripciones.


Contenidos centrales: API REST completa, endpoints CRUD, modelos de datos en memoria, configuración de CORS, pruebas con herramientas como Postman.


Clase 10. App1: gestión de inscripciones de estudiantes
Objetivo: Desarrollar aplicación Angular para inscripciones estudiantiles.


Contenidos centrales: integración con librerías comunes, gestión de inscripciones, selector de estudiantes, consumo de API REST, reutilización de componentes UI.


Clase 11. App2: gestión de cursos y profesores
Objetivo: Crear aplicación Angular orientada a administración de cursos.


Contenidos centrales: CRUD de cursos, visualización de alumnos inscritos, configuración de puerto específico, integración con backend y librerías compartidas.



Módulo 4: Calidad y Optimización
Clase 12. Implementar tests unitarios en el monorepo
Objetivo: Agregar y ejecutar pruebas unitarias en aplicaciones y librerías.


Contenidos centrales: configuración Jest, tests de componentes y servicios, comandos nx test, cobertura de código, mejores prácticas de testing.


Clase 13. Lint: análisis y corrección de errores
Objetivo: Mantener calidad de código mediante herramientas de análisis estático.


Contenidos centrales: configuración ESLint, ejecución de lints masivos, corrección de errores comunes, reglas de Angular y TypeScript.


Clase 14. Conectar proyecto a NX Cloud
Objetivo: Habilitar funcionalidades avanzadas de caché y colaboración.


Contenidos centrales: conexión con NX Cloud, caché remoto, análisis de métricas, optimización de CI/CD, colaboración entre desarrolladores.



Módulo 5: Herramientas Avanzadas de NX
Clase 15. NX Affected: detección de proyectos impactados
Objetivo: Optimizar builds y pruebas ejecutando solo lo que cambió.


Contenidos centrales: comando nx affected, análisis de grafo de dependencias, comparación de commits, ejecución selectiva, optimización de CI/CD.


Clase 16. NX Tags: organización con tags y restricciones
Objetivo: Controlar dependencias y mantener arquitectura limpia mediante etiquetas.


Contenidos centrales: configuración de tags en nx.json, restricciones de dependencias, enforcement con ESLint, capas de arquitectura, escalabilidad.


Clase 17. Beneficios del monorepo: caché y rendimiento
Objetivo: Comprender y aprovechar las optimizaciones de rendimiento de NX.


Contenidos centrales: sistema de caché inteligente, builds incrementales, análisis de impacto, caché distribuido, métricas de rendimiento, CI/CD optimizado.

