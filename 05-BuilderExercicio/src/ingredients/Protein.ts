export default class Protein{
    
    constructor(private _meet : number){}
    
    get meet() : number{
        return this._meet;
    }
    set meet(meet : number){
        this._meet = meet;
    }
}