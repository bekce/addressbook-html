# addressbook-html
Simple AddressBook application featuring html, bootstrap, javascript, jquery, spring boot, mongodb and swagger.

Static files (html, js, css, etc) under `/static` directory on classpath (`src/main/resources/static`) are served on `/` directly by `spring-boot`. 

Business layer is simply handled by `Controller` class which runs on `/api` endpoint and serves some REST endpoints for the frontend.

`Contact` data is persisted to a mongodb database with `spring-data-mongo` technology via a `ContactRepository`. An embedded mongodb will be automatically run on startup so you don't have to have a running database server. It will download a mongodb server automatically on first startup, so first run can take some time depending on your network speed. If you'd like to disable embedded mongodb and use your own mongodb please see instructions in `application.properties` file.

Run with `mvn spring-boot:run`. Open [http://localhost:8080](http://localhost:8080) after startup.

[Swagger](http://swagger.io/) via [SpringFox](https://github.com/springfox/springfox) is also configured for REST documentation. See [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) for list of REST endpoints and try sending some requests with it. 
