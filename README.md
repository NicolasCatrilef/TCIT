<div style="display: flex; align-items: center;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8V1W1dbt4dK9TadXuQDEMix3NwUeBLy0jww&s" alt="Logo de la Prueba Técnica" width="150" style="margin-right: 10px;">
  <h1>Prueba Técnica TCIT</h1>
</div>

## Descripción

Este Readme está diseñado para guiarte en la configuración y ejecución de la prueba técnica completa de TCIT, que consta de un **Back-End** (desarrollado con NestJS) y un **Front-End** (desarrollado con React, TypeScript, Tailwind CSS y Redux Toolkit). Es importante seguir los pasos de este archivo para asegurar una correcta ejecución.

## Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas principales:

* **`Back-End/`**: Contiene el código fuente y la configuración del servidor (API).
* **`Front-End/`**: Contiene el código fuente y la configuración de la interfaz de usuario.
* **`.git/`**: Carpeta de control de versiones de Git.
* **`README.md`**: Este archivo.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

* **[Node.js](https://nodejs.org/)**: Entorno de ejecución de JavaScript. (Se recomienda una versión LTS)
    ```bash
    node -v
    npm -v
    ```
* **[npm](https://www.npmjs.com/)** o **[yarn](https://yarnpkg.com/)**: Administradores de paquetes de JavaScript.

## Paso a Paso para la Ejecución Completa

Sigue estos pasos para clonar el repositorio, configurar el Back-End y el Front-End, y ejecutar la aplicación localmente.

### 1. Clonar el Repositorio

Clona el repositorio de GitHub en tu máquina local y navega a la raíz del proyecto:

```
git clone [https://github.com/NicolasCatrilef/TCIT](https://github.com/NicolasCatrilef/TCIT)
cd TCIT
```

### 2. Configuración y Ejecución del Back-End

El Back-End está desarrollado con NestJS y actúa como la API de la aplicación.


#### 1. Navegar al directorio del Back-End:

```
cd Back-End
```

#### 2. Instalar dependencias:

```
npm install
```

#### 3. Configurar variables de entorno:

* Clona el archivo **`.env.template`** y renómbralo a **`.env`**.
* Modifica las variables descritas en el nuevo archivo **`.env`** con los valores necesarios para tu entorno (ej. configuración de base de datos, puertos, etc.).


#### 4. Levantar el servidor del Back-End:

```
# Para desarrollo
npm run start:dev
```

Una vez iniciado, el Back-End se estará escuchando en el puerto 3000. Se debe dejar esta terminal ejecutándose.

### 2. Configuración y Ejecución del Front-End

El Front-End está desarrollado con React y consume la API del Back-End.

#### 1. Navegar al directorio del Front-End:

Abrir una nueva terminal y navegar al directorio del Front-End. Asegúrate de estar en la raíz del proyecto TCIT antes de entrar a Front-End.

```
cd Front-End
```

#### 2. Instalar dependencias:


Con npm:
```
npm install
```

Con yarn:

```
yarn install
```

Este comando descargará todas las bibliotecas necesarias, incluyendo React, TypeScript, Tailwind CSS, Material UI, Redux Toolkit, etc.

#### 3. Ejecutar la aplicación Front-End:

Con npm:
```
npm run dev
```

Con yarn:

```
yarn dev
```
Esto iniciará el servidor de desarrollo del Front-End (Vite), que generalmente se ejecuta en el puerto 5173 o similar. Una vez iniciado, la aplicación se abrirá automáticamente en tu navegador predeterminado (o puedes acceder manualmente a http://localhost:5173/).

## Acceder a la Aplicación

Una vez que tanto el Back-End como el Front-End estén ejecutándose, podrás acceder a la aplicación completa en tu navegador web. El Front-End se comunicará con el Back-End para obtener los datos necesarios.

**[Desafío Técnico](http://localhost:5173/)**

URL de la aplicación Front-End: http://localhost:5173/ (o el puerto indicado por Vite en tu terminal).