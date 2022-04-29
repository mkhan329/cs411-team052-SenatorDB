var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
var mysql = require('mysql2');

var connection = mysql.createConnection({
                host: '34.72.136.178',
                user: 'root',
                password: 'a1b2c3',
                database: 'senate_data'
});

var app = express();

var cors = require('cors');
app.use(cors());



app.get('/', (req, res) => {
        res.json({"message": "Hi Tuan!"});
})


// SENATOR DATA BASE
app.get('/sen_db', (req, res) => {
        var sqlQry = 'SELECT * FROM Senators limit 50';
        //var sqlQry = 'SELECT count(castCode) as YesCount, BillId FROM VOTE WHERE castCode = 6 GROUP BY BillId HAVING YesCount <= 33 limit 3';
	connection.query(sqlQry,function(error,results) {
                if (error) {res.send("error from the database side");}
        else {
                res.json(results);
                }
});
});

// PROCEDURE 
app.get('/procedure', (req, res) => {
        var sqlQry = 'CALL BillPartisanship';
        connection.query(sqlQry,function(error,results) {
                if (error) {res.send("error from the database side");}
        else {
                res.json(results);
                }
});
});

// PARTIES DATABASE
app.get('/party_db', (req, res) => {
        var sqlQry = 'SELECT * FROM Parties limit 3';
        //var sqlQry = 'SELECT count(castCode) as YesCount, BillId FROM VOTE WHERE castCod$
        connection.query(sqlQry,function(error,results) {
                if (error) {res.send("error from the database side");}
        else {
                res.json(results);
                }
});
});



// set up ejs view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '../public'));

app.use(session({ 
    secret: '123456catr',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash());
 
/* GET home page, respond by rendering index.ejs */
/*app.get('/select', function(req, res, next) {
  res.render('index', { title: 'Contact-Us' });
});

app.get('/insert', function(req, res, next) {
  res.render('index', { title: 'Contact-Us' });
});

app.get('/update', function(req, res, next) {
  res.render('index', { title: 'Contact-Us' });
});*/

app.get('/affiliated', function(req, res, next) {
  res.render('affiliated', { title: 'Contact-Us' });
});
// SELECT FROM SENATOR TABLE BASE ON NAME
app.post('/affiliated-us', function(req, res, next) {
  var name = req.body.name;
  console.log(name);
 
  var sql = `SELECT * FROM AffiliatedTo WHERE SenatorID LIKE '${name}' limit 3`;

console.log(sql);
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record selected');
    req.flash('success', 'Data selected successfully!');
    res.json(result);
  });
})
 


app.get('/insert', function(req, res, next) {
  res.render('insert', { title: 'Contact-Us' });
});
// this code is executed when a user clicks the form submit button
app.post('/insert-us', function(req, res, next) {
  var sen_id = req.body.sen_id;
  var name = req.body.name; 
  var birth = req.body.birth;
    console.log(name);
 
  var sql = `INSERT INTO Senators (SenatorID, Name, BirthYear) VALUES (${sen_id},'${name}',${birth})`;

console.log(sql);
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.json(result);
//    res.redirect('/insert');
  });
});

app.get('/select', function(req, res, next) {
  res.render('index', { title: 'Contact-Us' });
});
// SELECT FROM SENATOR TABLE BASE ON NAME
app.post('/select-us', function(req, res, next) {
  var name = req.body.f_name;
  console.log(name);
 
  var sql = `SELECT * FROM Senators WHERE Name LIKE '${name}' limit 3`;

console.log(sql);
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record selected');
    req.flash('success', 'Data selected successfully!');
    res.json(result);
  });
});


app.get('/update', function(req, res, next) {
  res.render('update', { title: 'Contact-Us' });
});
//UPDATE NAME OF SENATOR BASE ON SENATOR ID
app.post('/update-us', function(req, res, next) {
  var name = req.body.name;
  var sen_id = req.body.sen_id;
  var year = req.body.birth;
  console.log(name);
  
  var update_sql = `UPDATE Senators SET Name = '${name}' , BirthYear = ${year}  WHERE SenatorID = ${sen_id}`; //fix

console.log(update_sql);
  connection.query(update_sql, function(err, result) {
    if (err) throw err;
    console.log('record selected');
    req.flash('success', 'Data selected successfully!');
    res.json(result);
  });
}); 


app.get('/delete', function(req, res, next) {
  res.render('delete', { title: 'Contact-Us' });
});
//DELETE ROW FROM SENATOR BASE ON SENATOR ID
app.post('/delete-us', function(req, res, next) {
  var sen_id = req.body.sen_id;
  console.log(sen_id);
  
  var delete_sql = `DELETE FROM Senators WHERE SenatorID = ${sen_id}`;

console.log(delete_sql);
  connection.query(delete_sql, function(err, result) {
    if (err) throw err;
    console.log('record selected');
    req.flash('success', 'Data selected successfully!');
    res.json(result);
  });
}); 

//Search for Senator based on senator name
app.get('/senator', (req, res) => {
  const keyword = req.query.keyword;
  console.log(keyword + " is the keyword");
  const search_sql = 'SELECT * FROM Senators LEFT JOIN LooksLike USING (SenatorID) LEFT JOIN Wikipedia USING (PageTitle) LEFT JOIN FromState USING (SenatorID) LEFT JOIN States USING(StateID) LEFT JOIN AffiliatedTo USING (SenatorID) LEFT JOIN Parties USING(PartyName) WHERE Name LIKE "%'+keyword+
'%"';
  console.log(search_sql);
  connection.query(search_sql,keyword,  function(err, result) {
    if (err) throw err;
    console.log('record selected');
    req.flash('success', 'Data selected successfully!');
    res.json(result);
  });
});

//FIRST ADVANCE  SQL 1

//app.get('/adv1', function(req, res, next) {
//  res.render('index', { title: 'Contact-Us' });
//});

app.get('/adv1-us', function(req, res, next) {
 // var sen_id = req.body.email;
 // console.log(sen_id);

  var adv1_sql = `SELECT BillID, COUNT(SenatorID) as YesCount, Results, Date FROM Vote NATURAL JOIN Bills WHERE VoteType = 1 GROUP BY BillID HAVING YesCount > 50;`; 

console.log(adv1_sql);
  connection.query(adv1_sql, function(err, result) {
    if (err) throw err;
    console.log('record selected');
    req.flash('success', 'Data selected successfully!');
    res.json(result);
  });
}); 

//SECOND ADVANCED SQL 2


//app.get('/adv2', function(req, res, next) {
//  res.render('index', { title: 'Contact-Us' });
//});

app.get('/adv2-us', function(req, res, next) {
  //var sen_id = req.body.email;
  //console.log(sen_id);
 
  var adv2_sql = 'Select BillID, tmp.NoCount, Results, Date FROM Bills NATURAL JOIN (Select BillID, COUNT(SenatorID) as NoCount FROM Vote NATURAL JOIN Bills WHERE SenatorId IN (SELECT SenatorID FROM AffiliatedTo NATURAL JOIN Parties WHERE PartyName = "democrat") AND VoteType BETWEEN 4 AND 6 GROUP BY BillID) as tmp WHERE Results LIKE "%Agree%" OR Results LIKE "%Confirm%" OR Results LIKE "%Pass%" ORDER BY tmp.NoCount DESC;';

console.log(adv2_sql);
  connection.query(adv2_sql, function(err, result) {
    if (err) throw err;
    console.log('record selected');
    req.flash('success', 'Data selected successfully!');
    res.json(result);
  });
});

app.get('/test', function(request, response){
    connection.query('select * from employees limit 5', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
// port must be set to 3000 because incoming http requests are routed from port 80 to port 8$
app.listen(80, function () {
    console.log('Node app is running on port 80');
});
 
module.exports = app;
/**
var cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}**/
//app.use(cors());
