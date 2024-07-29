// /* let und="";
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj["isMarried"]);

// let arr = ["wether.png", 6, 'summer.jpg', `wnter.web`];
// console.log(arr[0]);
//  */
// /* 
// const arr = ['a', 'b', 'c']
// const arr0a = {
//     a: 'a',
//     b: 'b',
//     c: 'c'
// }

// console.log(arr[1]);
// console.log(arr0a['a']) */

// /* alert("Hello"); */
// /*  const answer = confirm ("Are you here?");
//  console.log(answer); */

// /*  const result = +prompt("Age?", "-1");
//  console.log(typeof(result)); */

// /*  const answers = [];

//  answers[0] = prompt("Ваше имя?", "");
//  answers[1] = prompt("Ваша фамилия?", "");
//  answers[2] = prompt("Ваш возраст?", "");

// console.log(typeof(answers)); */

// /* const category = 'toys';
// console.log(`https://${category}/5`); */

// /* const name = prompt("Ваше имя?", "");
// alert(`Hello, ${name}`); 


// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr); */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы же посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы же посмотрели?", "");
    }
}

start();

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// function rememberMyFilms() {
//     let lastMovie = '',
//         noteOfMovie = '';

//     for(let i=0; i < 2; i++){
//         while ((lastMovie == '' || noteOfMovie == '' || lastMovie == null || noteOfMovie == null) || lastMovie.length > 50) {
//             lastMovie = prompt("Один из последних просмотренных фильмов?", '');
//             noteOfMovie = prompt("На сколько его оцените?", '');
//         }
//         personalMovieDB.movies[lastMovie] = noteOfMovie;
//         lastMovie = '';
//         noteOfMovie = '';
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB['count'] < 10) {
//         alert("Просмотрено довольно мало фильмов🤔");
//     } else if (9 < personalMovieDB['count'] && personalMovieDB['count'] < 30) {
//         alert("Вы классический зритель🤗");
//     } else if (personalMovieDB['count'] > 29) {
//         alert("Вы киноман🤩");
//     } else {
//         alert("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

function showMyDB(switchPrivat) {
    if (switchPrivat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB['privat']);

let privat = false;

function writeYourGenres(i) {
    let personalGenres = '';
    while (personalGenres == '' || personalGenres == null) {
        personalGenres = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
    return personalGenres;
}

for(let i = 0; i < 3; i++) {
    resultGenres = writeYourGenres(i);
    personalMovieDB.genres[i] = resultGenres;
}
