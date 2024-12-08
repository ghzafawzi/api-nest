import { User } from "src/user/entities/user.entity";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Commpany")
export class Commpany {
    @PrimaryGeneratedColumn()
    id:number
    @JoinColumn({name:'idUser'})
    @OneToOne(()=>User,(userTable:User)=>userTable.idCompany,{cascade:true})
    userId:number
    
}
