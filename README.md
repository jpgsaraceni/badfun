# Mongoose CRUD API

Simple CRUD API to register, fetch, update and delete clients from a MongoDB database. Built with Node.JS, Mongoose and designed following Clean Arch.

## TODO

* Create Postman collection;
* Enforce contracts for repository and usecase;
* Unit and integration tests;

## Run the app

1. Clone this repo, enter the local dierectory, and start the app (you will need docker-compose installed):

```shell
git clone https://github.com/jpgsaraceni/mongoose-crud.git && cd mongoose-crud && make start
```

To stop the app, run `make start`

### Run without docker-compose

Before running the app, you will need an instance of MongoDB running locally and to set the following .env variables:

```env
DB=<name of your db>
DB_URL=<default is localhost:27017>
SERVER_PORT=<the port you want your application to run on>
```

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

### `PUT /{id}`

Update an existing client. Expected request payload:

```json
{
    "name":<string>,
    "email":<string>
}
```

Responses: 200, 400, 404, 500.

### `DELETE '/{id}'`

Delete an existing client. Responses: 200, 400, 404 or 500.
