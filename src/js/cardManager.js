class Resultados {

    constructor() {
        this.combustivel = document.querySelector('.resultados__combustivel p');
        this.tempo = document.querySelector('.resultados__tempo-viagem p');
        this.adicionais = document.querySelector('.resultados__custos-adicionais p');
        this.total = document.querySelector('.resultados__custo-total p');
    }

    refresh() {
        this.combustivel.textContent = `Litros necessários: ${dados.litros}<br/>Custo total: R$${dados.custoCombustivel}`;
        this.tempo.textContent = `Tempo estimado: ${dados.tempoFormatado}`;
        this.adicionais.textContent = `Pedágios: R$${dados.custoPedagio} | Alimentação: R$${dados.custoAlimentacao}`;
        this.total.textContent = `Total da viagem: R$${dados.custoTotal}`;
    }

}