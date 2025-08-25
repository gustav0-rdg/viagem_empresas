// Criado por Zenon

export default class CalculadoraCustosViagem {
    constructor() {
        this.litrosNecessarios = 0;
        this.custoCombustivel = 0;
        this.tempoViagem = "";
        this.pedagios = 0;
        this.alimentacao = 0;
        this.custoTotal = 0;
    }

    calcularCombustivel(distanciaKm, consumoKmLitro, precoLitro) {
        this.litrosNecessarios = distanciaKm / consumoKmLitro;
        this.custoCombustivel = this.litrosNecessarios * precoLitro;
        return this.custoCombustivel;
    }

    formatarTempo(distanciaKm, velocidadeMedia) {
        const tempoDecimal = distanciaKm/velocidadeMedia;
        const horas = Math.floor(tempoDecimal);
        const minutos = Math.round((tempoDecimal - horas) * 60);
        this.tempoViagem = `${horas}h ${minutos.toString().padStart(2, '0')}min`;
        return this.tempoViagem;
    }

    definirCustosAdicionais(pedagios = 0, alimentacao = 0) {
        this.pedagios = pedagios;
        this.alimentacao = alimentacao;
    }

    calcularCustoTotal() {
        this.custoTotal = this.custoCombustivel + this.pedagios + this.alimentacao;
        return this.custoTotal ;
    }
}
