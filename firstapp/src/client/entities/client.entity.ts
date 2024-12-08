import { Commende } from "src/commende/entities/commende.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('client')
export class Client {
    @PrimaryGeneratedColumn()
id:number
@Column("text",{name:'username',unique:true,nullable:true})
username:string
@Column("text",{name:'email',nullable:true})
email:string
@Column("text",{name:'firstname',nullable:true})
firstname:string
@Column("text",{name:'lastname',nullable:true})
lastname:string
@Column("text",{name:'password',nullable:true})
password:string
@Column("text",{name:'ville',nullable:true})
ville:string
@JoinColumn({name:"idUser"})
@ManyToOne(()=>User,(user:User)=>user.clientList)
iduser:number
@OneToMany(()=> Commende,(commandeTable:Commende)=>commandeTable.idClient,{cascade:true})
commandeList:Commende[]

}

  
            
       
   
 