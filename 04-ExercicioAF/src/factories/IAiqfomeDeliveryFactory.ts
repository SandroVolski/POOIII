import Beer from "../food/idrink/Beer";
import IDrinkGeral from "../food/idrink/interface/IDrinkGeral";
import Hamburguer from "../food/ifood/Hamburguer";
import IFoodGeral from "../food/ifood/interface/IFoodGeral";
import IDeliveryFactory from "./interface/IDeliveryFactory";


export default class IAiqfomeDeliveryFactory implements IDeliveryFactory {
    createDeliveryDrink(): IDrinkGeral {
        console.log("Entrega via AiqFome");
        return new Beer(); 
    }
    createDeliveryFood() : IFoodGeral {
        console.log("Entrega via AiqFome");
        return new Hamburguer();
    }
}