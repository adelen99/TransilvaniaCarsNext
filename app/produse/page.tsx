import CarsContainer from "@/components/CarsContainer";
import { fetchAllCars } from "@/utils/actions";
import { Car } from "@prisma/client";

async function ProductPage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const search = searchParams.search || "";
  const cars: Car[] = await fetchAllCars(search);
  return (
    <div>
      <CarsContainer cars={cars} search={search} />
    </div>
  );
}

export default ProductPage;
