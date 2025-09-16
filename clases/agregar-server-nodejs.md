# Clase 9: Agregar Servidor Node.js con NX

En esta clase aprenderás a crear y desplegar un servidor **Node.js** dentro del monorepo NX. Este servidor será responsable de exponer una API REST para gestionar cursos, estudiantes e inscripciones, permitiendo la integración con las aplicaciones Angular del proyecto.

---

EN ESTA CLASE ACTUALIZAR EL PACKAGE.JSON PARA QUE FUNCIONE
IMPORTS: EL @SOFTWARE O @LEARN HAY QUE ACTUALIZARLO POR EL QUE ESTÉ EN EL TSCONFIG

---

## 1. Objetivos de la Clase

- Crear un servidor Node.js usando NX.
- Exponer endpoints REST para cursos, estudiantes e inscripciones.
- Probar el servidor localmente en `http://localhost:3000`.
- Integrar el backend con las aplicaciones frontend.

---

## 2. Estructura del Proyecto

```
packages/
	server/
		src/
			main.ts
```

---

## 3. Endpoints Disponibles

El servidor expone los siguientes endpoints para operar sobre los recursos principales:

### Cursos

- `GET    /api/courses`         → Listar todos los cursos
- `GET    /api/courses/:id`     → Obtener curso por ID
- `POST   /api/courses`         → Crear nuevo curso
- `PUT    /api/courses/:id`     → Actualizar curso existente
- `DELETE /api/courses/:id`     → Eliminar curso

### Estudiantes

- `GET    /api/students`        → Listar todos los estudiantes
- `GET    /api/students/:id`    → Obtener estudiante por ID
- `POST   /api/students`        → Crear nuevo estudiante
- `PUT    /api/students/:id`    → Actualizar estudiante existente
- `DELETE /api/students/:id`    → Eliminar estudiante

### Inscripciones

- `GET    /api/enrollments`     → Listar todas las inscripciones
- `GET    /api/enrollments/:id` → Obtener inscripción por ID
- `POST   /api/enrollments`     → Crear nueva inscripción
- `PUT    /api/enrollments/:id` → Actualizar inscripción existente
- `DELETE /api/enrollments/:id` → Eliminar inscripción

---

## 4. Ejemplo de Uso de Endpoints

Puedes probar los endpoints usando herramientas como **Postman**, **Insomnia** o el comando `curl`.

### Ejemplo: Crear un Curso

```bash
curl -X POST http://localhost:3000/api/courses \
	-H "Content-Type: application/json" \
	-d '{"name": "Angular Básico", "description": "Curso introductorio de Angular"}'
```

### Ejemplo: Listar Estudiantes

```bash
curl http://localhost:3000/api/students
```

### Ejemplo: Crear Inscripción

```bash
curl -X POST http://localhost:3000/api/enrollments \
	-H "Content-Type: application/json" \
	-d '{"studentId": 1, "courseId": 2}'
```

---

## 5. Integración con el Frontend

Las aplicaciones Angular (`app1`, `app2`) consumen estos endpoints mediante el servicio API definido en la librería `utils-common`. Esto permite centralizar la lógica de comunicación y mantener el código organizado.

---

## 6. Beneficios de Usar NX para Backend y Frontend

- **Un solo workspace** para todo el stack.
- **Reutilización de modelos y lógica** entre frontend y backend.
- **Facilidad de mantenimiento y escalabilidad**.

---

> **Nota:** Recuerda iniciar el servidor con el comando:
> 
> ```powershell
> nx run server:serve
> ```
> 
> El servidor estará disponible en `http://localhost:3000`.
