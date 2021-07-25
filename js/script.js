/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let advBlocks = document.querySelectorAll('.promo__adv img');
let movieList = document.querySelector('.promo__interactive-list');

advBlocks.forEach(function(item){
    item.remove();
})

document.querySelector('.promo__genre').innerHTML = 'драма';
document.querySelector('.promo__bg').style.backgroundImage = 'url(./img/bg.jpg)';


movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach(function(film, i){
    movieList.innerHTML += ` 
    <li class="promo__interactive-item">
        ${i} ${film}
        <div class="delete"></div>
    </li>`;
})

