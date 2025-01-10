import { PrismaClient } from "@prisma/client";

// Cria uma instância global do Prisma no ambiente de desenvolvimento para evitar múltiplas conexões
let prisma: PrismaClient;

if (process.env.NODE_ENV === "development") {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
} else {
  prisma = new PrismaClient();
}

export default prisma;
