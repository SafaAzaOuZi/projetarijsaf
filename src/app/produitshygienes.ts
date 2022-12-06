import { Commentaire } from "./commentaire";
export class Produitshygienes {
    constructor(
       public id:number,
    public nom:string,
    public photo:string,
    public prix:number,
    public nouveau:boolean,
    public dateCreation:Date,
    public categorie:string,
    public typeProduit:string,
    public marque:string,
    public comment:Commentaire[],
    ){}
    
}

