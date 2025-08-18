class Carro
{

    constructor (consumoPorKm, velocidadeMedia)
    {

        this.consumoPorKm    = parseFloat(consumoPorKm);
        this.velocidadeMedia = parseFloat(velocidadeMedia);

        if (

            isNaN(this.consumoPorKm) ||
            isNaN(this.velocidadeMedia)

        )

        {
            throw new Error ('Os parâmetros "consumoPorKm" e "velocidadeMedia" devem ser INT/FLOAT e INT/FLOAT respectivamente.');
        }

    }

    litrosGastos (distanciaKm)
    {

        distanciaKm = parseFloat(distanciaKm);

        if (isNaN(distanciaKm))
        {
            throw new Error('O parâmetro "distanciaKm" deve ser INT/FLOAT.');
        }

        return distanciaKm / this.consumoPorKm;

    }

    horasEstimadas (distanciaKm)
    {

        distanciaKm = parseFloat(distanciaKm)
        
        if (isNaN(distanciaKm))
        {
            throw new Error('O parâmetro "distanciaKm" deve ser INT/FLOAT');
        }

        return distanciaKm / this.velocidadeMedia;

    }

}