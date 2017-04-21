var express = require('express');
var path = require('path');
var app = express();

//app.get('/',function(req, res){
//sql.close();
//sql.connect(config, function(err){
//  var request = new sql.Request();
//  request.stream = true;
//  request.query('SELECT TOP 10 UserNo, UserName FROM STUser');

//  var data=
//    "<html>"+
//      "<head>"+
//        "<title>mssql test"+
//        "</title>"+
//      "</head>"+
//      "<body>"+
//        "<h1>TEST</h1>"+
//        "<table border=\"1\">"+
//          "<tr><th>UserNo</th><th>UserName</th></tr>";

//  request.on('row', function(row){
//    data +="<tr>";
//    data +="<td>"+row.UserNo+"</td>";
//    data +="<td>"+row.UserName+"</td>";
//    data +="</tr>";
//          console.log(data);
//  });

//request.on('done', function(){
//  data += "</table></body></html>";
//});
//});

//sql.on('error', function(err){
//  console.log(err);
//});
//});

app.set("view engine", "ejs");
//app.use(express.static(path.join(__dirname, 'public')));
//console.log(__dirname);

var data = {
  count: 0
};
app.get('/', function(req, res) {
  data.count++;
  res.render('my_first_ejs', data);
});

app.get('/reset', function(req, res) {
  data.count = 0;
  res.render('my_first_ejs', data);
});

app.get('/set/count', function(req, res) {
  if (req.query.count) data.count = req.query.count;
  res.render('my_first_ejs', data);
});

app.get('/set/:num', function(req, res) {
  data.count = req.params.num;
  res.render('my_first_ejs', data);
});

//app.get('/',function(req,res){
//   res.render('my_first_ejs');
//});

app.listen(3000, function() {
  console.log('Server On!');
});
