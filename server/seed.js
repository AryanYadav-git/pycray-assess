const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

const finance = async () => {
  try {
    await prisma.finance.create({
      data: {
        ownerName: "Owner Name",
        propertyName: "Greenview Appartment",
        income: 25000,
        expenses: 15000,
        netProfit: 10000,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

const property = async () => {
  try {
    await prisma.property.create({
      data: {
        ownerName: "Owner Name",
        propertyName: "Greenview Appartment",
        totalUnits: 60,
        filledUnits: 45,
        vacantUnits: 15,
        occupancyRate: "75%",
        lastMaintenanceDate: "2024-09-11",
      },
    });
  } catch (e) {
    console.log(e);
  }
};

property();
