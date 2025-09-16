# Clase 15: Detección de proyectos afectados en Nx

## 🎯 Objetivo práctico
Aprender a usar los comandos de **Nx Affected** para optimizar builds y pruebas, ejecutando solo lo que realmente cambió en el monorepo.

---

## 🔹 ¿Qué es `nx affected`?
`nx affected` permite detectar qué aplicaciones o librerías se ven **impactadas** cuando se realizan cambios en el código. Nx analiza el **grafo de dependencias** del monorepo y ejecuta tareas solo sobre esos proyectos.

### ⚠️ Importante: Base de comparación
Por defecto, `nx affected` compara con `--base=master --head=HEAD`. Esto significa:
- Si estás en una rama de desarrollo (ej: `tutorial/español`), verá **TODOS** los cambios desde que te separaste de `master`
- Para ver solo los cambios recientes, usa: `--base=HEAD~1` (último commit) o `--base=HEAD~n` (n commits atrás)

Esto es clave para:
- Reducir el tiempo de compilación.
- Acelerar la ejecución de pruebas.
- Optimizar pipelines de CI/CD.

---

## 🔹 Pasos prácticos

### 1. Realizar un cambio mínimo
Editá un archivo dentro de una de tus librerías compartidas, por ejemplo `utils-common`. Puede ser algo simple, como agregar un comentario o modificar una función.

```ts
// utils-common/src/lib/utils-common.ts

export function utilsCommon(): string {
  return 'utils-common';
}

// Funciones matemáticas para demostrar nx affected
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}
```

**Resultado:** Al modificar `utils-common`, automáticamente se marcan como "afectados" todos los proyectos que dependan de esta librería.

---

### 2. Visualizar el impacto
Ejecutá:
```bash
nx graph --affected
```
⚠️ **Nota**: En versiones recientes de Nx (19+), el comando `nx affected:graph` fue deprecado.

Para comparar solo con commits recientes:
```bash
nx graph --affected --base=HEAD~1  # Solo el último commit
nx graph --affected --base=HEAD~3  # Últimos 3 commits
```

Esto abrirá un grafo interactivo en el navegador en `http://127.0.0.1:4211/projects/affected`, mostrando todas las apps y libs dependientes de los cambios.

**Resultado obtenido:** 
- Con `--base=master`: El cambio afectó 5 proyectos (porque estamos en una rama con muchos cambios)
- Con `--base=HEAD~1`: Solo 4 proyectos afectados (utils-common, app1, app2, ui-shared) por el cambio específico

---

### 3. Ejecutar pruebas afectadas
Corré:
```bash
nx affected:test                    # Compara con master (por defecto)
nx affected:test --base=HEAD~1      # Solo el último commit
```
De esta manera, Nx ejecutará **solo los tests** relacionados con los proyectos afectados por los cambios.

**Resultado obtenido en nuestro proyecto:**

Con `--base=master` (todos los cambios de la rama):
```
✓ nx run utils-common:test  [remote cache]
✓ nx run app1:test  [remote cache] 
✓ nx run ui-shared:test  [remote cache]
✓ nx run app2:test  [remote cache]
Successfully ran target test for 4 projects (1s)
```

Con `--base=HEAD~1` (solo último commit):
```
✓ nx run utils-common:test  [local cache]
✓ nx run app1:test  [local cache] 
✓ nx run ui-shared:test  [local cache]
✓ nx run app2:test  [local cache]
Successfully ran target test for 4 projects (246ms)
```

Como podés ver, solo se ejecutaron los tests de los proyectos afectados, y gracias a **Nx Cloud** se usó la caché para acelerar el proceso.

---

### 4. Ejecutar builds afectados
Corré:
```bash
nx affected:build
```
Esto construirá únicamente las apps/libs impactadas. Ideal para CI/CD, donde cada build puede tardar mucho tiempo.

**Resultado obtenido en nuestro proyecto:**
```
✓ nx run utils-common:build  [remote cache]
✓ nx run server:build:production  [remote cache]
✓ nx run ui-shared:build (7s)
✓ nx run app1:build:production  [remote cache]
✓ nx run app2:build:production  [remote cache]

Successfully ran target build for 5 projects (8s)
Nx read the output from the cache instead of running the command for 4 out of 5 tasks.
```

**Observación importante:** Solo `ui-shared` se construyó desde cero (7s), mientras que los otros 4 proyectos usaron la caché distribuida de Nx Cloud, reduciendo significativamente el tiempo total.

---

## 🔍 Estrategias de comparación en CI/CD

### En desarrollo local:
```bash
nx affected:test --base=HEAD~1      # Solo tus cambios recientes
nx affected:build --base=HEAD~3     # Últimos 3 commits
```

### En Pull Request:
```bash
nx affected:test --base=origin/main --head=HEAD    # Cambios de tu PR
```

### En CI/CD pipeline:
```bash
nx affected:test --base=$BASE_SHA --head=$HEAD_SHA  # Variables del CI
```

**Tip**: En GitHub Actions, puedes usar variables como `${{ github.event.before }}` para la base.

---

## 🔹 Beneficios en CI/CD
- En vez de correr `lint`, `test` y `build` sobre **todos los proyectos**, se ejecuta solo sobre los afectados.
- Los pipelines se vuelven más rápidos y eficientes.
- Combinado con **Nx Cloud** y caché distribuido, los tiempos pueden bajar de minutos a segundos.

### 📊 Ejemplo real observado en nuestro proyecto:
- **Sin affected**: Tendríamos que construir todos los proyectos (~6 proyectos)
- **Con affected**: Solo construimos 5 proyectos realmente afectados
- **Con Nx Cloud Cache**: 4 de 5 builds vienen de caché (80% de optimización)
- **Tiempo final**: 8 segundos en lugar de varios minutos

---

## ✅ Resumen
- `nx graph --affected` → visualiza qué cambia (comando actualizado en Nx 19+).
- `nx affected:test` → corre solo los tests impactados.
- `nx affected:build` → construye solo lo necesario.
- `--base=HEAD~1` → compara solo con commits recientes (útil en desarrollo).
- `--base=master` → compara con la rama principal (útil en CI/CD).

**Resultados de nuestro ejemplo práctico:**
- Cambio en `utils-common` → afectó 4 proyectos directamente dependientes
- Con `--base=master`: 5 proyectos (incluía cambios de toda la rama)
- Con `--base=HEAD~1`: 4 proyectos (solo el cambio específico)
- Tests: ejecutados en 246ms vs 1s dependiendo de la comparación
- Builds: 80% desde caché (4 de 5 proyectos)

**🎯 Lección clave**: La elección de `--base` es crítica para obtener resultados precisos de `nx affected`.

