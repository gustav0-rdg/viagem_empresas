class Percurso
{

    constructor ({

        origem,
        destino,

        distancia,

        pedagios,
        valorPedagios,

        restaurantes,
        custoMedioRefeicao,

        tempoEstimado,

        pontosTuristicos

    })

    {

        this.origem = origem;
        this.destino = destino;

        this.distanciaKm = parseFloat(distancia);

        this.pedagios = parseInt(pedagios);
        this.valorPedagios = parseFloat(valorPedagios);

        this.restaurantes = parseInt(restaurantes);
        this.custoMedioRefeicao = parseFloat(custoMedioRefeicao);

        this.tempoEstimado = parseFloat(tempoEstimado);

        this.pontosTuristicos = pontosTuristicos;

        if
        (

            this.origem?.length <= 0 ||
            this.destino?.length <= 0 ||

            isNaN(this.distanciaKm) ||

            isNaN(this.pedagios) ||
            isNaN(this.valorPedagios) ||

            isNaN(this.restaurantes) ||
            isNaN(this.custoMedioRefeicao) ||

            isNaN(this.tempoEstimado) ||

            !Array.isArray(this.pontosTuristicos)

        )

        {
            throw new Error ('ERRO');
        }

    }

    valorTotalPedagios ()
    {
        return this.valorPedagios * this.pedagios;
    }

}