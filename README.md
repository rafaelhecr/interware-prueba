Proyecto creado por Rafael A. Herrera Cruz

## Estructura de Carpetas

El proyecto sigue la estructura basica sigue la plantilla sugerida por el comando 
### `npx create-react-app`

La esstructura es la siguiente:__
__
src__
    -components__                 
        Chat.jsx__
        Chatlist.jsx__
        Layout.jsx__
        List.jsx__
        Navbar.jsx__                                                                                  Navbar.js__
                            //Contiene los componentes visuales; con la jerarquia: Index.js>App.jsx>Layout.jsx>Chat.jsx>List.jsx__
                                                                                                                Chatlist.jsx__
    -js__
        -actions__
            index.js__
        -constants__
            action-types.js__
        -reducers__
            index.js__
        -store__
            index.js__
                            //Contiene la lógica de programación del chat con Redux__
index.js__
App.jsx__
index.css__
        __
Para ejecutar el proyecto se usa el comando:__
__
### `npm start`
__
Se ejecuta en el puerto 3000__
