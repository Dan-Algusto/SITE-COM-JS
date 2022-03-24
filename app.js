'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() { 
    document.body.classList.toggle('dark-theme')

    var botao = document.body.botao;

    if (botao == "light-theme") {
        this.textContent = "Dark";
        
    }
    else if (botao != "dark-theme") {
        
        this.textContent = "Light"; 
        
}


});