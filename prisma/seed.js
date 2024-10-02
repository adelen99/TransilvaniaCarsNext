const { PrismaClient } = require("@prisma/client");
const cars = require("./cars.json");
const prisma = new PrismaClient();

async function main() {
  for (const car of cars) {
    await prisma.car.create({
      data: car,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
