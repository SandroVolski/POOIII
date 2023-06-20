import IFoodGeral from "./interface/IFoodGeral";

export default class Hamburguer implements IFoodGeral {
    startDelivery(): void {
        this.getCargo();
        console.log("Hamburguer: iniciando sua entrega...");
    }
    getCargo(): void {
        console.log("Hamburguer: Embalando seu sanduiche!");
    }
}