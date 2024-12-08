import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CommendeModule } from './commende/commende.module';
import { ProduitModule } from './produit/produit.module';
import { CommandedetaileModule } from './commandedetaile/commandedetaile.module';
import { CommpanyModule } from './commpany/commpany.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
        //  synchronize: false

        
    }),
  }),
  ConfigModule.forRoot(), UserModule, ClientModule, CommendeModule, ProduitModule, CommandedetaileModule, CommpanyModule],
  controllers: [AppController],
  providers: [AppService],
 
    
    
})
export class AppModule {}
