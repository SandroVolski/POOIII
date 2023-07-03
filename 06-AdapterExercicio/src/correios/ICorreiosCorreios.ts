import Token from "../utils/Token";

export default interface ICorreiosCorreios {
    authToken() : Token;
    sendCorreios() : void;
    receiveCorreios() : void;
}