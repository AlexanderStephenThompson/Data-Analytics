import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Passwurd',
    database: 'graphql_library'
});

export { db };