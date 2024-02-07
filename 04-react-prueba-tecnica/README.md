# Prueba técnica para Juniors y Trainees de React en Live Coding

APIs:

- Facts Random: https://catfact.ninja/fact
- Image Random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la 1ra API y muestra una imagen de un gato con la primera palabra del hecho de la 2da API.

LO PRIMERO: Seperar el objetivo en pequeños objetivos:
    * Recupera un hecho aleatorio de gatos de la 1ra API.
    * Recupera la primera palabra del hecho.
    * Muestra una imagen de un gato con la priemra palabra.
LO SEGUNDO: Mirar(en este caso) la/s API y su documentación.
    obtenemos el endpoint para usar:
        `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true` 

Va a contener:
* Buenas practicas
* Fetching de datos
* Custom Hooks
* Testing end to end (para el final de prueba)

Crear proyecto sin template (Inicializar uno mismo el proyecto, punto de entrada):
- npm create vite@latest .Opción vanilla
- npm install @vitejs/plugin-react -E
- npm i react react-dom -E
- Crear en la raiz vite.config.js:
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    export default defineConfig({
        plugins: [react()]
    })
- Crear ó modificar main.jsx (que esta cargado en el index.html, tener encuenta la EXTENSIÓN jsx):
    import { createRoot } from 'react-dom/client';
    const root = createRoot(document.getElementById('app'));
    root.render(
        <h1>Hello world!</h1>
    )
- npm i standard -D (instalar linter):
    Agregar al package.json:
        "eslintConfig": {
            "extends": "./node_modules/standard/eslintrc.json"
        }
