# Conexión del Proyecto Nx a Nx Cloud

Este documento explica cómo conectar tu monorepo Angular con Nx a **Nx Cloud** (clase 14), los comandos utilizados y los beneficios que aporta esta integración.

## ¿Qué es Nx Cloud?

Nx Cloud es una plataforma que potencia Nx con funcionalidades avanzadas para equipos y proyectos colaborativos, permitiendo:
- **Cache remoto**: Acelera la ejecución de tareas compartiendo resultados entre desarrolladores y CI.
- **Análisis y reportes**: Visualiza métricas, tiempos y resultados de builds y tests.
- **Self-healing CI**: Optimiza pipelines y reduce tiempos de integración continua.
- **Colaboración**: Sincroniza el estado del workspace entre todos los miembros del equipo.

Más información: [Nx Cloud Docs](https://nx.app/docs)

## Pasos para conectar el proyecto a Nx Cloud

### 1. Ejecutar el comando de conexión

```bash
npx nx connect-to-nx-cloud
```

Si el workspace ya está conectado, verás:
```
NX   ✔ This workspace already has Nx Cloud set up
```

### 2. Conectar la cuenta Nx Cloud

Si aún no lo hiciste, accede a la URL que te provee el comando para vincular tu workspace con tu cuenta Nx Cloud:

```
https://cloud.nx.app/connect/[Código]
```

Sigue los pasos en la web para asociar el workspace y acceder a las funcionalidades avanzadas.

### 3. Sincronizar cambios con Git

Es recomendable mantener el workspace actualizado con el repositorio remoto:

```bash
git pull
```

Esto asegura que los cambios de configuración de Nx Cloud se mantengan sincronizados entre todos los colaboradores.

## Beneficios de Nx Cloud en el Proyecto

- **Aceleración de builds y tests**: El cache remoto permite reutilizar resultados y evitar ejecuciones innecesarias.
- **Visibilidad y métricas**: Acceso a paneles de control con información de ejecuciones, tiempos y estado de pipelines.
- **Colaboración eficiente**: Todos los miembros del equipo comparten el mismo estado y resultados.
- **Integración con CI/CD**: Optimiza pipelines y reduce costos de infraestructura.
- **Escalabilidad**: Ideal para monorepos grandes y equipos distribuidos.

## Comandos útiles relacionados

- Conectar a Nx Cloud:
  ```bash
  npx nx connect-to-nx-cloud
  ```
- Ver estado y configuración:
  ```bash
  npx nx show-nx-cloud-status
  ```
- Ejecutar tareas aprovechando el cache remoto:
  ```bash
  npx nx build app1
  npx nx test app2
  npx nx lint ui-shared
  ```

## Conclusión

Conectar tu proyecto Nx a Nx Cloud es un paso fundamental para aprovechar todo el potencial de Nx en equipos y proyectos profesionales. La integración es sencilla y los beneficios en velocidad, colaboración y visibilidad son inmediatos.
