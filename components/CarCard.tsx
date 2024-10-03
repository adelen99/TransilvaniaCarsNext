import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Car } from "@prisma/client";

function CarCard({ cars }: { cars: Car[] }) {
  return (
    <div className='container mx-auto px-2  md:px-12 '>
      <h1 className='text-2xl font-bold mb-6'>Mașinile noastre</h1>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 '>
        {cars.map((car) => (
          <Card key={car.id} className='overflow-hidden m-2 '>
            <Image
              src={car.image}
              alt={`${car.brand} ${car.name}`}
              width={300}
              height={200}
              className='w-full object-cover'
            />
            <CardContent className='p-4'>
              <h2 className='font-semibold text-xl mb-2'>{car.name}</h2>
              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-sm text-muted-foreground'>
                    An fabricație:
                  </span>
                  <Badge variant='secondary'>{car.year}</Badge>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-sm text-muted-foreground'>Preț</span>
                  <span className='font-bold capitalize'>
                    {car.price.toLocaleString()}
                  </span>
                </div>
              </div>
              <Button className='w-full mt-4'>
                <Link
                  href={`/produse/${car.id}`}
                  className='flex items-center justify-center w-full'>
                  Vezi detalii
                </Link>

                <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CarCard;
