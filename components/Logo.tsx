import Link from "next/link";
import { Button } from "./ui/button";
import { FaCar } from "react-icons/fa";

function Logo() {
  return (
    <div>
      <Link href='/'>
        <span className='flex items-center space-x-2'>
          <span className='"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"'>
            TransilvaniaCars
          </span>
          <FaCar className='w-6 h-6' />
        </span>
      </Link>
    </div>
  );
}

export default Logo;
