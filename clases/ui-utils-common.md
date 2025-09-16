
# Clase 8: UI Shared y Utils Common (Librerías y Componentes Comunes)

En esta clase del curso **Angular con NX**, aprenderás a crear y organizar librerías de componentes y utilidades que serán compartidas entre múltiples aplicaciones dentro de un monorepo NX. Este enfoque promueve la reutilización, la mantenibilidad y la escalabilidad de tus proyectos.

## Objetivos de la Clase

- Crear una librería de componentes UI reutilizables (`ui-shared`).
- Crear una librería de utilidades y modelos TypeScript (`utils-common`).
- Compartir código entre aplicaciones Angular dentro del workspace NX.

---

## 1. UI Shared (`packages/ui-shared`)

Esta librería contiene componentes visuales reutilizables que pueden ser utilizados por cualquier aplicación Angular del monorepo.

### Componentes Incluidos

- **Botón (`button`)**: Componente estilizado para acciones en la interfaz.
- **Card de Curso (`course-card`)**: Muestra información relevante de un curso.
- **Tabla (`table`)**: Permite visualizar datos en formato tabular.

### Ventajas

- Un solo lugar para mantener y actualizar componentes visuales.
- Consistencia en la UI de todas las aplicaciones.
- Facilita la colaboración y el escalado del proyecto.

---

## 2. Utils Common (`packages/utils-common`)

Esta librería contiene funciones utilitarias y modelos TypeScript que representan entidades del dominio y pueden ser usados por cualquier aplicación o librería del monorepo.

### Modelos Incluidos

- **Curso (`course.model.ts`)**
- **Estudiante (`student.model.ts`)**
- **Inscripción (`enrollment.model.ts`)**

### Servicios

- **API Service (`api.service.ts`)**: Servicio para consumir la API REST generada con NodeJS. Permite realizar operaciones CRUD sobre los modelos definidos.

### Funciones Utilitarias

- Funciones TypeScript para manipulación de datos, validaciones y lógica común.

---

## 3. Beneficios de Usar NX Monorepo

- **Reutilización**: Componentes y funciones se comparten fácilmente entre apps.
- **Organización**: Separación clara entre UI y lógica de negocio.
- **Escalabilidad**: Facilita el crecimiento del proyecto y la incorporación de nuevos equipos.
