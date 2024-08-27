export default function Contents() {
  return (
    <>
      <div className="w-3/4 p-6 bg-white text-black shadow-lg rounded-lg">
        {/* Kotak Pencarian */}
        <div className="flex justify-end items-center mb-4">
          <input
            type="text"
            placeholder="Cari di dokumentasi..."
            className="w-1/3 px-4 py-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
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

        {/* Bantuan | FAQ */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Bantuan | FAQ</h2>
        <p className="mb-4">Butuh bantuan? Berikut adalah beberapa sumber daya yang mungkin berguna:</p>
        <ul className="list-disc pl-6">
          <li><a href="#" className="text-blue-500 hover:underline">FAQ</a> - Jawaban untuk pertanyaan yang sering diajukan.</li>
          <li><a href="#" className="text-blue-500 hover:underline">Indeks</a>, <a href="#" className="text-blue-500 hover:underline">Indeks Modul</a>, atau <a href="#" className="text-blue-500 hover:underline">Daftar Isi Terperinci</a> untuk informasi spesifik.</li>
          <li>Masih ada pertanyaan? Lihat <a href="#" className="text-blue-500 hover:underline">FAQ: Mendapatkan Bantuan</a> untuk panduan lebih lanjut.</li>
        </ul>

      
        {/* Navigasi Konten */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-sm text-gray-500">
          <span className="mr-4">• <a href="#" className="hover:underline">Prev: Django Documentation Contents</a></span>
          <span><a href="#" className="hover:underline">Next: Getting Started</a></span>
        </div>
      </div>
    </>
  );
}
