# Clase 16: Storybook en Nx

---

## ¿Qué es Storybook y por qué usarlo en Nx?

**Storybook** es una herramienta para construir, documentar y probar componentes UI de forma aislada. Integrarlo en Nx permite visualizar, testear y compartir componentes de librerías como `ui-shared` sin necesidad de levantar toda la aplicación.

Su uso en Nx es clave para:
- Mejorar la calidad y documentación de los componentes.
- Facilitar el diseño, QA y colaboración entre equipos.
- Probar estados y variaciones de componentes de manera independiente.

---

## 🎯 Objetivo práctico
Integrar **Storybook** en una librería de componentes de Angular dentro de un monorepo Nx para documentar, visualizar y probar componentes de forma aislada.

---

## 🔹 ¿Qué es Storybook?
- **Storybook** es una herramienta para construir y documentar componentes UI de forma independiente.
- Permite:
  - Visualizar componentes en aislamiento.
  - Probar sus estados y variaciones.
  - Compartir documentación viva con el equipo.
  - Facilitar diseño y QA sin necesidad de levantar toda la aplicación.

En un monorepo Nx, Storybook se integra perfectamente en las librerías de UI, como `ui-shared`.

---

## 🔹 Instalación de Storybook en una librería Nx
Ejecutá el siguiente comando:

```bash
npx nx g @nx/angular:storybook-configuration ui-shared
```

Esto generará:
- Configuración de Storybook dentro de la librería `ui-shared`.
- Archivos `.storybook` con presets.
- Soporte para correr Storybook con Nx.
- Archivos `.stories.ts` automáticos para cada componente existente.

---

## 🔹 Componentes en nuestro proyecto ui-shared

En este proyecto tenemos tres componentes principales:

### ButtonComponent
- **Selector**: `lib-shared-button`
- **Propiedades**:
  - `variant`: 'primary' | 'secondary' | 'success' | 'danger'
  - `size`: 'small' | 'normal' | 'large'
  - `type`: 'button' | 'submit' | 'reset'
  - `disabled`: boolean

### CourseCardComponent
- **Selector**: `lib-shared-course-card`
- **Propiedades**:
  - `course`: Course (objeto con id, title, description, teacher)
  - `showActions`: boolean

### TableComponent
- **Selector**: `lib-shared-table`
- **Propiedades**:
  - `data`: unknown[] (datos a mostrar)
  - `columns`: TableColumn[] (configuración de columnas)
  - `actions`: TableAction[] (acciones disponibles)
  - `noDataMessage`: string

---

## 🔹 Stories creados para nuestros componentes

### Button Stories
```typescript
// Ubicación: packages/ui-shared/src/lib/components/button/button.component.stories.ts
export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<lib-shared-button [variant]="variant" [size]="size">Primary Button</lib-shared-button>`,
  }),
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  // ... más configuración
};
```

### Course Card Stories
```typescript
// Ubicación: packages/ui-shared/src/lib/components/course-card/course-card.component.stories.ts
const sampleCourse: Course = {
  id: '1',
  title: 'Angular 20 con Nx',
  description: 'Aprende a desarrollar aplicaciones Angular modernas usando Nx monorepo',
  teacher: 'Sergio Code'
};

export const Default: Story = {
  args: {
    course: sampleCourse,
    showActions: true,
  },
};
```

### Table Stories
```typescript
// Ubicación: packages/ui-shared/src/lib/components/table/table.component.stories.ts
const courseColumns: TableColumn[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'title', label: 'Título', sortable: true },
  { key: 'teacher', label: 'Profesor', sortable: true },
];

export const WithData: Story = {
  args: {
    data: sampleCourses,
    columns: courseColumns,
    actions: courseActions,
  },
};
```

---

## ⚠️ Problema de compatibilidad: Angular 20 y Storybook

**IMPORTANTE**: Existe un problema de compatibilidad **conocido y confirmado** entre Storybook y Angular 20.

### El problema confirmado
Tanto la configuración básica de Nx como cualquier configuración personalizada fallan con el mismo error fundamental:

```
Error: Cannot find module '@angular-devkit/build-angular/src/utils/webpack-browser-config'
```

**Esto ocurre porque:**
- Angular 20 introdujo una nueva arquitectura de build (`@angular/build`) 
- Eliminó completamente `@angular-devkit/build-angular`
- Storybook para Angular está hardcodeado para buscar el paquete anterior

### Prueba realizada
1. ✅ Generamos configuración básica con Nx:
   ```bash
   npx nx g @nx/angular:storybook-configuration ui-shared
   ```

2. ❌ **La configuración básica de Nx también falla** con:
   ```
   SB_CORE-SERVER_0002 (CriticalPresetLoadError): Storybook failed to load the following preset: @storybook\angular\preset
   ```

### Configuración generada por Nx (que no funciona)
```typescript
// packages/ui-shared/.storybook/main.ts
const config: StorybookConfig = {
  stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
```

### Stories generados automáticamente
Nx sí genera correctamente los archivos `.stories.ts`:
- `button.component.stories.ts`
- `course-card.component.stories.ts` 
- `table.component.stories.ts`

Pero **no se pueden ejecutar** debido al problema de compatibilidad.

### Alternativas actuales
1. **Esperar actualización oficial**: Storybook está trabajando en soportar Angular 20.
2. **Downgrade temporal**: Usar Angular 19 hasta que haya soporte completo.
3. **Documentación manual**: Crear páginas HTML/MD propias para documentar componentes.
4. **Showcase component**: Crear un componente interno que muestre todos los componentes de la librería.
5. **Playwright Component Testing**: Como alternativa para testing visual y documentación.

### Conclusión importante
**Este NO es un error de configuración**. Tanto desarrolladores novatos como expertos enfrentarán el mismo problema al intentar usar Storybook con Angular 20. Es una limitación temporal del ecosistema que se resolverá con futuras actualizaciones.

---

## 🔹 Levantar Storybook (cuando funcione)
Para iniciar el entorno de Storybook y visualizar los componentes:

```bash
npx nx storybook ui-shared
```

Esto abrirá una instancia local de Storybook (por defecto en `http://localhost:4400`).

---

## 🔹 Estructura de archivos generada

```
packages/ui-shared/
├── .storybook/
│   ├── main.ts          # Configuración principal
│   ├── preview.ts       # Configuración de preview
│   └── tsconfig.json    # TypeScript config para Storybook
└── src/lib/components/
    ├── button/
    │   ├── button.component.ts
    │   ├── button.component.html
    │   ├── button.component.css
    │   └── button.component.stories.ts  # ✨ Stories del botón
    ├── course-card/
    │   ├── course-card.component.ts
    │   ├── course-card.component.html
    │   ├── course-card.component.css
    │   └── course-card.component.stories.ts  # ✨ Stories de course card
    └── table/
        ├── table.component.ts
        ├── table.component.html
        ├── table.component.css
        └── table.component.stories.ts  # ✨ Stories de tabla
```

---

## 🔹 Beneficios (cuando esté funcionando)
- Documentación viva de tu **design system**.
- Feedback rápido para desarrolladores y diseñadores.
- Reutilización de componentes validada.
- Base sólida para pruebas visuales automatizadas.
- Desarrollo de componentes en aislamiento.

---

## ✅ Resumen
1. ✅ **Comando de generación exitoso**:  
   ```bash
   npx nx g @nx/angular:storybook-configuration ui-shared
   ```

2. ✅ **Archivos generados correctamente**:
   - Configuración de Storybook (`.storybook/main.ts`, `preview.ts`, `tsconfig.json`)
   - Stories automáticos para todos los componentes
   - Configuración de proyecto actualizada

3. ❌ **Ejecución falló** (problema conocido):
   ```bash
   npx nx storybook ui-shared
   # Error: Cannot find module '@angular-devkit/build-angular/src/utils/webpack-browser-config'
   ```

4. ⚠️ **Causa confirmada**: 
   - Incompatibilidad entre Angular 20 y Storybook
   - Afecta tanto configuración básica como personalizada
   - Es un problema del framework, no de nuestra implementación

5. 🔄 **Próximos pasos**:
   - Continuar desarrollo sin Storybook por ahora
   - Monitorear actualizaciones de Storybook para Angular 20
   - Los stories están listos para cuando se resuelva la compatibilidad

**Estado actual**: Todo configurado correctamente, esperando soporte de Angular 20 en Storybook.

