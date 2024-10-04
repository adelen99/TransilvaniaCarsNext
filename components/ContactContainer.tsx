import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Importă componentele din shadcn/ui
import Link from "next/link"; // Importă componenta Link din Next.js
import { Button } from "@/components/ui/button"; // Importă butonul din shadcn/ui
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"; // Iconițele HiMail, HiPhone, HiLocationMarker din react-icons

export default function ContactPage() {
  return (
    <div className='container mx-auto max-w-xl py-6'>
      <Card className='shadow-lg p-6 rounded-lg dark:bg-black bg-gray-100'>
        <CardHeader>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center border-b-2'>
            Contactează-ne
          </h1>
        </CardHeader>
        <CardContent>
          <div className='space-y-6'>
            {/* Secțiunea Email */}
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <HiMail className='w-6 h-6 mr-3 text-foreground' />
              </div>
              <div className='flex-grow'>
                <h3 className='font-semibold'>Email:</h3>
                <p className='leading-7 dark:text-muted-foreground break-words overflow-wrap break-word'>
                  transilvaniacars@office.com
                </p>
              </div>
            </div>

            {/* Secțiunea Telefon */}
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <HiPhone className='w-6 h-6 mr-3 text-foreground' />
              </div>
              <div className='flex-grow'>
                <h3 className='font-semibold'>Telefon:</h3>
                <p className='leading-7 dark:text-muted-foreground break-words overflow-wrap break-word'>
                  +40 756 411 211
                </p>
              </div>
            </div>

            {/* Secțiunea Locație */}
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <HiLocationMarker className='w-6 h-6 mr-3 text-foreground' />
              </div>
              <div className='flex-grow'>
                <h3 className='font-semibold'>Locație:</h3>
                <p className='leading-7 dark:text-muted-foreground break-words overflow-wrap break-word'>
                  Cluj, România
                </p>
              </div>
            </div>
          </div>

          {/* Buton pentru trimiterea unui email */}
          <div className='mt-6 text-center'>
            <Link href='mailto:transilvaniacars@office.com'>
              <Button className='w-full'>Trimite un email</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      {/* Spacer pentru a adăuga mai mult spațiu dedesubtul cardului */}
      <div className='mt-10' /> {/* Spațiu adițional dedesubtul cardului */}
    </div>
  );
}
