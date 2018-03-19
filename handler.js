const pg = require('pg');

let connectString = process.env.DATABASE_URL||'postgres://localhost:5433/';

let pool = new pg.Client(connectString);
pool.connect();

const submitDataHandler = function(req, res) {
  let username = req.body.userName;
  let password = req.body.Password;
pool.query(`insert into students_info values ($1,$2);`, [username, password], (err, result) => {
    if (err) {
      return;
    }
    console.log(result);
    res.redirect('/index.html');
  });
}
exports.submitDataHandler = submitDataHandler;

// var query = function(name, password) {
//   pool.query(`insert into students_info values ($1,$2);`, [name, password], (err, result) => {
//     if (err) {
//       return;
//     }
//     console.log(result);
//     // res.redirect('/login.html');
//   });
// }
