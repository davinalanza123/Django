import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Contents() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex">


      {/* Konten utama, ubah lebar berdasarkan visibilitas sidebar */}
      <div className={`transition-all duration-300 ${isSidebarVisible ? 'w-3/4' : 'w-full'} p-6 bg-white text-black shadow-lg`}>
        {/* Kotak Pencarian */}
        <div className="flex justify-end items-center mb-4">
          <input
            type="text"
            placeholder="Cari di dokumentasi..."
            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring- focus:ring-gray-400"
          />
        </div>

        {/* Judul dan Pengantar */}
        <h1 className="text-4xl font-bold mb-6">Dokumentasi Mailbox Disdik Jabar</h1>
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <p className="text-lg mb-4">
            Selamat datang di dokumentasi Mailbox Disdik Jabar. Di sini, Anda akan menemukan informasi lengkap tentang bagaimana menggunakan sistem Mailbox untuk pertanyaan publik, permintaan dokumen, dan saran.
          </p>
        </div>

        {/* Tujuan Web Mailbox */}
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <p className="text-lg">
            Web Mailbox ini dibuat untuk memfasilitasi masyarakat dalam mengajukan permohonan berkas terkait pendidikan, seperti sertifikat, dokumen resmi, dan kebutuhan administratif lainnya. Dengan menggunakan platform ini, masyarakat dapat lebih mudah dan cepat berkomunikasi dengan Dinas Pendidikan Jawa Barat (Disdik Jabar) dalam memenuhi kebutuhan pendidikan mereka.
          </p>
        </div>

        {/* Pengenalan Mailbox */}
        <h1 className="text-4xl font-bold mb-6">Tujuan</h1>
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <div className="flex items-center mt-4">
            <p className="text-lg">
              Mailbox ini dirancang untuk memfasilitasi komunikasi antara publik dan Disdik Jabar. Untuk informasi lebih lanjut, kunjungi 
              <a href="https://disdik.jabarprov.go.id/" className="text-blue-500 hover:underline"> Website Disdik Jabar</a>.
            </p>
          </div>
        </div>

    
      </div>
    </div>
  );
}
