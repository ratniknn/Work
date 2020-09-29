let numberOfFilms = +prompt('Сколько фильмов вы просмотрели?');

function start(){
  numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

  while(numberOfFilms ==  ''|| numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i=0; i < 2; i++){
        var a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          if (a != '' && a != null && a.length < 50 ){
            personalMovieDB.movies[a] = b;
          } 
          else i--;
          
    }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB < 10){
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB >=30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
      console.log(personalMovieDB);
    }
}


showMyDB();

function writeYourGenres(){
  for(let i=1; i<=3; i++){
    personalMovieDB.genres[i-1]= promt(`Ваш любимый жанр под номером ${i}`);
  }
}

console.log(personalMovieDB);
console.log('OK');