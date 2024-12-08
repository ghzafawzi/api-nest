import { Client } from 'src/client/entities/client.entity';
import { Commpany } from 'src/commpany/entities/commpany.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
@Entity("user")
export class User {


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
@Column("text",{name:'tocken',nullable:true})
tocken:string
@OneToMany(()=> Client,(clientTable:Client)=>clientTable.iduser,{cascade:true})
clientList:Client[]
@OneToOne(()=>Commpany,(companyTable:Commpany)=>companyTable.userId)
idCompany:number


}
