import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DisdikJabar from "../../public/assets/image/DisdikJabar.png"

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 flex justify-between items-center">
      <div className="flex items-center">   
        <Image src={DisdikJabar   } alt="Logo" className="w-[90px] h-11 mr-5" />
        <nav className="flex items-center space-x-12 ml-2"> {/* Menambahkan ml-4 */}
        
        </nav>
    
      </div>
    </header>
  );
}

export default Header;