const pg = require('pg');

let connectString = 'postgres://localhost:5433/';

let pool = new pg.Client(connectString);
pool.connect();

const submitDataHandler = function(req, res) {
  let username = req.body.userName;
  let password = req.body.Password;
  // let userDetails = {
  //   username: username,
  //   password: password
  // };
pool.query(`insert into students_info values ($1,$2);`, [username, password], (err, result) => {
    if (err) {
      return;
    }
    console.log(result);
    res.redirect('/login.html');
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
