// Criado por gustavo

import { routes } from "../routesData.js";

const valoresAdicionados = new Set();

const rotasSelect = document.querySelector('.rotas__origem');

/**
 * @requires - Objeto com as rotas
 */

routes.forEach(rota =>{
    const rotaAtual = document.createElement('option');
    if(!valoresAdicionados.has(rota.origem)){
        rotaAtual.textContent = rota.origem;

        rotasSelect.appendChild(rotaAtual);
        valoresAdicionados.add(rota.origem);
        return
    }
    
})


const destinos = document.querySelector('.rotas__destino');
rotasSelect.addEventListener('change', (e)=>{
    const valorAtual = e.target.value;
    destinos.innerHTML = '';

    routes.forEach(rota =>{
        if (rota.origem == valorAtual){
            const destinoAtual = document.createElement('option');
            destinoAtual.textContent = rota.destino;
            destinos.appendChild(destinoAtual);
            return
        }
    })
})