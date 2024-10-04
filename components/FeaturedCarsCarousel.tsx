import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { fetchFeaturedCars } from "@/utils/actions";
import Link from "next/link";

export default async function FeaturedCarsCard() {
  const cars = await fetchFeaturedCars();

  return (
    <Card className='w-full mx-auto'>
      <CardHeader>
        <CardTitle className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
          Recomandările Noastre
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {cars.map((car) => (
            <Card key={car.id} className='overflow-hidden'>
              <Image
                src={car.image}
                alt={car.name}
                width={500}
                height={400}
                className='w-full object-cover'
              />
              <CardContent className='p-4'>
                <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                  {car.name}
                </h3>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-primary font-bold capitalize'>
                    {car.price}
                  </span>
                  <Badge className='capitalize'>{car.brand}</Badge>
                </div>
                {/* Add transmission info here */}
                <p className='capitalize text-sm text-muted-foreground mb-4'>
                  Transmisie: {car.transmission}
                </p>
                <Button className='max-w-xs'>
                  <Link href={`/produse/${car.id}`}>Vezi detalii</Link>

                  <ChevronRight className='ml-2 h-4 w-4' />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
