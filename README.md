# Mongoose CRUD API

Simple CRUD API to register, fetch, update and delete clients from a MongoDB database.

Built with Node.JS, Mongoose and designed following Clean Arch.

Unit and integration tests written with Mocha, Chai and Sinon.

## TODO

* Use temporary docker containers for integration tests
* Create some business logic for the usecases;
* Unit tests for usecases;
* Improve error handling;

## Run the app

1. Clone this repo, enter the local dierectory, and start the app (you will need [docker-compose](https://docs.docker.com/compose/install/) installed):

```shell
git clone https://github.com/jpgsaraceni/mongoose-crud.git && cd mongoose-crud && make start
```

To stop the app, run `make stop`

## Automated tests

To run all tests (you will need [Mocha](https://mochajs.org/) CLI installed for all tests, and [MongoDB](https://www.mongodb.com/try/download/community) for integration tests):

```shell
make test
```

## Run without docker-compose

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

## Manually testing HTTP Routes

You can use [REST Client](https://github.com/Huachao/vscode-restclient) extension on VSCode to test the HTTP server routes. On the file `crud.http`, in the root of this project, the routes have already been written. Just click on the `Send Request` button the extension shows on your editor. Or use whichever HTTP request service you prefer, like curl or ThunderClient.

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
