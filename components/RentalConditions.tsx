import React from "react";
import { FaClipboardList } from "react-icons/fa";

function RentalConditions() {
  return (
    <section className='p-4 mt-4 grid md:grid-cols-1 lg:grid-cols-2'>
      <div className='flex justify-center items-center '>
        <FaClipboardList className='hidden md:block lg:w-1/2 lg:h-auto' />
      </div>
      <div className='text-center'>
        <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>
          Condiții de Închiriere
        </h2>
        <ul className='mt-4 space-y-2'>
          <li className='p-4 border rounded-lg shadow-md'>
            <strong>Vârstă minimă:</strong> Trebuie să aveți cel puțin 21 de ani
            pentru a închiria o mașină.
          </li>
          <li className='p-4 border rounded-lg shadow-md'>
            <strong>Documente necesare:</strong> Este necesar un permis de
            conducere valabil și un act de identitate.
          </li>
          <li className='p-4 border rounded-lg shadow-md'>
            <strong>Depozit:</strong> Se va percepe un depozit de securitate
            care va fi returnat la finalizarea închirierii.
          </li>
          <li className='p-4 border rounded-lg shadow-md'>
            <strong>Asigurare:</strong> Asigurarea este inclusă în prețul de
            închiriere, dar vă recomandăm să verificați opțiunile suplimentare.
          </li>
          <li className='p-4 border rounded-lg shadow-md'>
            <strong>Politica de anulare:</strong> Anulările cu cel puțin 48 de
            ore înainte de închiriere sunt gratuite.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RentalConditions;
