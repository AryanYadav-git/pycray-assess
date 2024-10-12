const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.finance.createMany({
      data: {
        ownerName: "Owner Name",
        propertyName: "Greenview Appartment",
        income: 25000,
        expenses: 15000,
        netProfit: 10000,
      },
    });
  } catch (e) {}
};
