import { Alfa_Slab_One } from "next/font/google";
import Link from "next/link";
import { FaCar } from "react-icons/fa";

const roboto = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

function Logo() {
  return (
    <div>
      <Link href='/'>
        <span className='flex items-center space-x-2'>
          <span
            className={`${roboto.className} scroll-m-20 text-3xl  tracking-wide lg:text-4xl`}>
            TransilvaniaCars
          </span>
          <FaCar className='w-8 h-8' />
        </span>
      </Link>
    </div>
  );
}

export default Logo;
