import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly PrismaService: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return await this.PrismaService.user.findMany();
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.PrismaService.user.findUnique({ where: { id } });
  }

  async createUser(data: User): Promise<User> {
    return await this.PrismaService.user.create({ data });
  }

  async updateUser(id: string, data: User): Promise<User> {
    return await this.PrismaService.user.update({ where: { id }, data });
  }

  async deleteUser(id: string): Promise<User> {
    return await this.PrismaService.user.delete({ where: { id } });
  }
}
