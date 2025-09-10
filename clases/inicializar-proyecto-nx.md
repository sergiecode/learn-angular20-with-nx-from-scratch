## Clase: Inicializar proyecto con NX

### Pasos a seguir

```bash
npx create-nx-workspace@latest learn-angular20-with-nx-from-scratch --preset=npm
```

Al ejecutar el comando anterior, se mostrará lo siguiente:

```bash
Need to install the following packages:
create-nx-workspace@21.5.1
Ok to proceed? (y)

 NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

√ Which CI provider would you like to use? · github

 NX   Creating your v21.5.1 workspace.

√ Installing dependencies with npm
√ Successfully created the workspace: learn-angular20-with-nx-from-scratch
√ Nx Cloud has been set up successfully
√ CI workflow has been generated successfully

 NX   Failed to push workspace to GitHub.

Please create a repo en https://github.com/new?name=learn-angular20-with-nx-from-scratch y empuja este workspace.

 NX   Your CI setup is almost complete.

Push your repo, then go to Nx Cloud and finish the setup: https://cloud.nx.app/connect/PjxXUPNNuw
```

---
### Próximo paso: conectar lo creado al repositorio

```bash
git remote add origin https://github.com/sergiecode/learn-angular20-with-nx-from-scratch.git
git push -u origin master
```

---
### Finalizar la conexión con Nx Cloud

1. Abrimos el enlace y seleccionamos "Conectar con Github".
2. Si vamos a [https://cloud.nx.app/](https://cloud.nx.app/) estará conectado (puede pedir crear la organización, le ponemos nuestro nombre).

---
