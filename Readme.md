# Ejercitacion: Creando nuestra API 🤓

### Como ejecutar este proyecto al iniciar:

1. git clone: https://github.com/drakarisbelen/first_api

2. Posicionarse en el directorio donde se clone y abrir visual studio code

3. Una vez abierto el proyecto en Visual Studio Code: Activar xamp y mysql

4. Para levantar la BD de las migraciones ejecutar el siguiente codigo en la terminal:
   sequelize db:migrate -- esto va a crear la BD movies_db2 en mysql
   Nota: si quiero REVERTIR la migracion ejecutar el comando: db:migrate:undo

5. Para levantar los seeds esto lo que hace es un Insert en cada tabla que deje definida dentro del archivo,
   ver carpeta database/seeders
   Ejecutar el siguiente comando:
   npx sequelize-cli db:seed:all

6. Para ejecutar la aplicacion:
   npx nodem app.js

7. Para ejecutar las rutas desde el Postman:

list: Muestra un listado de peliculas
http://localhost:3010/movies/

show: Muestra una pelicula por el ID que se pasa por parametro
http://localhost:3010/movies/1

search: Busca una pelicula por titulo utilizo el parametro keyword y mando la letra o palabra que deseo buscar:
http://localhost:3010/movies/search?keyword=ani

Insertar una pelicula:
POST - http://localhost:3010/movies/
Probar con opción:
Body y x-www-form-urlencoded


### Temas practicados:

.Uso de Migrations: Nueva migracion, actualizacion de una migracion

.Uso de Seeders

.Definición de Modelos Sequelize

.creacion de una API Para leer la tabla movies

.Utilizacion de Postman
