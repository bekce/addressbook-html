# addressbook-html
Simple AddressBook application featuring html, bootstrap, javascript, jquery, spring boot and mongodb.

Static files (html, js, css) under /static directory on classpath are served directly by spring-boot. 

Business layer is simply handled by `Controller` class which runs on "/api" endpoint and serves some REST endpoints for the frontend.

`Contact` data is persisted to a mongodb database with `spring-data-mongo` technology via a `ContactRepository`.

Run with `mvn spring-boot:run`. You need to have a running mongod instance on localhost. 
