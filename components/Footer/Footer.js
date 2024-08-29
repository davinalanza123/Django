import Link from 'next/link';
import DisdikJabar from "../../public/assets/image/DisdikJabar.png";
import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Logo Section */}
        <div className="flex  mb-8">
          <Image 
            src={DisdikJabar} 
            alt="Logo" 
            className="w-32 h-22" 
          />
        </div>
        
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Address Section */}
          <div className="space-y-4">
            <p className="font-medium text-white flex items-center">
              <MapPinIcon className="h-6 w-6 text-white mr-4" />
              Alamat
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <span className="text-white">
                  Jl. Dr. Rajiman No.6, Pasir Kaliki, Kec. Cicendo, Kota Bandung, Jawa Barat 40171
                </span>
              </li>
            </ul>
          </div>

          {/* Email Section */}
          <div className="space-y-4">
            <p className="font-medium text-white flex items-center">
              <EnvelopeIcon className="h-6 w-6 text-white mr-4" />Surel
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Link href="mailto:disdik@jabarprov.go.id" className="text-white transition hover:opacity-75">
                  disdik@jabarprov.go.id
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-4">
            <p className="font-medium text-white flex items-center">
              <PhoneIcon className="h-6 w-6 text-white mr-4" />Bantuan
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <span className="text-white">Davin (022) 4264318</span>
              </li>
              <li className="flex items-center">
                <span className="text-white">Sidiq (022) 4264881</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <p className="font-medium text-white flex items-center">
              <FaGlobe className="h-6 w-6 text-white mr-4" />Media Sosial
            </p>
            <ul className="flex space-x-4">
              <li className="flex items-center border border-white rounded-md p-3">
                <Link href="#">
                  <FaFacebook className="text-white w-4 h-4" />
                </Link>
              </li>
              <li className="flex items-center border border-white rounded-md p-3">
                <Link href="#">
                  <FaTwitter className="text-white w-4 h-4" />
                </Link>
              </li>
              <li className="flex items-center border border-white rounded-md p-3">
                <Link href="#">
                  <FaInstagram className="text-white w-4 h-4" />
                </Link>
              </li>
              <li className="flex items-center border border-white rounded-md p-3">
                <Link href="#">
                  <FaYoutube className="text-white w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center">
          <p className="text-xs text-white">&copy; 2024. Mailbox Disdik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
