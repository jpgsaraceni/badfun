# Mongoose CRUD API

Simple CRUD API to register, fetch, update and delete clients from a MongoDB database. Built with Node.JS, Mongoose and designed following Clean Arch.

## TODO

* Refactor async functions and handle errors
* `PUT '/:id'` and `DELETE '/:id'` routes;
* Create Postman collection;
* Enforce contracts for repository and usecase;
* Unit and integration tests;
* Conteinerize (Docker).

## Run the app

Before running the app, you will need an instance of MongoDB running locally. The app is connecting on port 27017, which is the default MongoDB port.
I haven't set up a .env because I *intend* to conteinerize this application (and that will also solve the "you need mongodb running locally" inconvenience).

1. Clone this repo and enter it

```shell
git clone https://github.com/jpgsaraceni/mongoose-crud.git && cd mongoose-crud
```

2. Install dependencies

```shell
npm install
```

3. Start the app

```shell
npm start
```

or with live reload (nodemon):

```shell
npm run dev
```

Now you can test the routes on Postman, ThunderClient or whichever API testing service you prefer.

## Routes

### `GET '/'`

Fetch all registered clients.

Response:

```json
[
    {
    "id": <string>,
    "name": <string>,
    "email": <string>,
    }
]
```

or status 500.

### `POST '/'`

Add a new client. Expected request payload:

```json
{
    "name":<string>,
    "email":<string>
}
```

Responses: 201, 400 or 500.
