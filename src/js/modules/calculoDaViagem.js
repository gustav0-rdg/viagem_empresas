export function calcularViagem({
  distanciaKm,
  consumoKmPorLitro,
  precoCombustivel,
  velocidadeMedia,
  pedagios = 0,
  alimentacao = 0,
  hospedagem = 0,
  outrosCustos = 0
}){

    // calculo da distancia por litros
    const litrosNescessario = distanciaKm/consumoKmPorLitro

    // preco com bustivel 
    const precoCombustivel = distanciaKm *precoCombustivel

    // tempo da viagem 
    const tempoViagemHora = distanciaKm / velocidadeMedia;

    // custo adicionais 
     const custosAdicionais = pedagios + alimentacao + hospedagem + outrosCustos;
    
    // custo total 
    const custoTotal = custoCombustivel + custosAdicionais;


    return{
    litrosNecessarios: litrosNecessarios.toFixed(2),
    custoCombustivel: custoCombustivel.toFixed(2),
    tempoViagemHoras: tempoViagemHoras.toFixed(2),
    custosAdicionais: custosAdicionais.toFixed(2),
    custoTotal: custoTotal.toFixed(2)
    };



};


const resultado = calcularViagem({
    distanciaKm:"",
    consumoKmPorLitro: "",
    precoCombustivel: "",
    velocidadeMedia: "",
    pedagios: "",
    alimentacao: "",
    hospedagem:"",
    outrosCustos:""
    });

console.log('resultado da viagem', resultado)