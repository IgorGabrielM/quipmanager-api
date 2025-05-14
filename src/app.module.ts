import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EquipamentosModule } from './equipamentos/equipamentos.module';

@Module({
  imports: [PrismaModule, EquipamentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
