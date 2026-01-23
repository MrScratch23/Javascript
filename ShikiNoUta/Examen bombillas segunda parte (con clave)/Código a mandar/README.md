# EXAMEN 2º TRIMESTRE


## Requisitos

Se necesita tener instalado Node JS. Idealmente la versión 22 o superiorers, como mínimo la 20. Comprueba que lo tienes instalado ejecutando lo siguiente:  
`node -v`


## Instrucciones

**Importante:** No uses la extensión _LiveServer_ desde el VSCode, esa extensión crea un servidor web de desarrollo que podría crear conflictos con el servidor web creado en el examen con _Express_, que no está preparado para las llamadas CORS.  


### Arrancar el servidor

Para arrancar el servidor ejecuta desde la raíz del proyecto:
```
npm run start
```


### Documentación de la API y pruebas

Para probar la API de tipo REST que debemos atacar se recomienda usar la extensión de VSCode llamada `Rest Client`, creada por Huachao Mao.  

Se proporcionará un fichero llamado `testapi.http` en la raíz del proyecto para poder realizar pruebas y comprobar que todo funciona correctamente.  

Ese fichero servirá también de documentación de la API.  

**Nota:** Recuerda que la API puede estar preparada para fallar aleatoriamente.


### La API no funciona

Si no consigues arrancar node, la API no funciona o no sabes realizar las peticiones, tendrás como último recurso un fichero con los datos para ser copiados e incorporados a tu código.  
Este fichero se encuentra en `public/datosAPI/datosAPI.js`.

Estos datos están ahí como último recurso para poder seguir realizando el examen, pero es un parche y será penalizado su uso.


### Estructura del proyecto y ficheros

El proyecto genera una API de tipo REST muy básica. Esta API se genera con los archivos del directorio `src`. Este directorio no se debe tocar.  

Los datos se encuentran almacenados en una base de datos SQLite. Esta base de datos se encuentra en el fichero `database/datos.db` y para la segunda parte del examen cambiará al igual que la propia API.

Si necesitas recuperar el estado que tenía la base de datos al principio del examen puedes ejecutar lo siguiente desde la raíz del proyecto:  
```
node database/seed.js
```

Esa orden eliminará la base de datos y la volverá a crear.

**Importante:** El alumno sólo puede añadir, eliminar y cambiar ficheros de Javascript dentro del directorio `public`.

No se puede modificar manualmente ningún fichero HTML ni CSS.  

### Corrección del examen
La corrección del examen se realizará copiando los ficheros Javascript del directorio `public` a un proyecto nuevo.  

Cualquier cambio realizado fuera de estos fichero se perderá.

