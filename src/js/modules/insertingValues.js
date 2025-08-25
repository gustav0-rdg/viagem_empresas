// Criado por gustavo

import { resultadoViagem } from "./inputValues.js";
import Resultados from "../cardManager.js";

export default function inserirNaTela(){
    const resultados = new Resultados(resultadoViagem);
    resultados.refresh();
}