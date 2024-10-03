import { GiCarKey, GiMoneyStack } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { z } from "zod";

const serviceSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.custom<React.ReactElement>(), // Custom type for a React element
});

const servicesSchema = z.array(serviceSchema);

const services = [
  {
    title: "Transport pentru Evenimente",
    description:
      "Organizați transportul pentru evenimente speciale, cum ar fi nunți sau petreceri, cu mașini elegante și confortabile.",
    icon: <FaCarSide />, // Icon as JSX
  },
  {
    title: "Închirieri pe Termen Lung",
    description:
      "Beneficiați de oferte atractive pentru închirieri pe termen lung, perfecte pentru afaceri sau călătorii prelungite.",
    icon: <GiCarKey />,
  },
  {
    title: "Prețuri Avantajoase",
    description:
      "Oferim prețuri competitive și oferte speciale, asigurând cea mai bună valoare pentru fiecare tip de mașină disponibil.",
    icon: <GiMoneyStack />,
  },
];

const result = servicesSchema.safeParse(services);

if (!result.success) {
  console.error("Validation Error:", result.error.format());
} else {
  console.log("Validation Success");
}

const Services = () => {
  return (
    <section className='p-4'>
      <h2 className='scroll-m-20 border-b mb-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center '>
        Serviciile Noastre
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <div key={index} className='p-6 border-2  shadow-md text-center'>
            <div className='mb-4 text-4xl text-primary'>{service.icon}</div>
            <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
            <p className='text-muted-foreground'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
