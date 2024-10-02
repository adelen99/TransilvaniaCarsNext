import React from "react";

function Footer() {
  return (
    <footer className='bg-black dark:bg-gray-100 text-white p-6'>
      <div className='container mx-auto text-center dark:text-black'>
        <p>
          &copy; {new Date().getFullYear()} Transilvania Cars. Toate drepturile
          rezervate.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
