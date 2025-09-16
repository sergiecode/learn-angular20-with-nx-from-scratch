# Errores de Lint en el Proyecto Nx

---

IMPORTS: EL @SOFTWARE O @LEARN HAY QUE ACTUALIZARLO POR EL QUE ESTÉ EN EL TSCONFIG

---

Este documento detalla los errores de lint encontrados y las soluciones aplicadas en el repositorio del curso **Angular con NX** (clase 13). Se utilizó la ejecución de todos los lints disponibles para asegurar la calidad y consistencia del código en los distintos proyectos del monorepo.

## Comandos Ejecutados

Para disparar todos los lints y detectar problemas en cada paquete del monorepo, se utilizaron los siguientes comandos:

```bash
npx nx run-many --target=lint --all
nx lint ui-shared
nx lint app1
nx lint app2
```

Gracias a estos comandos, se identificaron y corrigieron todos los problemas reportados por las reglas de lint configuradas en el proyecto.

## Resumen de Errores Encontrados

Al ejecutar los lints, se detectaron **33 problemas** distribuidos en 3 proyectos:

- **ui-shared**: 16 problemas (4 errores, 12 warnings)
- **app1**: 11 problemas (3 errores, 8 warnings)
- **app2**: 6 problemas (2 errores, 4 warnings)

---

## 1. Errores en ui-shared

### 1.1 Selectores de Componentes (`@angular-eslint/component-selector`)
- **Error**: Los selectores deben empezar con el prefijo "lib".
- **Archivos afectados:**
  - `button.component.ts` (línea 4)
  - `course-card.component.ts` (línea 5)
  - `table.component.ts` (línea 17)
- **Solución:** Cambiar los selectores para incluir el prefijo `lib-`.

### 1.2 Output Binding (`@angular-eslint/no-output-native`)
- **Error**: Los outputs no deben usar nombres de eventos DOM estándar.
- **Archivo afectado:** `button.component.ts` (línea 14)
- **Problema:** `@Output() click = new EventEmitter<void>();`
- **Solución:** Renombrar a un nombre más específico como `buttonClick` o `clicked`.

### 1.3 Tipos 'any' (`@typescript-eslint/no-explicit-any`)
- **Warning**: Uso de tipo `any` en lugar de tipos específicos.
- **Archivo afectado:** `table.component.ts`
  - Línea 13: `onClick: (item: any) => void;`
  - Línea 23: `@Input({ required: true }) data: any[] = [];`
  - Línea 32: `sortData(column: any): void`
  - Línea 65: `getCellValue(item: any, key: any): any`
  - Línea 69: `(a as any)[key], (b as any)[key]`
- **Solución:** Definir interfaces específicas o usar genéricos.

### 1.4 Non-null Assertions (`@typescript-eslint/no-non-null-assertion`)
- **Warning**: Uso de operador `!` que puede ser peligroso.
- **Archivos afectados:**
  - `table.component.ts` (líneas 38, 39)
  - `table.component.spec.ts` (líneas 134, 137, 165)

---

## 2. Errores en app1

### 2.1 Inyección de Dependencias (`@angular-eslint/prefer-inject`)
- **Error**: Preferir función `inject()` sobre inyección por constructor.
- **Archivos afectados:**
  - `app.ts` (línea 47)
  - `courses.component.ts` (línea 29)
  - `my-enrollments.component.ts` (línea 43)
- **Solución:** Migrar a la nueva sintaxis con `inject()`.

### 2.2 Variables No Utilizadas (`@typescript-eslint/no-unused-vars`)
- **Warning**: Variables definidas pero no utilizadas.
- **Archivos afectados:**
  - `courses.component.ts` (línea 35): `'newUserId' is defined but never used`
  - `my-enrollments.component.ts` (línea 49): `'newUserId' is defined but never used`

### 2.3 Tipos 'any' en Tests (`@typescript-eslint/no-explicit-any`)
- **Warning**: Uso de tipo `any` en archivos de prueba.
- **Archivos afectados:**
  - `app.spec.ts` (líneas 11, 12)
  - `courses.component.spec.ts` (líneas 11, 12)
  - `my-enrollments.component.spec.ts` (líneas 11, 12)

---

## 3. Errores en app2

### 3.1 Inyección de Dependencias (`@angular-eslint/prefer-inject`)
- **Error**: Preferir función `inject()` sobre inyección por constructor.
- **Archivos afectados:**
  - `course-enrollments.component.ts` (línea 36)
  - `course-management.component.ts` (línea 56)

### 3.2 Variables No Utilizadas en Tests (`@typescript-eslint/no-unused-vars`)
- **Warning**: Variables definidas pero no utilizadas en tests.
- **Archivos afectados:**
  - `course-enrollments.component.spec.ts` (línea 13): `'mockApiService' is assigned a value but never used`
  - `course-management.component.spec.ts` (línea 13): `'mockApiService' is assigned a value but never used`

### 3.3 Tipos 'any' en Tests (`@typescript-eslint/no-explicit-any`)
- **Warning**: Uso de tipo `any` en archivos de prueba.
- **Archivos afectados:**
  - `course-enrollments.component.spec.ts` (línea 13)
  - `course-management.component.spec.ts` (línea 13)

---

## Conclusión

La ejecución de los lints permitió identificar y corregir problemas de estilo, tipado y buenas prácticas en todo el monorepo. Se recomienda mantener la ejecución periódica de los lints y actualizar las reglas según las mejores prácticas de Angular y TypeScript para asegurar la calidad del código.
