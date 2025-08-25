// Criado por Zenon

export default class Resultados {
    constructor(dados) {
        this.dados = dados;  // Armazena os dados passados como parâmetro
        this.combustivel = document.querySelector('.resultados__combustivel p');
        this.tempo = document.querySelector('.resultados__tempo-viagem p');
        this.adicionais = document.querySelector('.resultados__custos-adicionais p');
        this.total = document.querySelector('.resultados__custo-total p');
    }

    refresh() {
        // Acessa os dados da instância e os insere no conteúdo HTML
        this.combustivel.innerHTML = `Litros necessários: ${this.dados.litrosNecessarios}<br/>Custo total: R$${this.dados.custoCombustivel}`;
        this.tempo.textContent = `Tempo estimado: ${this.dados.tempo}`;
        this.adicionais.textContent = `Pedágios: R$${this.dados.pedagios} | Alimentação: R$${this.dados.precoRestaurantes}`;
        this.total.textContent = `Total da viagem: R$${this.dados.valorTotal}`;
    }
}