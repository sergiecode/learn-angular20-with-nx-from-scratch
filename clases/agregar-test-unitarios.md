# 🧪 Clase 12: Agregar Tests Unitarios en Angular con NX

---

## ¿Qué es un test unitario?

Un **test unitario** es una prueba automatizada que verifica el funcionamiento correcto de una unidad mínima de código (por ejemplo, una función, componente o servicio) de forma aislada. Su objetivo es asegurar que cada parte del sistema cumpla con su propósito y detectar errores rápidamente durante el desarrollo.

En proyectos Nx y Angular, los tests unitarios ayudan a:
- Validar la lógica de componentes, servicios y utilidades.
- Prevenir regresiones al modificar el código.
- Mejorar la calidad y mantenibilidad del proyecto.
- Facilitar la colaboración en equipos grandes.

---

IMPORTS: EL @SOFTWARE O @LEARN HAY QUE ACTUALIZARLO POR EL QUE ESTÉ EN EL TSCONFIG

---

## 🎯 Objetivo
En esta clase aprenderás a agregar y ejecutar **tests unitarios** en todos los componentes, servicios y librerías compartidas de tu monorepo NX. Los tests unitarios son fundamentales para asegurar la calidad y el correcto funcionamiento de tu código.

## 🏗️ ¿Qué se testea en este proyecto?
- **Componentes Angular** (UI, lógica, interacción)
- **Servicios** (API, lógica de negocio)
- **Modelos y utilidades compartidas** (librerías comunes)

## 📦 Estructura de tests en el monorepo
Cada app y librería tiene sus archivos de test en la carpeta correspondiente:
- `*.spec.ts` para unit tests
- Ubicados en `src/app/`, `src/lib/`, etc.

Ejemplo:
```
packages/app1/src/app/app.spec.ts
packages/app2/src/app/app.spec.ts
packages/ui-shared/src/lib/components/button/button.component.spec.ts
packages/utils-common/src/lib/models/course.model.spec.ts
```

## ⚙️ Comandos NX para Testing
A continuación, los comandos más usados para trabajar con tests en NX:

### Ejecutar todos los tests de una app o librería
```bash
nx test <nombre-proyecto>
```
Ejemplo:
```bash
nx test app1
nx test app2
nx test ui-shared
nx test utils-common
```

### Ejecutar todos los tests del monorepo
```bash
nx run-many --target=test --all
```

### Crear un nuevo test unitario para un componente o servicio
```bash
nx generate @nx/angular:component <nombre> --project=<nombre-proyecto> --test
nx generate @nx/angular:service <nombre> --project=<nombre-proyecto> --test
```

### Ver cobertura de tests
```bash
nx test <nombre-proyecto> --code-coverage
```

## 📝 Buenas prácticas
- Escribir tests para cada componente, servicio y modelo nuevo.
- Mantener los tests actualizados al modificar la lógica.
- Revisar la cobertura y resultados antes de hacer deploy.

---

## Buenas prácticas para testing reutilizable

- Centraliza los mocks y utilidades de testing en una librería común (`utils-common` o una específica de tests) para evitar duplicación y facilitar el mantenimiento.
- Documenta y exporta los helpers de testing desde el archivo `index.ts` de la librería para que puedan ser utilizados fácilmente en todas las apps y librerías del monorepo.

## 🚀 Siguiente paso
Una vez agregados y ejecutados los tests unitarios, ¡continúa con la revisión de lints y la integración continua!


