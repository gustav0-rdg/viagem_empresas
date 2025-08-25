// Criado por gustavo


import CalculadoraCustosViagem from "../calcCustos.js";
import { routes } from '../routesData.js';
import inserirNaTela from '../modules/insertingValues.js'
const form = document.querySelector('.form__container');
const calculadora = new CalculadoraCustosViagem();

// Objeto externo que será preenchido no submit
export const resultadoViagem = {
    litrosNecessarios: 0,
    custoCombustivel: 0,
    tempo: '',
    pedagios: 0,
    precoRestaurantes: 0,
    valorTotal: 0
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    data.consumo = parseFloat(data.consumo);
    data.precoGas = parseFloat(data.precoGas);
    
    if (isNaN(data.consumo) || isNaN(data.precoGas)) {
        console.error("Dados inválidos para consumo ou preço do combustível.");
        return;
    }

    const rotaSelecionada = routes.find(rota =>
        rota.origem === data.origem && rota.destino === data.destino
    );
    console.log(rotaSelecionada);
    if (!rotaSelecionada) {
        console.error("Rota não encontrada!");
        return;
    }

    const litrosNecessarios = rotaSelecionada.distancia / data.consumo;
    const custoCombustivel = calculadora.calcularCombustivel(rotaSelecionada.distancia, data.consumo, data.precoGas);

    // Verifica se o tempo estimado e a velocidade média são válidos
    if (isNaN(rotaSelecionada.tempoEstimado) || rotaSelecionada.tempoEstimado <= 0) {
        console.error("Tempo estimado da rota inválido.");
        return;
    }
    const tempo = calculadora.formatarTempo(rotaSelecionada.distancia, data['velocidade-media']);

    // Verifica valores de pedagios e alimentação
    const pedagios = rotaSelecionada.valorPedagios || 0;
    const precoRestaurantes = rotaSelecionada.custoMedioRefeicao || 0;

    const valorTotal = calculadora.calcularCustoTotal();

    // Preenche o objeto exportado
    resultadoViagem.litrosNecessarios = litrosNecessarios.toFixed(2);
    resultadoViagem.custoCombustivel = custoCombustivel.toFixed(2);
    resultadoViagem.tempo = tempo;
    resultadoViagem.pedagios = pedagios;
    resultadoViagem.precoRestaurantes = precoRestaurantes;
    resultadoViagem.valorTotal = (custoCombustivel + pedagios + precoRestaurantes).toFixed(2);

    inserirNaTela(resultadoViagem);
});