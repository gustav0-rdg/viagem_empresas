import changeTheme from "./modules/changeTheme";
import storageTheme from "./modules/storageTheme";

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