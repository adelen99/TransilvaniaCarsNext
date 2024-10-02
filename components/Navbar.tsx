import Logo from "./Logo";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import NavSearch from "./NavSearch";
import Container from "@/globals/Container";
import { Suspense } from "react";

function Navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 p-8'>
        <div className='hidden sm:flex w-full  items-center '>
          <Logo />
          <div className='flex-grow flex justify-center mx-4'>
            <Suspense>
              <NavSearch />
            </Suspense>
          </div>
          <div className='flex gap-4 items-center'>
            <DarkMode />
            <LinksDropdown />
          </div>
        </div>

        <div className='flex sm:hidden flex-col gap-4 '>
          <div className='w-full text-center flex items-center justify-center'>
            <Logo />
          </div>
          <div className='flex gap-4 items-center justify-between'>
            <LinksDropdown />
            <NavSearch />
            <DarkMode />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
