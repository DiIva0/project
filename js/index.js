/* let und="";
console.log(und);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj["isMarried"]);

let arr = ["wether.png", 6, 'summer.jpg', `wnter.web`];
console.log(arr[0]);
 */
/* 
const arr = ['a', 'b', 'c']
const arr0a = {
    a: 'a',
    b: 'b',
    c: 'c'
}

console.log(arr[1]);
console.log(arr0a['a']) */

/* alert("Hello"); */
/*  const answer = confirm ("Are you here?");
 console.log(answer); */

/*  const result = +prompt("Age?", "-1");
 console.log(typeof(result)); */

/*  const answers = [];

 answers[0] = prompt("Ваше имя?", "");
 answers[1] = prompt("Ваша фамилия?", "");
 answers[2] = prompt("Ваш возраст?", "");

console.log(typeof(answers)); */

/* const category = 'toys';
console.log(`https://${category}/5`); */

/* const name = prompt("Ваше имя?", "");
alert(`Hello, ${name}`); 


let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr); */

let numberOfFilms = +prompt("Сколько фильмов вы же посмотрели?", "");
personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let lastMovie1 = prompt("Один из последних просмотренных фильмов?", ""),
    noteOfMovie1 = prompt("На сколько его оцените?", ""),
    lastMovie2 = prompt("Один из последних просмотренных фильмов?", ""),
    noteOfMovie2 = prompt("На сколько его оцените?", "");

personalMovieDB.movies[lastMovie1] = noteOfMovie1;
personalMovieDB.movies[lastMovie2] = noteOfMovie2;


console.log(personalMovieDB);