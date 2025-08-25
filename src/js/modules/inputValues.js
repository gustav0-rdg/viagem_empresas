import CalculadoraCustosViagem from "../calcCustos.js";
import { routes } from '../routesData.js';

const form = document.querySelector('.form__container');
const calculadora = new CalculadoraCustosViagem();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    // Converte FormData para objeto
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Converte strings para números onde necessário
    data.consumo = parseFloat(data.consumo);
    data.precoGas = parseFloat(data.precoGas);

    // Encontra a rota correta
    const rotaSelecionada = routes.find(rota => 
        rota.origem === data.origem && rota.destino === data.destino
    );

    if (!rotaSelecionada) {
        console.error("Rota não encontrada!");
        return;
    };

    // Calcula combustível
    const litrosNecessarios = rotaSelecionada.distancia / data.consumo;
    const custoCombustivel = calculadora.calcularCombustivel(litrosNecessarios, data.precoGas);

    // Define custos adicionais (pedágios e alimentação)
    calculadora.definirCustosAdicionais(rotaSelecionada.valorPedagios, rotaSelecionada.custoMedioRefeicao);

    // Calcula o custo total da viagem
    const valorTotal = calculadora.calcularCustoTotal();

    returnValues(litrosNecessarios.toFixed(2), custoCombustivel.toFixed(2), calculadora.formatarTempo(rotaSelecionada.tempoEstimado),rotaSelecionada.valorPedagios,rotaSelecionada.custoMedioRefeicao,valorTotal.toFixed(2))

});

export default function returnValues(litrosNecessarios,custoCombustivel, tempo, pedagios, precoRestaurantes, valorTotal){
    const valores = {
        litrosNecessarios: litrosNecessarios,
        custoCombustivel: custoCombustivel,
        tempo: tempo,
        pedagios: pedagios,
        precoRestaurantes: precoRestaurantes,
        valorTotal: valorTotal
    };
    console.log(valores);
    return valores
}