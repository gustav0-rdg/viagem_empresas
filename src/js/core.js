import { changeTheme } from './modules/changeTheme.js';
import { storageTheme } from './modules/storageTheme.js';

const themesList = document.querySelector('.header__themes-list');

document.addEventListener('DOMContentLoaded', function () {
   
    changeTheme();

    themesList.addEventListener('click', function (event) {

        if (event.target.tagName == 'BUTTON')
        {
            storageTheme(event.target.dataset?.theme);

            changeTheme();
        }

    });

});