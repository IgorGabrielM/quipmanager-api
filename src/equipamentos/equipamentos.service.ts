import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EquipamentosService {
  constructor(private prisma: PrismaService) {}

  async criar(data: Prisma.EquipamentoCreateInput) {
    return this.prisma.equipamento.create({ data });
  }

  async listarTodos() {
    return this.prisma.equipamento.findMany();
  }

  async buscarPorId(id: number) {
    return this.prisma.equipamento.findUnique({ where: { id } });
  }

  async atualizar(id: number, data: Prisma.EquipamentoUpdateInput) {
    return this.prisma.equipamento.update({ where: { id }, data });
  }

  async remover(id: number) {
    return this.prisma.equipamento.delete({ where: { id } });
  }
}
