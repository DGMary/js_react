// /* Задание на урок: №3

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/


// 'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// }

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?' , ''),
//               b = +prompt('На сколько оцените его?' , '');

//         if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if ( personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (10 <= personalMovieDB.count <= 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// detectPersonalLevel();


// function showMyDB(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {   
//         personalMovieDB.genres[i-1] =prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();


// test
// let inc = (function(){
//     let counter = 0;
//     return function(){
//        counter + 1;
//     }
// })();
// inc();

let inc = (function(){
    let counter = 0;
    return function(){
       return  counter = counter + 1;
    }
})();
inc();


const obj = {
    a: 42,
    say: function(){
        function helper(){
            console.log(this.a);
        }
        setTimeout(helper.bind(obj), 1000)
    }
}
obj.say();

const ex = (value, sum) => console.log(sum + value);
const fx = ex.bind(null, 10);

ex(12, 7);
fx(7, 12);

let words = ['banana', 'peach', 'orange', 'grapefruit', 'banana', 'grapefruit', 'banana','orange', 'banana', 'orange'];


    const temp = words.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        console.log( acc[cur]);
        console.log(acc);
        return acc;
    }, {});

    console.log(temp);
    const keys = Object.keys(temp);
    console.log(keys);
    keys.sort((a, b) => {
        console.log(a);
        console.log(temp[a])
        return temp[b] - temp[a];
    })

console.log(keys);
console.log('multiple');

multiplyByTwo(1,2,3,4,5,6);

function multiplyByTwo(...args) {
    console.log(args);
    return  args.map((el) => el*2);
}

multiplyByTwo(1,4,3,4,5,6);


function sum(num) {
    this.num = function () {    
        this.num  = num * 2; 
        return  this.num;      
    }
    console.log(num + ' = num')
    // return this;
};

sum(4);
// sumN(2)(6)();

console.log(1);
setTimeout(function(){console.log(2)}, 1000);
setTimeout(function(){console.log(3)}, 0);
console.log(4);