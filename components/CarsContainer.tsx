import CarCard from "./CarCard";
import { Car } from "@prisma/client";

async function CarsContainer({ cars }: { cars: Car[]; search: string }) {
  const totalCars = cars.length;
  return (
    <div>
      {totalCars === 0 ? (
        <h5>Ne pare rau , nu au fost gasite masini bazate pe cautarea ta...</h5>
      ) : (
        <CarCard cars={cars} />
      )}
    </div>
  );
}

export default CarsContainer;
