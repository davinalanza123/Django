import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar'; // Assuming you have a Sidebar component
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
      {/* Header */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {isSidebarVisible && <Sidebar />}
        
        {/* Main Content */}
        <div className={`ml-72 transition-all duration-500 ${isSidebarVisible ? '' : 'w-full'}w-full p-8 bg-gradient-to-r from-white to-gray-100 text-black shadow-lg flex-grow`}>
          {/* Toggle Sidebar Button */}
          {/* <button
            className="p-2 text-white bg-blue-500 rounded-md mb-4"
            onClick={toggleSidebar}
          >
            {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
          </button> */}
          
          {/* Search Box */}
          <div className="flex justify-end items-center mb-6">
            <input
              type="text"
              placeholder="Cari di dokumentasi..."
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
            />
          </div>

          {/* Title and Introduction */}
          <h1 className="text-5xl font-extrabold text-blue-600 mb-8 text-center">
            Dokumentasi Mailbox Disdik Jabar
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Selamat datang di dokumentasi Mailbox Disdik Jabar. Di sini, Anda akan menemukan informasi lengkap tentang bagaimana menggunakan sistem Mailbox untuk pertanyaan publik, permintaan dokumen, dan saran.
            </p>
          </div>

          {/* Why is the Mailbox Necessary? */}
          <h2 className="text-4xl font-bold text-blue-500 mb-6 text-center">
            Mengapa Mailbox Surat Pengajuan Diperlukan?
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Surat pengajuan atau permohonan pada suatu lembaga, organisasi, maupun badan pemerintahan sangat diperlukan untuk membuat sebuah permohonan suatu individu atau kelompok. Pengajuan ini juga bisa mengajukan beberapa hal seperti contohnya, surat perizinan, berkas-berkas suatu informasi, maupun sebagainya.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dibuatnya surat permohonan melalui mailbox agar memudahkan pemohon melakukan permohonan/pengajuan sesuatu kepada suatu lembaga pemerintahan terkhususnya Dinas Pendidikan Jawa Barat (Disdik Jabar). Pada mailbox tersebut, pemohon hanya mengisi sebuah formulir permohonan pada suatu website yang sudah disediakan, dan akan dikirimkan permohonan tersebut kepada administrasi melalui online lewat perantara website.
            </p>
          </div>

          {/* Benefits of Using the Mailbox */}
          <h2 className="text-4xl font-bold text-blue-500 mb-6 text-center">
            Keuntungan Menggunakan Mailbox
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
              <li>
                <strong>Lebih Mudah Mengajukan:</strong> Mengajukan suatu permohonan lebih mudah dan lebih cepat, tidak memerlukan waktu yang begitu lama dan dapat dipantau secara real time melalui website Disdik Jabar.
              </li>
              <li>
                <strong>Hasil yang lebih sempurna:</strong> Permohonan yang telah diterima akan dikirimkan informasi mengenai penerimaan permohonan tersebut beserta lampiran dokumen yang diajukan.
              </li>
              <li>
                <strong>Informasi pengajuan yang lebih fleksibel:</strong> Informasi-informasi mengenai pengajuan akan selalu dikirimkan sesuai dengan proses pengajuan melalui email pemohon.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
