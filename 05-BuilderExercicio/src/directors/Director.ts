import IBuilder from "../builders/IBuilder";
import Bread from "../ingredients/Bread";
import Salad from "../ingredients/Salad";
import SanduicheType from "../ingredients/SanduicheType";
import Sauces from "../ingredients/Sauces";

export default class Director{
    constructor(private builder : IBuilder){}

    construcXSalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setProtein(1);
        this.builder.setBread(new Bread ("Pão Francês"));
        this.builder.addSauces(new Sauces("Ketchup"));
        this.builder.addSauces(new Sauces("Mostarda"));
        this.builder.addSauces(new Sauces("Maionese"));
        this.builder.addSauces(new Sauces("Supreme"));
        this.builder.setSalad(Salad.COMPLETE);
    }

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setProtein(2);
        this.builder.setBread(new Bread("Pão de Leite"));
        this.builder.addSauces(new Sauces("Ketchup"));
        this.builder.addSauces(new Sauces("Maionese"));
        this.builder.setSalad(Salad.TOMATE);
    }
}