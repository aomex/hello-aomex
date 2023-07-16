import { BaseUserModel } from '@aomex/prisma-model';
import { user } from '@prisma/client';

export class UserModel extends BaseUserModel {
  findAll() {
    return this.table.findMany({
      select: {
        id: true,
      },
    });
  }

  findById(id: number) {
    return this.table.findUnique({
      where: {
        id,
      },
    });
  }

  createUser(data: Omit<user, 'id'>) {
    return this.table.create({
      data,
    });
  }
}
