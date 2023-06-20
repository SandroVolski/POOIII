import IDrinkGeral from "../../food/idrink/interface/IDrinkGeral";
import IFoodGeral from "../../food/ifood/interface/IFoodGeral";

export default interface IDeliveryFactory {
    createDeliveryDrink(): IDrinkGeral;
    createDeliveryFood(): IFoodGeral;
}