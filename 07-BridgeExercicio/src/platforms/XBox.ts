//Ass: Sandro
import IConsole from "./IConsole";

export default class XBox implements IConsole {
    
    constructor () {
        console.log("XBox: Configurando o console!");
        this.configureGame();
    }
    
    configureGame(): void {
        this.authToken();
        console.log("XBox: Configuracoes do jogo em andamento!");
    }
    authToken(): void {
        console.log("XBox: Autorizando o console!");
    }


}