import SoftDrink from "../food/idrink/SoftDrink";
import IDrinkGeral from "../food/idrink/interface/IDrinkGeral";
import HotDog from "../food/ifood/HotDog";
import IFoodGeral from "../food/ifood/interface/IFoodGeral";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class IFoodDeliveryFactory implements IDeliveryFactory {
    createDeliveryDrink(): IDrinkGeral {
        console.log("Entrega pelo IFood");
        return new SoftDrink(); 
    }
    createDeliveryFood() : IFoodGeral {
        console.log("Entrega pelo IFood");
        return new HotDog();
    }
}