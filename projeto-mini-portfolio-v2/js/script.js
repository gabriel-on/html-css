function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    // modeSave(toggleMode)
}

// window.onload = getToggleMode

// function modeSave(toggleMode){
//     localStorage.setItem('toggleMode', JSON.stringify(toggleMode))
// }
// function getToggleMode(){
//     const toggleMode = JSON.parse (localStorage.getItem('toggleMode'))
//     light(toggleMode)
// }