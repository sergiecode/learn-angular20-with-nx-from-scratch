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

## 🔹 Configuración práctica implementada

### 1. Agregar tags a los proyectos en `nx.json`
En el archivo `nx.json` agregamos la sección `projects` con los tags correspondientes:

```json
{
  "projects": {
    "app1": { "tags": ["scope:app"] },
    "app2": { "tags": ["scope:app"] },
    "ui-shared": { "tags": ["scope:ui"] },
    "utils-common": { "tags": ["scope:utils"] },
    "server": { "tags": ["scope:api"] }
  }
}
```

### 2. Configurar restricciones en `nx.json`
También agregamos las restricciones de dependencias:

```json
{
  "dependencyConstraints": [
    {
      "sourceTag": "scope:utils",
      "onlyDependOnLibsWithTags": ["scope:utils"]
    },
    {
      "sourceTag": "scope:ui",
      "onlyDependOnLibsWithTags": ["scope:utils", "scope:ui"]
    },
    {
      "sourceTag": "scope:api",
      "onlyDependOnLibsWithTags": ["scope:utils"]
    },
    {
      "sourceTag": "scope:app",
      "onlyDependOnLibsWithTags": ["scope:utils", "scope:ui", "scope:api"]
    }
  ]
}
```

### 3. Configurar ESLint para enforcar restricciones
En `eslint.config.mjs` actualizamos la regla `@nx/enforce-module-boundaries`:

```javascript
{
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  rules: {
    '@nx/enforce-module-boundaries': [
      'error',
      {
        enforceBuildableLibDependency: true,
        allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
        depConstraints: [
          {
            sourceTag: 'scope:utils',
            onlyDependOnLibsWithTags: ['scope:utils'],
          },
          {
            sourceTag: 'scope:ui',
            onlyDependOnLibsWithTags: ['scope:utils', 'scope:ui'],
          },
          {
            sourceTag: 'scope:api',
            onlyDependOnLibsWithTags: ['scope:utils'],
          },
          {
            sourceTag: 'scope:app',
            onlyDependOnLibsWithTags: ['scope:utils', 'scope:ui', 'scope:api'],
          },
        ],
      },
    ],
  },
}
```

### 4. Agregar tags a los archivos `project.json` individuales
Cada proyecto también debe tener sus tags en su archivo `project.json`:

```json
{
  "name": "utils-common",
  "tags": ["scope:utils"]
}
```

---

## 🔹 Comandos útiles

### Verificar que todos los proyectos sean reconocidos
```bash
npx nx show projects
```

### Validar restricciones de dependencias
```bash
npx nx lint <proyecto>
npx nx eslint:lint <proyecto>
```

### Ver el grafo de dependencias
```bash
npx nx graph
npx nx graph --print  # Versión en terminal
```

### Limpiar cache de Nx (útil tras cambios de configuración)
```bash
npx nx reset
```

### Ejecutar lint en todos los proyectos
```bash
npx nx run-many --target=lint --all
```

---

## 🔹 Arquitectura implementada

Nuestra configuración establece la siguiente jerarquía:

```
┌─────────────────┐
│   scope:app     │  ← Aplicaciones (app1, app2)
│  (apps/features)│
└─────────────────┘
         │
         ▼
┌─────────────────┐
│   scope:ui      │  ← Componentes UI (ui-shared)
│  (UI components)│
└─────────────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│  scope:utils    │     │   scope:api     │
│   (utilities)   │     │    (server)     │
└─────────────────┘     └─────────────────┘
```

**Reglas:**
- `scope:utils`: Solo puede depender de otros `scope:utils`
- `scope:ui`: Puede depender de `scope:utils` y otros `scope:ui`
- `scope:api`: Solo puede depender de `scope:utils`
- `scope:app`: Puede depender de cualquier scope

---

## 🔹 Demostración práctica

### Ejemplo de violación detectada
Si intentamos que `utils-common` importe de `ui-shared`:

```typescript
// En packages/utils-common/src/index.ts
import { ButtonComponent } from '@learn-angular20-with-nx-from-scratch/ui-shared';
```

Al ejecutar `npx nx eslint:lint utils-common`, obtenemos:
```
Circular dependency between "utils-common" and "ui-shared" detected
```

---

## 🔹 Validación
Para verificar las restricciones:
```bash
npx nx lint app1      # ✅ Debería pasar
npx nx lint ui-shared # ✅ Debería pasar  
npx nx eslint:lint utils-common # ✅ Debería pasar (sin importaciones prohibidas)
```

Si hay dependencias no permitidas, Nx te mostrará los errores específicos indicando qué proyectos violan las reglas.

---

## ✅ Beneficios obtenidos
- **Arquitectura controlada**: Imposible crear dependencias circulares o incorrectas
- **Escalabilidad**: Fácil de mantener en equipos grandes
- **Automatización**: Validación automática en cada lint/build
- **Claridad**: Tags visuales en el grafo de dependencias
- **Refactoring seguro**: Cambios estructurales detectados inmediatamente

Con esta configuración, aseguramos que nuestro monorepo mantenga una **arquitectura limpia, controlada y escalable** de forma automática.

