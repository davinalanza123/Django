import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DisdikJabar from "../../public/assets/image/DisdikJabar.png"

function Header() {
  return (
    <header className="bg-green-700 p-4 flex justify-between items-center">
      <div className="flex items-center">   
        <Image src={DisdikJabar   } alt="Logo" className="w-[100px] h-11 mr-2" />
        <nav className="flex items-center space-x-12 ml-4"> {/* Menambahkan ml-4 */}
        <Link 
            href="/" 
            className="text-white text-lg hover:text-green-800 transform hover:scale-110 transition-all duration-300" 
          >
            DASHBOARD
          </Link>
          <a 
            href="#" 
            className="text-white text-lg hover:text-green-800 transform hover:scale-110 transition-all duration-300" 
          >
            ADMIN
          </a>
          <a 
            href="#" 
            className="text-white text-lg hover:text-green-800 transform hover:scale-110 transition-all duration-300" 
          >
            USER
          </a>
          <a 
            href="#" 
            className="text-white text-lg hover:text-green-800 transform hover:scale-110 transition-all duration-300" 
          >
            HELP
          </a>
        </nav>
    
      </div>
      <div> 
        <button className="bg-green-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-lg transform hover:scale-110 transition-all duration-300"> 
          Help
        </button>
      </div>

    </header>
  );
}

export default Header;