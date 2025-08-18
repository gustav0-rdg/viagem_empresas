export function CalcularTempoViagem(velocidadeKmH, ... tempoHoras){
    if (velocidadeKmH <= 0){
        return ("velocidade deve ser maior que 0 ")
    }

    const tempoHoras = distanciaKM/velocidadeKmH;
    return tempoHoras;

}