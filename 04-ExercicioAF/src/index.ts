import Client from "./clients/Client";
import IAiqfomeDeliveryFactory from "./factories/IAiqfomeDeliveryFactory";
import IFoodDeliveryFactory from "./factories/IFoodDeliveryFactory";
import IDeliveryFactory from "./factories/interface/IDeliveryFactory";
import Company from "./food/consts/Company";

const currentCompany = Company.IFOOD;
let factory! : IDeliveryFactory;
switch(currentCompany){
    case Company.IFOOD:
        factory = new IFoodDeliveryFactory();
        break;
    case Company.AIQFOME:
        factory = new IAiqfomeDeliveryFactory();
    default :
        console.log("Companhia nao definida!");
}

const client = new Client(factory);
client.startDelivery();
