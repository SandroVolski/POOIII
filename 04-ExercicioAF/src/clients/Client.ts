import IDeliveryFactory from "../factories/interface/IDeliveryFactory";
import IDrinkGeral from "../food/idrink/interface/IDrinkGeral";
import IFoodGeral from "../food/ifood/interface/IFoodGeral";

export default class Client {
    private food: IFoodGeral;
    private drink: IDrinkGeral;

    constructor (factory : IDeliveryFactory) {
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery () {
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}