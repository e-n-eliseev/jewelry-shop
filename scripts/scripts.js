"use strict";

//кнопка переключения категорий
const btnArea = document.querySelector('.main__categories-btns');
btnArea.addEventListener('click', ({ target }) => {
    const btnActive = document.querySelector('.main__categories-btn--active');
    if (target.tagName !== "BUTTON" || target === btnActive) {
        return;
    }
    target.classList.add('main__categories-btn--active');
    btnActive.classList.remove('main__categories-btn--active');
});

//кнопка воспроизведения видео
const socialSamples = document.querySelector('.main__social-samples');
socialSamples.addEventListener('click', ({ target }) => {
    if (!target.closest('.main__social-btn')) {
        return;
    }
    const hiddenSvg = target.closest('.main__social-btn').querySelector('.main__social-video-play-hidden');
    const svg = target.closest('.main__social-btn').querySelector('.main__social-video-play');
    hiddenSvg.classList.remove('main__social-video-play-hidden');
    hiddenSvg.classList.add('main__social-video-play');
    svg.classList.add('main__social-video-play-hidden');
    svg.classList.remove('main__social-video-play');

    if (target.closest('.main__social-btn').nextElementSibling.paused) {
        target.closest('.main__social-btn').nextElementSibling.play();
    } else {
        target.closest('.main__social-btn').nextElementSibling.pause();
    }
});

//если дополнительно необходимо добавить элементы управления звуком и временем воспроизведения.
// // получаем все элементы
// var videoEl = document.getElementsByTagName('video')[0],
// playBtn = document.getElementById('playBtn'),
// vidControls = document.getElementById('controls'),
// volumeControl = document.getElementById('volume'),
// timePicker = document.getElementById('timer');

// // если браузер может воспроизводить видео удаляем класс
// videoEl.addEventListener('canplaythrough', function () {
// vidControls.classList.remove('hidden');
// videoEl.volume = volumeControl.value;
// }, false);
// // запускам или останавливаем воспроизведение
// playBtn.addEventListener('click', function () {
// if (videoEl.paused) {
//     videoEl.play();
// } else {
//     videoEl.pause();
// }
// }, false);

// videoEl.addEventListener('play', function () {

// playBtn.innerText = "Pause";
// }, false);

// videoEl.addEventListener('pause', function () {

// playBtn.innerText = "Play";
// }, false);

// volumeControl.addEventListener('input', function () {

// videoEl.volume = volumeControl.value;
// }, false);

// videoEl.addEventListener('ended', function () {
// videoEl.currentTime = 0;
// }, false);

// videoEl.addEventListener('timeupdate', function () {
// timePicker.innerHTML = secondsToTime(videoEl.currentTime);
// }, false);

// // рассчет отображаемого времени
// function secondsToTime(time){

// var h = Math.floor(time / (60 * 60)),
//     dm = time % (60 * 60),
//     m = Math.floor(dm / 60),
//     ds = dm % 60,
//     s = Math.ceil(ds);
// if (s === 60) {
//     s = 0;
//     m = m + 1;
// }
// if (s < 10) {
//     s = '0' + s;
// }
// if (m === 60) {
//     m = 0;
//     h = h + 1;
// }
// if (m < 10) {
//     m = '0' + m;
// }
// if (h === 0) {
//     fulltime = m + ':' + s;
// } else {
//     fulltime = h + ':' + m + ':' + s;
// }
// return fulltime;
// }


