import { Commende } from "src/commende/entities/commende.entity";
import { Produit } from "src/produit/entities/produit.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("commmandedetaile")
export class Commandedetaile {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    quantity:number
    
    @JoinColumn({name:"idProduit"})
    @ManyToOne(()=>Produit,(produitTable:Produit)=>produitTable.commandeDetailList,{cascade:true})
    idProduit:number

    @JoinColumn({name:"commandeId"})
    @ManyToOne(()=>Commende,(commandeTable:Commende)=>commandeTable.commandeDetailList ,{cascade:true})
    commandeId:number

}

