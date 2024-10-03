import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Importă componentele din shadcn/ui
import Link from "next/link"; // Importă componenta Link din Next.js
import { Button } from "@/components/ui/button"; // Importă butonul din shadcn/ui
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"; // Importă iconițele

export default function ContactPage() {
  return (
    <div className='container mx-auto max-w-xl p-6'>
      <Card className='shadow-lg p-6 rounded-lg dark:bg-black bg-gray-100'>
        <CardHeader>
          <h1 className='text-2xl md:text-3xl font-bold mb-8 text-center border-b-2'>
            Contactează-ne
          </h1>
        </CardHeader>
        <CardContent>
          <div className='space-y-6'>
            <div className='flex items-center'>
              <HiMail className='w-6 h-6 mr-3 text-foreground' />
              <div>
                <h3 className='font-semibold'>Email:</h3>
                <p className='leading-7 dark:text-muted-foreground'>
                  transilvaniacars@office.com
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <HiPhone className='w-6 h-6 mr-3 text-foreground' />
              <div>
                <h3 className='font-semibold'>Telefon:</h3>
                <p className='leading-7 dark:text-muted-foreground'>
                  +40 756 411 211
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <HiLocationMarker className='w-6 h-6 mr-3 text-foreground' />
              <div>
                <h3 className='font-semibold'>Locație:</h3>
                <p className='leading-7 dark:text-muted-foreground'>
                  Cluj, România
                </p>
              </div>
            </div>
          </div>
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
