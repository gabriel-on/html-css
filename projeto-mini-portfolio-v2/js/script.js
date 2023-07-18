function toggleMode(){
    if(localStorage.mode !== toggleMode){

        const html = document.documentElement
        html.classList.toggle('light')

        html.addEventListener('click', (e) => {
            console.log(e)
            localStorage.mode = toggleMode
        })

    }
}
// localStorage.toggleMode = document.querySelector('toggleMode').value
// document.querySelector('toggleMode').value = localStorage.toggleMode
// function switch(){
// }

// window.onload = getToggleMode

// function modeSave(toggleMode){
//     localStorage.setItem('toggleMode', JSON.stringify(toggleMode))
// }
// function getToggleMode(){
//     const toggleMode = JSON.parse (localStorage.getItem('toggleMode'))
//     light(toggleMode)
// }