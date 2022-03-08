
## `Inicio del proyecto`

- npx-create-react-app netflixclone --template redux

## `Proceso de limpieza`

## `Importar librerias`

- material-ui/core 
- axios 
- firebase 
- react-router-dom 
- react-uuid 
- styled-components

## `App.js - Layout inicial`

- Creamos las rutas
- Renderizamos Login o el resto del app, de acuerdo si existe un usuario o no

## `Estilos`

- Utilizando useStyles creamos una infraesctructura que nos permite asignar estilos a cada uno de los componentes

## `Creamos las carpetas de los componenetes: components, pages`

- Creamos la infraestructura basica de los componentes que representan una página: Home, Login, Paypal, Profile, SingUp

## `Estilos en los componentes de pages`

- Patrón para añadir la infraestructura de estilos a todos los componentes de page :

```

const classes = useStyles();

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
})
);

```

## `Crear la carpeta components (elementos que no son páginas)`

- Creamos la infraestructura básica del resto de componentes: Banner, Header, Plans, Rows

## `Estilos en los componentes de components`

- Patrón para añadir la infraestructura de estilos a todos los componentes de page :

```

const classes = useStyles();

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
})
);

```

## `Trabajamos en el componente Header`

- Importamos el logo de Netflix
- Añadimos al AppBar una clase transparent condicional, cuando la variable show = true se activa esta clase.
- La variable show se convierte en true, cuando hacemos un scroll vertical de mas de 100 px.
- Para escuchar cuando hacemos el scroll vertical, añadimos un eventListener al objeto window.
- El eventListener está activo una sola vez cada vez que refrescamos la página (useEffect con []).
- Ya montado el componente hay que limpiarlo para que no quede guardado el eventListener.
- Añadimos las rutas al logo y al avatar.

## `Trabajamos en el Banner`

- Importamos un banner de la casa de papel como backgroundImage.
- En React, acompañamos los backgroundImage con estilos como object-fit, background-size y background-position.
- Hemos posicionado el titulo de la pelicula, botones y la descripcion.
- La descripcion de la pelicula viene del API, tenemos que truncar la descripcion para asegurar que entre en el espacio asignado. Declaramos la funcion truncate.
- Añadimos un div vacío para generar un fade entre el banner y el resto del UI.

## `Trabajamos en el Login`

- Creamos un botón con styled components y le hemos llamdo NetflixButton. Este botón está customizado por nosotros y podremos variar sus estilos.
- Styled components para variar los estilos del input o del botón, pero para su posicionamiento le damos una clase normal.
- Creamos un input personalizado en Styledcomponents llamado NetflixInput. Como InputBase era un componente de material ui, pues lo llamamos styled(InputBase).

## `Trabajamos en el componente Profile`

- Hemos trabajado en la distribución.
- <Plans>Texto</Plans> ({children} = Texto).
- Pasamos props a los styled components.
- En el caso de que el componenete no sea binario, Ej: que el tamaño sea pequeño, grande o mediano, entonces realizamos una funcion con switch.

## `Trabajamos en el componente SignUp`

- Hemos creado una variable SignIn. Si la variable es false (no estamos registrados), entonces mostramos el formulario.

## `Proceso de SingUp / SingIn`

- Creamos una cuenta en Firebase.
- Inicializando el objeto auth.
- Guardando los datos tecleados por el usuario en el formulario.
- Registrado email y password con auth.createUserWithEmailAndPassword.
- Logueamos con auth.signInWithEmailAndPassword().

## `Redux`

- Habilitamos el slice userSlice para manejar el estado del usuario en el componente que queramos. 

## `Persistencia`

- Hemos añadido un "event listener" en App.js.
- El event listener trae el obj auth que escucha cada vez que cambia el usuario en firebase.
- Cada vez que cambie, inyecta el usuario en la capa de datos del userSlice.
- De esta forma recuerda que ya estamos logueados aunque refresquemos la página.

