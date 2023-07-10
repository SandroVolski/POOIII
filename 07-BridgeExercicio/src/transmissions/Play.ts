//Ass: Sandro
import IConsole from "../platforms/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay {
    
    constructor (private console: IConsole) {

    }
    
    playing() {
        console.log("Iniciando o Jogo!")
    }
    result() {
        console.log("***************** Rodando *******************");
    }

}