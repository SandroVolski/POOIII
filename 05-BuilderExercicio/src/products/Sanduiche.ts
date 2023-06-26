import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SanduicheType from "../ingredients/SanduicheType";
import Sauces from "../ingredients/Sauces";

export default class Sanduiche {

    private _sanduicheType : SanduicheType;
    private _bread : Bread;
    private _protein : Protein;
    private _salad : Salad;
    private _sauces : Sauces[] = [];

    /**
     * Getter sanduicheType
     * @return {SanduicheType}
     */
	public get sanduicheType(): SanduicheType {
		return this._sanduicheType;
	}

    /**
     * Getter bread
     * @return {Bread}
     */
	public get bread(): Bread {
		return this._bread;
	}

    /**
     * Getter protein
     * @return {Protein}
     */
	public get protein(): Protein {
		return this._protein;
	}

    /**
     * Getter salad
     * @return {Salad}
     */
	public get salad(): Salad  {
		return this._salad;
	}

    /**
     * Getter sauces
     * @return {Sauces[] }
     */
	public get sauces(): Sauces[]  {
		return this._sauces;
	}

    /**
     * Setter sanduicheType
     * @param {SanduicheType} value
     */
	public set sanduicheType(value: SanduicheType) {
		this._sanduicheType = value;
	}

    /**
     * Setter bread
     * @param {Bread} value
     */
	public set bread(value: Bread) {
		this._bread = value;
	}

    /**
     * Setter protein
     * @param {Protein} value
     */
	public set protein(value: Protein) {
		this._protein = value;
	}

    /**
     * Setter salad
     * @param {Salad} value
     */
	public set salad(value: Salad) {
		this._salad = value;
	}
    
    public addSauces(sauces : Sauces) {
        this._sauces.push(sauces);
    }

    /**
     * Setter sauces
     * @param {Sauces[] } value
     */
	public set sauces(value: Sauces[] ) {
		this._sauces = value;
	}
}