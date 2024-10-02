import SingleCarCard from "@/components/SingleCarCard";
import { fetchSingleCar } from "@/utils/actions";
import { CarPageProps } from "@/utils/types";
import React from "react";
import { redirect } from "next/navigation";
async function SingleCarPage({ params }: CarPageProps) {
  const carId = params.id;
  const car = await fetchSingleCar(carId);

  if (!car) {
    return redirect("/produse");
  }

  return (
    <div>
      <SingleCarCard car={car} />
    </div>
  );
}

export default SingleCarPage;
