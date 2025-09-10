## Explicación profesional de la estructura del proyecto NX y cómo agregar Angular

### Estructura general del proyecto

El proyecto está organizado siguiendo las mejores prácticas de NX para monorepositorios modernos. A continuación se describen los componentes principales:

- **`packages/`**: Carpeta donde se agregan las distintas aplicaciones y librerías del monorepo. Aquí se desarrollarán los proyectos Angular y otros paquetes relacionados.
- **`nx/`**: Carpeta interna utilizada por NX para almacenar el caché de la aplicación y gestionar la conexión con el workspace remoto. No es necesario modificarla manualmente.
- **`package.json`**: Archivo de configuración general y compartida para todo el workspace. Aquí se definen las dependencias comunes y scripts globales.
- **`nx.json`**: Archivo de configuración principal de NX. Contiene la estructura del workspace, configuración de plugins y opciones avanzadas.
- **`.github/`**: Carpeta que contiene los workflows y disparadores para las GitHub Actions, permitiendo la integración continua y despliegue automatizado.

### Extensiones recomendadas para el curso

Instala el siguiente perfil de extensiones en VS Code para trabajar de forma eficiente con NX y Angular:

- **NX Console**: Interfaz gráfica para ejecutar comandos NX fácilmente.
- **Angular Language Service**: Autocompletado, navegación y ayuda contextual para Angular.
- **Angular Snippets**: Fragmentos de código útiles para Angular.

Puedes instalarlas desde la sección de extensiones de VS Code buscando sus nombres.

### Agregar el plugin de Angular al workspace NX

Ejecuta el siguiente comando en la terminal para agregar soporte Angular al monorepo NX:

```bash
npx nx add @nx/angular
```

Este comando instalará el plugin oficial de Angular para NX y permitirá crear aplicaciones y librerías Angular dentro del workspace.

---
Esta estructura y configuración te permitirá trabajar de forma profesional y escalable en proyectos modernos con NX y Angular.
