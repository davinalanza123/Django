import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import 'remixicon/fonts/remixicon.css'; // Import Remix Icons

export default function Contents() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Default sidebar to visible

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        {isSidebarVisible && <Sidebar />}
        
        {/* Main Content */}
        <div className={`ml-72 transition-all duration-300 ${isSidebarVisible ? '' : 'w-full'}w-full p-6 bg-white text-black shadow-lg`}>
          <h1 className="text-4xl font-bold mb-6 text-blue-400">Pengelolaan Mailbox Admin</h1>
          
          {/* Dashboard Section */}
          <div className="bg-white p-4 rounded-lg mb-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
              <i className="ri-dashboard-line mr-2"></i> Dashboard (Halaman Utama)
            </h2>
            <p className="text-lg mb-4">
              Menampilkan banyaknya data yang tersedia menggunakan desain statistik, serta ditampilkan juga beberapa data pengajuan permohonan yang memiliki ketentuan tertentu, seperti: data-data yang belum diproses, data-data yang sedang diproses, data-data yang sudah diterima, dibalas, maupun ditolak beserta alasannya.
            </p>
          </div>

          {/* Data Section */}
          <div className="bg-white p-4 rounded-lg mb-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
              <i className="ri-database-line mr-2"></i> Data (Tampilan Data)
            </h2>
            <p className="text-lg mb-4">
              Menampilkan data-data yang di-request oleh pemohon. Administrasi dapat melihat total data, tetapi hanya data utama yang terlihat secara default. Jika data yang dibutuhkan banyak, akan ada fitur 'view-more'.
            </p>
          </div>

          {/* Detailed Data View Section */}
          <div className="bg-white p-4 rounded-lg mb-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
              <i className="ri-file-list-3-line mr-2"></i> Detail Data (Tampilan Detail ID)
            </h2>
            <p className="text-lg mb-4">
              Halaman ini memungkinkan admin untuk melihat keseluruhan data dari tabel berdasarkan satu ID tertentu. Detail ini akan memperlihatkan semua informasi yang terkait dengan ID tersebut, termasuk data yang mungkin tersembunyi atau tidak ditampilkan di halaman utama. Ini memberikan gambaran menyeluruh tentang permohonan atau entitas yang dimaksud.
            </p>
          </div>

          {/* Update Request Section */}
          <div className="bg-white p-4 rounded-lg mb-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
              <i className="ri-edit-2-line mr-2"></i> Update Request (Perubahan Permohonan)
            </h2>
            <p className="text-lg mb-4">
              Merupakan tempat di mana admin dapat mengakses dan memperbarui status permohonan. Di halaman ini tersedia empat tahapan jawaban: Pending (Belum diproses), Proses (Sedang diproses), Rejecter (Permohonan ditolak), dan Approved (Permohonan diterima). Selain itu, terdapat fitur untuk mengirim surat/berkas yang dibutuhkan oleh pemohon melalui tombol ‘add URL’ dan ‘send file’.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
