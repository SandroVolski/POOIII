import IDrinkGeral from "./interface/IDrinkGeral";

export default class Beer implements IDrinkGeral {
    startDelivery(): void {
        this.getCargo();
        console.log("Cerveja: iniciando sua entrega...");
    }

    getCargo() : void {
        console.log("Cerveja: Embalada!");
    }
}