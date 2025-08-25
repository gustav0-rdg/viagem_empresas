import { storageTheme } from './storageTheme.js';

export function changeTheme (defaultTheme = 'light')
{
    const theme = localStorage.getItem('theme');

    if (!theme)
    {
        storageTheme(defaultTheme);
    }

    document.documentElement.setAttribute('data-theme', (theme || defaultTheme));
}