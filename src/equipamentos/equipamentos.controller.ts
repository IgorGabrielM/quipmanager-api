import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { EquipamentosService } from './equipamentos.service';

@Controller('equipamentos')
export class EquipamentosController {
  constructor(private readonly equipamentosService: EquipamentosService) {}

  @Post()
  criar(@Body() data: any) {
    return this.equipamentosService.criar(data);
  }

  @Get()
  listar() {
    return this.equipamentosService.listarTodos();
  }

  @Get(':id')
  buscar(@Param('id', ParseIntPipe) id: number) {
    return this.equipamentosService.buscarPorId(id);
  }

  @Patch(':id')
  atualizar(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.equipamentosService.atualizar(id, data);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.equipamentosService.remover(id);
  }
}
