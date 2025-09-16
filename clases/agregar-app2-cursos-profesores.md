# Clase 11: Agregar App2 - Gestión de Cursos y Profesores con Angular y NX

En esta clase aprenderás a crear una segunda aplicación Angular dentro del monorepo NX que simula una plataforma para profesores. La app utiliza el servidor Node.js, los componentes UI, modelos y servicios comunes definidos en las librerías compartidas del workspace.

---

## 1. Objetivos de la Clase

- Crear una aplicación Angular (`app2`) orientada a la gestión de cursos y alumnos inscritos.
- Integrar la app con el backend Node.js y las librerías comunes (`ui-shared`, `utils-common`).
- Implementar funcionalidades para crear y eliminar cursos, y visualizar alumnos inscritos en cada curso.
- Configurar la aplicación para ejecutarse en un puerto específico (`4201`).

---

## 2. Estructura del Proyecto

```
packages/
	app2/
		src/app/
			...
```

---

## 3. Funcionalidades Implementadas

- **Crear curso:** Permite a los profesores agregar nuevos cursos a la plataforma.
- **Eliminar curso:** Permite eliminar cursos existentes.
- **Ver alumnos inscritos:** Muestra la lista de estudiantes inscritos en cada curso.

---

## 4. Integración con Librerías Comunes

La aplicación utiliza:

- **Componentes UI (`ui-shared`):** Botón, Card de Curso, Tabla, etc.
- **Modelos y Servicios (`utils-common`):** Modelos de curso, estudiante e inscripción, y el servicio API para consumir el backend.

Esto permite mantener la lógica y la presentación centralizadas y reutilizables en todo el monorepo.

---

## 5. Configuración de Puerto

Para ejecutar la aplicación en el puerto `4201`, asegúrate de tener la siguiente configuración en el archivo `project.json` de `app2`:

```json
"options": {
	"port": 4201
}
```

Esto permite que la app se despliegue en `http://localhost:4201` y no entre en conflicto con otras aplicaciones Angular en el monorepo.

---

## 6. Ejemplo de Interacción

```typescript
// Ejemplo de uso del servicio API para crear un curso
apiService.createCourse({ name, description }).subscribe(...);

// Para obtener alumnos inscritos en un curso
apiService.getEnrollmentsByCourse(courseId).subscribe(...);

// Para eliminar un curso
apiService.deleteCourse(courseId).subscribe(...);
```

---

## 7. Beneficios de la Arquitectura NX

- **Reutilización:** Componentes y lógica compartidos entre apps.
- **Escalabilidad:** Fácil de agregar nuevas apps o funcionalidades.
- **Mantenibilidad:** Código organizado y centralizado.

---

## Buenas prácticas para integración y reutilización

- Centraliza la lógica de comunicación con el backend en el servicio API de la librería `utils-common` para evitar duplicación de código y facilitar el mantenimiento.
- Documenta y exporta los modelos y servicios desde el archivo `index.ts` de la librería para que puedan ser utilizados fácilmente en otras aplicaciones del monorepo.

---

> **Nota:** Recuerda iniciar el servidor Node.js antes de usar la app y verificar que las dependencias estén correctamente instaladas. La app estará disponible en `http://localhost:4201`.
