var express = require('express');
var path = require('path');
var app = express();
var sql = require('mssql');
var config = {
  user: 'sa',
  password: '3#4$didgod',
  server: '211.52.88.73',
  port: '6925',
  database: 'SHERP',
  stream: true
};

app.get('/',function(req, res){
  sql.close();
  sql.connect(config, function(err){
    if (err) console.log(err);
    var request = new sql.Request();
    request.stream = true;
    request.query('SELECT TOP 10 UserNo, UserName FROM STUser', function(recordset){
      if (err) console.log(err);
    });

    var data =
      "<html>"+
        "<head>"+
          "<title>mssql test"+
          "</title>"+
        "</head>"+
        "<body>"+
          "<h1>TEST</h1>"+
          "<table border=1>"+
            "<tr><th>UserNo</th><th>UserName</th></tr>";

    request.on('row', function(row){
      data +="<tr>";
      data +="<td>"+row.UserNo+"</td>";
      data +="<td>"+row.UserName+"</td>";
      data +="</tr>";
    });

    request.on('done', function(returnValue){
      data += "</table>DONE!!</body></html>";
      res.send(data);
    });

  });
});

var server = app.listen(5000, function(){
  console.log('Server is running!!');
});

//app.set("view engine", "ejs");
//app.use(express.static(path.join(__dirname, 'public')));
//console.log(__dirname);
//
//var data = {
//  count: 0
//};
//app.get('/', function(req, res) {
//  data.count++;
//  res.render('my_first_ejs', data);
//});
//
//app.get('/reset', function(req, res) {
//  data.count = 0;
//  res.render('my_first_ejs', data);
//});
//
//app.get('/set/count', function(req, res) {
//  if (req.query.count) data.count = req.query.count;
//  res.render('my_first_ejs', data);
//});
//
//app.get('/set/:num', function(req, res) {
//  data.count = req.params.num;
//  res.render('my_first_ejs', data);
//});
//
////app.get('/',function(req,res){
////   res.render('my_first_ejs');
////});
//
//app.listen(3000, function() {
//  console.log('Server On!');
//});
//
