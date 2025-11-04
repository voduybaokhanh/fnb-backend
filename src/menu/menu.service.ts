// src/menu/menu.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuItem } from '../entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuItem)
    private menuItemRepository: Repository<MenuItem>,
  ) {}

  async findAll(): Promise<MenuItem[]> {
    return this.menuItemRepository.find();
  }

  async findOne(id: string): Promise<MenuItem> {
    return this.menuItemRepository.findOne({ where: { id } });
  }

  async create(menuItemData: Partial<MenuItem>): Promise<MenuItem> {
    const menuItem = this.menuItemRepository.create(menuItemData);
    return this.menuItemRepository.save(menuItem);
  }

  async update(id: string, menuItemData: Partial<MenuItem>): Promise<MenuItem> {
    await this.menuItemRepository.update(id, menuItemData);
    return this.menuItemRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.menuItemRepository.delete(id);
  }

  async findByCategory(category: string): Promise<MenuItem[]> {
    return this.menuItemRepository.find({ where: { category } });
  }
}
