import ICorreiosCorreios from "../correios/ICorreiosCorreios";
import Transportadora from "../transportadora/Transportadora";
import Token from "../utils/Token";

export default class TransportadoraAdapter implements ICorreiosCorreios {
    private token : Token;

    constructor(private transportadora : Transportadora) {
        console.log("Adaptando Transportadora nos Correios");
    }

    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        return this.transportadora.send();
    }
    receiveCorreios(): void {
        return this.transportadora.receive();
    }
}