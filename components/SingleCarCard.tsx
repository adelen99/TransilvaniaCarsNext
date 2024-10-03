import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Car } from "@prisma/client";
import { FiArrowLeft } from "react-icons/fi"; // Importăm icon-ul din react-icons

type SingleCarCardProps = {
  car: Car;
};

function SingleCarCard({ car }: SingleCarCardProps) {
  return (
    <div className='relative container mx-auto px-4'>
      <div className=' grid justify-start  gap-4 mb-4 '>
        <Link href='/produse'>
          <Button
            variant='default'
            className='flex items-center gap-2 font-semibold text-md md:text-lg'>
            <FiArrowLeft className='w-4 h-4 md:w-6 md:h-6' />
            <span>Înapoi la lista de mașini</span>
          </Button>
        </Link>
      </div>

      {/* Cardul mașinii */}
      <Card className='max-w-2xl mx-auto shadow-lg'>
        {/* Imaginea mașinii */}
        <Image
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          width={600}
          height={400}
          className='w-full h-auto md:object-cover rounded-xl'
        />
        {/* Header-ul Cardului */}
        <CardHeader>
          <CardTitle className='scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0'>
            {car.name}
          </CardTitle>
        </CardHeader>

        {/* Conținutul Cardului */}
        <CardContent className='space-y-6 capitalize'>
          <div className='flex justify-between'>
            <span className='leading-7 [&:not(:first-child)]:mt-6'>Brand:</span>
            <Badge variant='secondary' className='text-base'>
              {car.brand}
            </Badge>
          </div>
          <div className='flex justify-between'>
            <span className='leading-7 [&:not(:first-child)]:mt-6'>
              An fabricație:
            </span>
            <Badge variant='secondary' className='text-base'>
              {car.year}
            </Badge>
          </div>
          <div className='flex justify-between'>
            <span className='leading-7 [&:not(:first-child)]:mt-6'>Preț:</span>
            <span className='text-lg font-semibold'>{car.price}</span>
          </div>
          <div className='flex justify-between'>
            <span className='leading-7 [&:not(:first-child)]:mt-6'>
              Transmisie:
            </span>
            <span className='text-lg font-semibold'>{car.transmission}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SingleCarCard;
