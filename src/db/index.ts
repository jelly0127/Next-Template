import { PrismaClient } from '@prisma/client';

// 创建 PrismaClient 实例
const db = new PrismaClient();

// 导出 PrismaClient 实例
export default db;
