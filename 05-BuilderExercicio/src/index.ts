import SanduicheBuilder from "./builders/SanduicheBuilder";
import Sanduiche from "./products/Sanduiche";
import Director from "./directors/Director";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.construcXSalada();
const xsalada : Sanduiche = builder.getSanduiche();
console.log("================================================================");
console.log("Comecando o preparo: " + xsalada.sanduicheType);
console.log("Pão: " + xsalada.bread.type);
console.log("Proteina: " + xsalada.protein);
console.log("Salada: " + xsalada.salad);
for (const i in xsalada.sauces){
    console.log("Molhos: " + xsalada.sauces[i].flavor);
}
console.log("================================================================");

director.constructHotDog();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("================================================================");
console.log("Comecando o preparo: " + hotdog.sanduicheType);
console.log("Pão: " + hotdog.bread.type);
console.log("Proteina: " + hotdog.protein);
console.log("Salada: " + hotdog.salad);
for (const i in hotdog.sauces){
    console.log("Molhos: " + hotdog.sauces[i].flavor);
}
console.log("================================================================");