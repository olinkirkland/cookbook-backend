import pg from 'pg';

console.log(JSON.stringify(pg.defaults, null, 2));

// const client = new Client({
//   host: 'my.database-server.com',
//   port: 5334,
//   user: 'database-user',
//   password: 'secretpassword!!'
// });