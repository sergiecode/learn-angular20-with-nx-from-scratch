# Clase Extra: Tags para organizar librerías en Nx

## 🎯 Objetivo práctico
Aprender a utilizar **tags** en `nx.json` para organizar librerías dentro de un monorepo y aplicar **restricciones de dependencias**, manteniendo una arquitectura limpia y escalable.

---

## 🔹 ¿Qué son los *tags* en Nx?
- Los *tags* son etiquetas que se asignan a proyectos (apps o librerías) dentro del workspace.
- Sirven para **clasificar** y **controlar las dependencias**.
- Ejemplo: separar proyectos de tipo `ui`, `utils`, `feature`, `data-access`, etc.

Esto ayuda a garantizar que:
- Las librerías de bajo nivel no dependan de aplicaciones de alto nivel.
- Se respete la separación de capas.
- La arquitectura se mantenga ordenada en equipos grandes.

---

## 🔹 Agregar tags a los proyectos
Abrí el archivo `nx.json` y dentro de la sección `projects` agregá los tags correspondientes:

```json
{
  "projects": {
    "ui-shared": { "tags": ["scope:ui"] },
    "utils-common": { "tags": ["scope:utils"] },
    "app1": { "tags": ["scope:app"] },
    "app2": { "tags": ["scope:app"] }
  }
}
```

Con esto, cada proyecto queda clasificado según su rol dentro del monorepo.

---

## 🔹 Configurar restricciones
En el mismo archivo `nx.json`, podés definir reglas que impidan dependencias incorrectas entre proyectos. Ejemplo:

```json
{
  "extends": "nx/presets/core.json",
  "namedInputs": { },
  "targetDefaults": { },
  "projects": { },
  "implicitDependencies": {},
  "workspaceLayout": {},
  "pluginsConfig": {},
  "nx": {},
  "generators": {},
  "tasksRunnerOptions": {},
  "targetDefaults": {},
  "extends": "nx/presets/core.json",
  "dependencyConstraints": [
    {
      "sourceTag": "scope:utils",
      "onlyDependOnLibsWithTags": ["scope:utils"]
    },
    {
      "sourceTag": "scope:ui",
      "onlyDependOnLibsWithTags": ["scope:utils", "scope:ui"]
    }
  ]
}
```

En este ejemplo:
- Las librerías con `scope:utils` **solo pueden depender** de otras librerías con `scope:utils`.
- Las librerías con `scope:ui` pueden depender de `utils` o de otras `ui`, pero no de `app1` o `app2`.

Esto asegura que `utils-common` no importe nunca nada de `app1`, cumpliendo con la arquitectura definida.

---

## 🔹 Validación
Para verificar las restricciones, corré:
```bash
nx lint
```
Si hay dependencias no permitidas, Nx te mostrará los errores y qué proyectos los causan.

---

## ✅ Resumen
- **Tags**: clasifican proyectos en el monorepo.
- **Restricciones**: evitan dependencias no deseadas.
- `nx lint` valida automáticamente las reglas.

Con esto, asegurás que tu monorepo mantenga una **arquitectura limpia, controlada y escalable**.

