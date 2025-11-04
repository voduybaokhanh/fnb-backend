// src/menu/menu.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuItem } from '../entities/menu.entity';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async findAll(@Query('category') category?: string): Promise<MenuItem[]> {
    if (category) {
      return this.menuService.findByCategory(category);
    }
    return this.menuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MenuItem> {
    return this.menuService.findOne(id);
  }

  @Post()
  async create(@Body() menuItemData: Partial<MenuItem>): Promise<MenuItem> {
    return this.menuService.create(menuItemData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() menuItemData: Partial<MenuItem>,
  ): Promise<MenuItem> {
    return this.menuService.update(id, menuItemData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.menuService.remove(id);
  }
}
