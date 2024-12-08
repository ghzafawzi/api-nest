import { Client } from "src/client/entities/client.entity";
import { Commandedetaile } from "src/commandedetaile/entities/commandedetaile.entity";
import { Produit } from "src/produit/entities/produit.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("commande")
export class Commende {

 @PrimaryGeneratedColumn()
id:number
@Column()
title:string
@Column()
description:string
@Column()
montantT:number

@ManyToOne(()=> Client,(clientTable:Client)=>clientTable.commandeList)
idClient:number

@ManyToMany(()=>Produit,(produitTable:Produit)=>produitTable.commandeList)
produitList:Produit[]

@OneToMany(()=>Commandedetaile,(CommandedetaileTable:Commandedetaile)=>CommandedetaileTable.commandeId)
commandeDetailList:Commandedetaile[]

}
