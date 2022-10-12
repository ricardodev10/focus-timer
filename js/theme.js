export function Theme({
    buttonDarkTheme,
    buttonLightTheme,
    body
}) {
    
    function toggleTheme() {
        buttonDarkTheme.classList.toggle('hide')
        buttonLightTheme.classList.toggle('hide')
    }
    
    function toggleBodyClass() {
      body.classList.toggle("light")
    }

    return {
        toggleTheme,
        toggleBodyClass
    }
}