"use strict";

const btnArea = document.querySelector('.main__categories-btns');
btnArea.addEventListener('click', ({ target }) => {
    const btnActive = document.querySelector('.main__categories-btn--active');
    if (target.tagName !== "BUTTON" || target === btnActive) {
        return;
    }
    target.classList.add('main__categories-btn--active');
    btnActive.classList.remove('main__categories-btn--active');
});
