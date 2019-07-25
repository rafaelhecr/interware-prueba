Proyecto creado por Rafael A. Herrera Cruz

## Estructura de Carpetas

El proyecto sigue la estructura basica sigue la plantilla sugerida por el comando 
### `npx create-react-app`

La esstructura es la siguiente: 

src
    -components                 
        Chat.jsx
        Chatlist.jsx
        Layout.jsx
        List.jsx
        Navbar.jsx                                                                                  Navbar.js
                            //Contiene los componentes visuales; con la jerarquia: Index.js>App.jsx>Layout.jsx>Chat.jsx>List.jsx
                                                                                                                Chatlist.jsx
    -js
        -actions
            index.js
        -constants
            action-types.js
        -reducers
            index.js
        -store
            index.js
                            //Contiene la lógica de programación del chat con Redux
index.js
App.jsx
index.css
        
Para ejecutar el proyecto se usa el comando:

### `npm start`

Se ejecuta en el puerto 3000
