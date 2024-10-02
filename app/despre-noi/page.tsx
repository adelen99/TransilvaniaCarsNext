// AboutPage.tsx
import AboutUsCard from "@/components/AboutUsCard"; // Asigură-te că importi corect
import BrandsSection from "@/components/BrandsSection"; // Asigură-te că importi corect

export default function AboutPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6'>
      <div className='container mx-auto max-w-3xl'>
        <AboutUsCard />
        <BrandsSection />
        <p className='leading-7 mt-6 text-muted-foreground text-center'>
          Contactează-ne astăzi pentru a descoperi cum putem îmbunătăți
          experiența ta de condus!
        </p>
      </div>
    </div>
  );
}
