document.addEventListener('DOMContentLoaded',function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons [i] = addEventListener('click', function(botao) {
            const abaAlvo =botao.target.dataset.tabButton;
            const aba = docoument.querySelector('[data-tab-id=${abaAlvo}]');
            esconderTodasAbas();
            aba.classList.add('shows__list--is-ative');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tab__button--is-ative');   
        });
        
    }
})
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tab__button--is-ative');
    }
    
}


    
