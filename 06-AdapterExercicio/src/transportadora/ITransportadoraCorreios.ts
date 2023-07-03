import Token from "../utils/Token";

export default interface ITransportadoraCorreios {
    authToken() : Token;
    send() : void;
    receive() : void;
}