import { Commandedetaile } from "src/commandedetaile/entities/commandedetaile.entity";
import { Commende } from "src/commende/entities/commende.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Produit")
export class Produit {
    
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    TitleDescript:string
    @Column()
    PrixHT:number
    @Column()
    Tva:number
    @Column()
    Ttc:number
    @Column()
    Quantity:number
    @Column()
    type:string
    @Column()
    createAt:Date
    @Column()
    updateAt:Date
    @Column()
    createBy:number
    @Column()
    updateBy:number
    @Column()
    Active:boolean
    @Column( {nullable:true})
    image:string
  
    @BeforeInsert()
    createDate(){
        this.createAt= new Date()

    }
    @BeforeUpdate()
    
        UpdateDate()
        {
            this.updateAt= new Date()
        } 
    

    




    @JoinTable({name:'ProduitCommande'})// generate table de join automatique
    @ManyToMany(()=>Commende,(commandeTable:Commende)=>commandeTable.produitList,{cascade:true})
    commandeList:Commende[]


    @OneToMany(()=>Commandedetaile,(CommandedetaileTable:Commandedetaile)=>CommandedetaileTable.commandeId)
    commandeDetailList:Commandedetaile[]
}
