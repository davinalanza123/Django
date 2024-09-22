import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DisdikJabar from "../../public/assets/image/DisdikJabar.png"

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 p-4 flex justify-between items-center z-50">
      <div className="flex items-center">
        <Image src={DisdikJabar} alt="Logo" className="w-[90px] h-11 mr-5" />
        <nav className="flex items-center space-x-12 ml-2">
          {/* Add your nav links here */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
