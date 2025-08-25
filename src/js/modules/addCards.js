const itens = document.querySelectorAll('.rotas__value');

export const updateUi = (data) =>{
    itens.forEach(item =>{
        const valor = item.getAttribute('data-value');
        console.log(valor);
        item.textContent = data[valor];
    })
}