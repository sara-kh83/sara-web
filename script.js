function onPageLoad () {
    // find the nav button and refer to it as "button"
    const button = document.querySelector('#menu-button')
    // find the navigation and refer to it as "menu"
    const menu = document.querySelector('#main')
    // add a listener for click on the button and execute function when clicked
    button.addEventListener("click", function() {
        //console.log("clicked!")
        if( menu.classList.contains("open") ) {
            menu.classList.remove("open")
        }
        else {
            menu.classList.add("open")
        }
    })
}
window.addEventListener("load", onPageLoad )
