import Token from "../utils/Token";
import ITransportadoraCorreios from "./ITransportadoraCorreios";

export default class Transportadora implements ITransportadoraCorreios {
    private token : Token;
    
    authToken(): Token {
        return new Token();
    }
    send(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando entrega da Transportadora");
    }
    receive(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Recebendo entrega da Transportadora");
    }

}