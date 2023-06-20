import IDrinkGeral from "./interface/IDrinkGeral";

export default class SoftDrink implements IDrinkGeral {
    startDelivery(): void {
        this.getCargo();
        console.log("Refrigerante: iniciando sua entrega...");
    }

    getCargo() : void {
        console.log("Refrigerante: Embalada!");
    }
}