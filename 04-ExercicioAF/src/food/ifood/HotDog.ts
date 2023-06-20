import IFoodGeral from "./interface/IFoodGeral";

export default class HotDog implements IFoodGeral {
    startDelivery(): void {
        this.getCargo();
        console.log("Cachorro Quente: iniciando sua entrega...");
    }
    getCargo(): void {
        console.log("Cachorro Quente: Doguinho embalado!");
    }
}