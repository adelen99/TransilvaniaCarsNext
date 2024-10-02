// AboutUsCard.tsx
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Importă componentele din shadcn/ui

const AboutUsCard = () => {
  return (
    <Card className='shadow-lg bg-gray-100 dark:bg-transparent'>
      <CardHeader>
        <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center'>
          Despre Noi
        </h2>
      </CardHeader>
      <CardContent>
        <p className='leading-7 [&:not(:first-child)]:mt-6 '>
          La Transilvania Cars, suntem pasionați de mașini și dedicati să oferim
          clienților noștri cele mai bune experiențe de condus. Cu o echipă
          formată din profesioniști cu experiență, ne angajăm să aducem cele mai
          noi și mai inovatoare modele pe piața din România.
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          De la sedanuri elegante la SUV-uri robuste, avem o gamă variată de
          vehicule care se potrivesc nevoilor și preferințelor fiecărui client.
          Fiecare mașină din flota noastră este atent selectată, testată și
          întreținută pentru a asigura cele mai înalte standarde de calitate.
        </p>

        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          Misiunea noastră este de a transforma fiecare călătorie într-o
          experiență memorabilă. Indiferent dacă ești în căutarea unui vehicul
          pentru familia ta sau pentru afacerea ta, suntem aici să te ajutăm să
          găsești mașina perfectă.
        </p>
        <h3 className='font-semibold mt-4'>Valorile noastre:</h3>
        <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
          <li>
            Calitate: Ne mândrim cu standardele noastre înalte de calitate.
          </li>
          <li>
            Integritate: Fiecare interacțiune cu clienții este bazată pe
            onestitate și transparență.
          </li>
          <li>
            Inovație: Suntem dedicați să aducem cele mai recente tehnologii în
            domeniul auto.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AboutUsCard;
