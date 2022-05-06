run `npm install` to install the project dependencies
run `npm install cors ejs express pg`
run `npm install --save-dev nodemon`
run `npm audit fix`

run `npm fund` to see the source-code structure
#### Setting up the PostgreSQL database
Install the following PostgreSQL environments.

- [PostgreSQL](https://www.postgresql.org/download/)an opensource relational databse management system.
- [pgAdmin](https://www.pgadmin.org/download/), standalone destop application for managing PostgreSQL databases.

Once installed and well configured, create a database and a table to work with.

- Create a database, `hionmultscan`.

```SQL
CREATE DATABASE postgres;
```

- Create a table, `todos`.

```SQL
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  checked  Boolean);
```

### Running the application
run `npm run dev` or
run `nodemon ./src/index.js` or
run `node ./src/index.js`
- Start the development server by Running:

```bash
npm run dev
```

- In a browser, visit `http://localhost/1146`;

- Interact with the application.