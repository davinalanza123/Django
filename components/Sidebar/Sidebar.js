import React from 'react';
import morePng from "../../public/assets/image/more.png"
import Image from 'next/image'

function Sidebar() {
  return (
    <aside className="w-1/4 p-4 bg-gray-200"> 
      <h2 className="text-lg font-semibold mb-2 text-black">Browse</h2> {/* Changed title */}
           {/* Daftar Isi */}
           <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">Daftar Isi</h2>
        <ul className="list-disc pl-6 mb-8">
          <li><a href="#" className="text-blue-500 hover:underline">Overview | Ringkasan</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Langkah-langkah Pengguna atau Pemohon</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Langkah Pemeliharaan untuk Administrasi</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Fitur dan Kegunaan</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Panduan Troubleshooting</a></li>
        </ul>


      <div className="border-t border-gray-300 pt-4"> {/* Added divider */}
        <p className="text-sm text-gray-500">
          You are here:
        </p>
        <p className="text-sm text-gray-500 mb-2">
          Django 5.1 documentation
        </p>

        <select className="text-sm border border-gray-300 rounded p-2"> {/* Added language dropdown */}
          <option value="en">Language: en</option>
          {/* Add more language options as needed */}
        </select>

        <p className="text-sm text-gray-500 mt-4">
          Documentation version: 5.1
        </p>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded mt-6 w-[40%] flex items-center"> {/* Added Get help button */}
        <Image src={morePng}  className="mr-2 w-6 h-6" />
  
      </button>
    </aside>
  );
}

export default Sidebar;