# Marvel APP <img src="https://user-images.githubusercontent.com/42571115/220859812-504c24e3-5b22-4d0e-9248-bf44c4e04c91.png" width="100px" />

Marvel APP muestra distintas vistas. Cada vista obtiene distintos elementos que provienen de una API y, para cada uno de Estos elementos, debemos consultar distintos endpoints compuestos a su vez, por distintas variables.

En la Home o primera vista, nos encontraremos con un buscador y se cargarán los primeros 99 heroes/villanos de la API. A medida que insertamos caracteres en el buscador, comprobaremos que los elementos se irán filtrando hasta encontrar el deseado.

Haciendo click en este, nos llevará a su single page donde podremos encontrar más información sobre este, así como un botón que nos llevará a una página en la que podremos encontrar todos sus comics.

La APP de Marvel ha sido realizada con React, NextJs 13, Typescript y, para los estilos, Tailwind.

Los logos del header son clickables.

# Primeros pasos

- Funciona con node v 14. De lo contrario no instalará dependencias con npm i
- Fork this Repo
- Clone this Repo "git clone + url"

```sh
git clone https://github.com/aitorulz1/marvel-react.git
```

# Versión Node

- Imprescindible utilizar con versión 14
- No funciona en versión 16

# Clonado

Una vez tengas clonado el repositorio de la app, instala todas las dependencias | npm install

```sh
npm i
```

Podemos arrancar la aplicación usando

```sh
npm run dev
```

# Posibles mejoras

- Si el filtrado no fuera local sino por API, usaría debouncing para esperar a que el usuario termine de escribir en el input. En éste caso, haríamos que la lupa fuese un botón que realizara la acción de la búsqueda y realizar la petición, pero en éste caso, no es lo que se pedía.

# Correr la aplicación

La aplicación se abrirá en [http://localhost:3000/]

Esta ha sido realizada para <img src="https://user-images.githubusercontent.com/42571115/220861430-f7a3cf79-59a8-46e2-9eac-391b143a300c.png" width="40px" />
