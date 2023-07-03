import Token from "../utils/Token";
import ICorreiosCorreios from "./ICorreiosCorreios";

export default class Correios implements ICorreiosCorreios {
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando sua entrega via Correios");
    }
    receiveCorreios(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Recebendo entrega via Correios");
    }
}