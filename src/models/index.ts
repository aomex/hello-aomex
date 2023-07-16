import { PrismaClient } from '@prisma/client';
import { combineModels } from '@aomex/prisma-model';
import { UserModel } from './user.model';

const db = new PrismaClient({
  log: ['query'],
});

export const models = combineModels(db, {
  user: UserModel,
});
