//Ass: Sandro
import IConsole from "../platforms/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play {
    constructor (console: IConsole) {
        super(console);
    }

    challenge(): void {
        console.log("Desafio ativado - Modo Hard!");
    }
}