import db from "@/utils/db";

export const fetchFeaturedCars = async () => {
  const cars = await db.car.findMany({
    where: {
      featured: true,
    },
  });
  return cars;
};
export const fetchAllCars = (search: string) => {
  return db.car.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { brand: { contains: search, mode: "insensitive" } },
      ],
    },
  });
};

export const fetchSingleCar = async (carId: string) => {
  const car = await db.car.findUnique({
    where: {
      id: carId,
    },
  });

  return car;
};
