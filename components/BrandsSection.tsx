// BrandsSection.tsx
import { SiMercedes, SiSkoda, SiVolkswagen } from "react-icons/si";

const BrandsSection = () => {
  return (
    <div className='mt-8 p-6 rounded-lg shadow-md bg-gray-100 dark:bg-transparent'>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center mb-8'>
        Mărcile noastre:
      </h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {/* Skoda */}
        <div className='text-center'>
          <SiSkoda className='text-5xl mx-auto mb-2 text-green-600' />
          <p>
            Skoda oferă un amestec excelent de calitate și preț, fiind alegerea
            ideală pentru familii.
          </p>
        </div>
        {/* Volkswagen */}
        <div className='text-center'>
          <SiVolkswagen className='text-5xl mx-auto mb-2 text-blue-600' />
          <p>
            Volkswagen este sinonim cu fiabilitate și performanță, cu un design
            distinctiv.
          </p>
        </div>
        {/* Mercedes */}
        <div className='text-center'>
          <SiMercedes className='text-5xl mx-auto mb-2 dark:text-white' />
          <p>
            Mercedes reprezintă luxul și inovația, oferind cele mai bune
            experiențe de condus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
