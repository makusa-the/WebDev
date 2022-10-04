const panels = document.querySelectorAll('.panel')
/* const mediaQuery = window.matchMedia('(max-width:480px)') */

panels.forEach((panel)=>{
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        /*if (mediaQuery.matches){

        }*/
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}