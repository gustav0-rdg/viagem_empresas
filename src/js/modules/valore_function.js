// feito por matheus fagnani

//function para mostrara valor da function que obteve o valor do html  

export function valoresDaViagem(){
// valores obtidos do html

constdistanciaKm = document.getElementById('distancia').value;
const consumoKmPorLitro = document.getElementById('consumo').value;
const precoCombustivel = document.getElementById('preco').value;
const velocidadeMedia = document.getElementById('velocidade').value;
const pedagios = document.getElementById('pedagios').value;
const alimentacao = document.getElementById('alimentacao').value;
const hospedagem = document.getElementById('hospedagem').value;
const outrosCustos = document.getElementById('outros').value;
const custoTotal = document.getElementById('total').value;

// retorna os valores obtidos do html
return{
    distanciaKm,
    consumoKmPorLitro,
    precoCombustivel,
    velocidadeMedia,
    pedagios,
    alimentacao,
    hospedagem,
    outrosCustos,
    custoTotal

}
}