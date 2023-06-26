import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SanduicheType from "../ingredients/SanduicheType";
import Sauces from "../ingredients/Sauces";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche();

    reset(): void{
        this.sanduiche = new Sanduiche;
    }
    getSanduiche(): Sanduiche {
        const result: Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.sanduicheType = value;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad;
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }
    addSauces(sauces: Sauces) {
        this.sanduiche.addSauces(sauces);
    }
}