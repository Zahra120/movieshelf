var express = require('express');
var app = express();
var pug = require('pug');

var fs = require ('fs');




 var moviesLibrary = JSON.parse(fs.readFileSync('movie.json').toString());

// var moviesLibrary =
// [
//    {  name     : "les quatre",
//       director : " François Truffaut",
//       Writers  : "François Truffaut",
//       Year     : "1959",
//       imgUrl   :   "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzNTMzOTA2Ml5BMl5BanBnXkFtZTgwNDQ2OTI3MjE@._V1_UY268_CR0,0,182,268_AL_.jpg"
//
//    },
//    {
//       name     : "La Haine",
//       director : " Mathieu Kassovitz",
//       Writers  : " Mathieu Kassovitz",
//       Year     : "1995",
//       imgUrl   :   "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3OTAyOTMyM15BMl5BanBnXkFtZTcwNTMxMTI0MQ@@._V1._SY209_CR4,0,140,209_.jpg"
//
//    },
//    {
//       name     : "The Godfather",
//       director : "Francis Ford Coppola",
//       Writers  : "James Caan, Diane Keaton",
//       Year     : "1972",
//       imgUrl   :  "https://images-na.ssl-images-amazon.com/images/M/MV5BNTUxOTdjMDMtMWY1MC00MjkxLTgxYTMtYTM1MjU5ZTJlNTZjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1._SY209_CR4,0,140,209_.jpg"
//     }
// ];

var findMovie = function(name){
   for( var i = 0; i < moviesLibrary.length; i++){
      if (moviesLibrary[i].name === name ){

        return moviesLibrary[i] ;
      }
   }
};
app.get('/',function(req, res){
   console.log();
   res.send(pug.renderFile('views/index.pug', {movies : moviesLibrary } ));
});
app.get('/movies/*', function(req, res) {
  var foundMovie  = findMovie(req.params[0]);
  res.send(pug.renderFile('views/movie.pug', { movie: foundMovie }));
});









app.listen(3000, function() {
  console.log('Web server started on port 3000');
});
