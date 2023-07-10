//Ass: Sandro
import IConsole from "./IConsole";

export default class PlayStation implements IConsole {
    
    constructor () {
        console.log("PlayStation: Configurando o console!");
        this.configureGame();
    }
    
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configuracoes do jogo em andamento!");
    }
    authToken(): void {
        console.log("PlayStation: Autorizando o console!");
    }


}