const { Pool, Client } = require("pg");

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'hionmultscan',
    port:'5432'
});

module.exports = pool;