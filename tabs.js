window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.header-tab'), //class of your tab button
        info = document.querySelector('.header'), //class of  your menu with tab buttons
        tabContent = document.querySelectorAll('.tab-content'); //class of your tab with some content

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('header-tab')) { //class of your tab button
            for (let i = 0; i < tab.length; i++) {
                tab[i].classList.remove('show');  //if you want to delete some styles from unactive button
                event.target.classList.add('show'); //if you want to add some styles on active button
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });


});