class Percurso
{

    constructor (distanciaKm)
    {

        this.distanciaKm = parseFloat(distanciaKm);

        if (

            isNaN(this.distanciaKm)

        )

        {
            throw new Error ('O parâmetro "distanciaKm" deve ser INT/FLOAT.');
        }

    }

}