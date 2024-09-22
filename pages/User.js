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
          <h1 className="text-4xl font-bold mb-6 text-blue-400">Tutorial Mengisi Formulir Pengajuan</h1>

          {/* Menu Atas Section */}
          <div className="bg-white p-4 rounded-lg mb-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
              <i className="ri-menu-line mr-2"></i> Menu Atas
            </h2>
             {/* Image for Menu Data */}
             <div className="flex justify-center">
              <img src="/assets/image/Menu.png" alt="Tracking Data" className="max-w-full h-auto mt-4" />
            </div>
            <p className="text-lg mb-4">
              Menu atas pada halaman pengajuan terdiri dari:
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li><strong>Home:</strong> Menampilkan formulir pengajuan untuk mengirim permohonan kepada Disdik Jabar.</li>
              <li><strong>Tracking:</strong> Fitur ini memungkinkan Anda untuk melacak status pengajuan dengan memasukkan kode pengajuan yang diberikan setelah pengajuan dikirimkan.</li>
            </ul>
          </div>

          {/* Formulir Pengajuan Section */}
          <div className="bg-white p-4 rounded-lg mb-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
              <i className="ri-file-text-line mr-2"></i> Formulir Pengajuan
            </h2>
             {/* Image for Formulir Pengajuan */}
             <div className="flex justify-center">
              <img src="/assets/image/Form.png" alt="Formulir Pengajuan" className="max-w-full h-auto mt-4" />
            </div>
         

            <p className="text-lg mb-4">
              Berikut adalah langkah-langkah untuk mengisi formulir pengajuan:
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li><strong>Nama Pemohon:</strong> Masukkan nama pemohon atau pengaju dengan huruf kapital sesuai dengan EYD Bahasa Indonesia.</li>
              <li><strong>NIK:</strong> Masukkan Nomor Induk Kependudukan (NIK) pemohon. Jika NIK tidak tersedia, Anda dapat menggunakan nomor identifikasi lainnya.</li>
              <li><strong>Upload Foto KTP:</strong> Unggah foto atau dokumen berbentuk PDF dari kartu tanda pengenal pemohon. Jika tidak memiliki KTP, Anda dapat menggunakan kartu identitas lain seperti kartu pelajar.</li>
              <li><strong>Nomor Pengesahan:</strong> [Isi sesuai kebutuhan]</li>
              <li><strong>Alamat:</strong> Masukkan alamat rumah pemohon secara lengkap dan jelas.</li>
              <li><strong>Pekerjaan:</strong> Masukkan pekerjaan atau profesi pemohon.</li>
              <li><strong>No HP:</strong> Masukkan nomor telepon pemohon yang aktif untuk komunikasi lebih lanjut.</li>
              <li><strong>Email:</strong> Masukkan email aktif pemohon. Email ini dapat berupa email pribadi atau email resmi dari kelompok atau organisasi terkait.</li>
              <li><strong>Rincian Informasi:</strong> [Isi sesuai kebutuhan]</li>
              <li><strong>Tujuan Permohonan Informasi:</strong> Jelaskan tujuan dan alasan pengajuan permohonan informasi ini.</li>
              <li><strong>Cara Memperoleh Informasi:</strong> [Isi sesuai kebutuhan]</li>
              <li><strong>Bentuk Mendapatkan Salinan Informasi:</strong> [Isi sesuai kebutuhan]</li>
              <li><strong>Cara Mendapatkan Salinan Informasi:</strong> [Isi sesuai kebutuhan]</li>
            </ul>
            </div>
           
          {/* Tracking Data Section */}
          <div className="bg-white p-4 rounded-lg mb-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
              <i className="ri-search-line mr-2"></i> Tracking Data
            </h2>
            {/* Image for Tracking Data */}
            <div className="flex justify-center">
              <img src="/assets/image/Tracking.png" alt="Tracking Data" className="max-w-full h-auto mt-4" />
            </div>
            <p className="text-lg mb-4">
              Setelah Anda mengirimkan pengajuan, Anda dapat menggunakan fitur <strong>Tracking</strong> untuk melacak status pengajuan Anda. Masukkan kode pengajuan yang Anda terima setelah mengirimkan formulir untuk melihat informasi lebih lanjut mengenai status permohonan Anda.
            </p>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
