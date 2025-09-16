# Clase 10: Agregar App1 - Gestión de Inscripciones con Angular y NX

En esta clase aprenderás a crear una aplicación Angular dentro del monorepo NX que simula una plataforma de estudiantes. La app utiliza el servidor Node.js, los componentes UI, modelos y servicios comunes definidos en las librerías compartidas del workspace.

---

IMPORTS: EL @SOFTWARE O @LEARN HAY QUE ACTUALIZARLO POR EL QUE ESTÉ EN EL TSCONFIG

---

## 1. Objetivos de la Clase

- Crear una aplicación Angular (`app1`) que gestione inscripciones de estudiantes a cursos.
- Integrar la app con el backend Node.js y las librerías comunes (`ui-shared`, `utils-common`).
- Implementar funcionalidades de inscripción, desuscripción y visualización de cursos por estudiante.
- Permitir el cambio de estudiante mediante un selector.

---

## 2. Estructura del Proyecto

```
packages/
	app1/
		src/app/
			...
```

---

## 3. Funcionalidades Implementadas

- **Inscribir estudiante a curso:** El usuario puede seleccionar un curso y realizar la inscripción.
- **Ver cursos suscritos:** Muestra los cursos en los que el estudiante está inscrito.
- **Desuscribirse de curso:** Permite al estudiante eliminar su inscripción de un curso.
- **Selector de estudiante:** Cambia el contexto de la app para gestionar inscripciones de diferentes estudiantes.

---

## 4. Integración con Librerías Comunes

La aplicación utiliza:

- **Componentes UI (`ui-shared`):** Botón, Card de Curso, Tabla, etc.
- **Modelos y Servicios (`utils-common`):** Modelos de curso, estudiante e inscripción, y el servicio API para consumir el backend.

Esto permite mantener la lógica y la presentación centralizadas y reutilizables en todo el monorepo.

---

## 5. Flujo de la Aplicación

1. El usuario selecciona un estudiante en el selector.
2. Se muestran los cursos disponibles y los cursos en los que el estudiante está inscrito.
3. El usuario puede inscribir al estudiante en nuevos cursos o desuscribirse de cursos existentes.
4. Todas las operaciones se realizan mediante llamadas al servidor Node.js usando el servicio API común.

---

## 6. Ejemplo de Interacción

```typescript
// Ejemplo de uso del servicio API para inscribir estudiante
apiService.createEnrollment({ studentId, courseId }).subscribe(...);

// Para obtener cursos suscritos
apiService.getEnrollmentsByStudent(studentId).subscribe(...);

// Para desuscribirse
apiService.deleteEnrollment(enrollmentId).subscribe(...);
```

---

## 7. Beneficios de la Arquitectura NX

- **Reutilización:** Componentes y lógica compartidos entre apps.
- **Escalabilidad:** Fácil de agregar nuevas apps o funcionalidades.
- **Mantenibilidad:** Código organizado y centralizado.

---

> **Nota:** Recuerda iniciar el servidor Node.js antes de usar la app y verificar que las dependencias estén correctamente instaladas.
