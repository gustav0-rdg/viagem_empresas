export default class CalculadoraCustosViagem {
    constructor() {
        this.litrosNecessarios = 0;
        this.custoCombustivel = 0;
        this.tempoViagem = 0;
        this.pedagios = 0;
        this.alimentacao = 0;
    }

    calcularCombustivel(litros, precoPorLitro) {
        this.litrosNecessarios = litros;
        this.custoCombustivel = litros * precoPorLitro;
        return this.custoCombustivel;
    }

    formatarTempo(tempoDecimal) {
        const horas = Math.floor(tempoDecimal);
        const minutos = Math.round((tempoDecimal - horas) * 60);
        this.tempoViagem = `${horas}h ${minutos}min`;
        return this.tempoViagem;
    }

    definirCustosAdicionais(pedagios = 0, alimentacao = 0) {
        this.pedagios = pedagios;
        this.alimentacao = alimentacao;
    }

    calcularCustoTotal() {
        return this.custoCombustivel + this.pedagios + this.alimentacao;
    }
}
