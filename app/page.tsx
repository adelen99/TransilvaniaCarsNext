import FeaturedCarsCard from "@/components/FeaturedCarsCarousel";
import { HeroCarousel } from "@/components/HeroCarousel";
import HeroDescription from "@/components/HeroDescription";
import Services from "@/components/Services";

import RentalConditions from "@/components/RentalConditions";
function HomePage() {
  return (
    <>
      <main className='mb-8 grid lg:grid-cols-2 items-center'>
        <div>
          <HeroDescription />
        </div>
        <div className=''>
          <HeroCarousel />
        </div>
      </main>

      <Services />

      <RentalConditions />
      <div className='px-4'>
        <FeaturedCarsCard />
      </div>
    </>
  );
}
export default HomePage;
