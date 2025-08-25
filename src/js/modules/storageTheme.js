export function storageTheme (theme)
{
    if (!['lgbt', 'dark', 'light'].includes(theme))
    {
        throw new Error (`O tema: "${theme}" não é reconhecido`);
    }

    localStorage.setItem('theme', theme);
}