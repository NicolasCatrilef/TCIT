<div style="display: flex; align-items: center;">
  <img src="src/assets/TCIT.png" alt="Logo de la Prueba Técnica" width="150" style="margin-right: 10px;">
  <h1>[Front-End] - Prueba Técnica</h1>
</div>

## Tecnologías Utilizadas

Este proyecto ha sido construido utilizando las siguientes tecnologías principales:

* **[React](https://react.dev/)**: Una biblioteca de JavaScript para construir interfaces de usuario.
* **[TypeScript](https://www.typescriptlang.org/)**: Un superconjunto de JavaScript que añade tipado estático.
* **[Tailwind CSS](https://tailwindcss.com/)**: Un framework CSS de utilidad-primera para un desarrollo rápido.
* **[Redux Toolkit](https://redux-toolkit.js.org/)**: El paquete oficial recomendado para el desarrollo eficiente de Redux.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

* **[Node.js](https://nodejs.org/)**: Entorno de ejecución de JavaScript. (Se recomienda una versión LTS)
    ```bash
    node -v
    npm -v
    ```
* **[npm](https://www.npmjs.com/)** o **[yarn](https://yarnpkg.com/)**: Administradores de paquetes de JavaScript.

## Instalación y Configuración

Sigue estos pasos para configurar y ejecutar la aplicación localmente:

### 1. Instalar las Dependencias

Navega al directorio del proyecto e instala las dependencias utilizando npm o yarn:

Con npm:
```bash
npm install
```

Con yarn:
```bash
yarn install
```

Este comando descargará todas las bibliotecas necesarias, incluyendo TypeScript, Tailwind CSS, Material UI, Redux Toolkit y otras dependencias.

### 2. Ejecutar Aplicación

Una vez que las dependencias estén instaladas y la variable de entorno configurada, puedes iniciar el servidor de desarrollo local utilizando Vite:

**Con npm:**

```bash
npm run dev
```

**Con yarn :**

```bash
yarn  dev
```

### 3. Scripts Disponibles

En el `package.json` encontrarás los siguientes scripts que puedes ejecutar:

`dev`: Inicia el servidor de desarrollo (Vite).
`build`: Construye la aplicación para producción.
`preview`: Previsualiza la construcción de producción localmente.
`test`: Ejecuta las pruebas unitarias (si están configuradas).
`eject`: Expulsa la configuración predeterminada (generalmente no recomendado).