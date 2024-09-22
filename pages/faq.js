import React, { useState } from 'react';
import Header from '@/components/Header/Header'; // Import the Header component
import Sidebar from '@/components/Sidebar/Sidebar'; // Import the Sidebar component
import Footer from '@/components/Footer/Footer'; // Import the Footer component
import 'remixicon/fonts/remixicon.css'; // Import Remix Icons

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [openSubQuestion, setOpenSubQuestion] = useState(null); // State for sub-questions
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // State for sidebar visibility

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const toggleSubQuestion = (index) => {
    setOpenSubQuestion(openSubQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1 mt-[70px]"> {/* Adjust margin-top to account for the fixed Header */}
        {/* Sidebar */}
        {isSidebarVisible && <Sidebar />}
        
        {/* Main Content */}
        <div
          className={`transition-all duration-300 ${isSidebarVisible ? 'ml-72' : 'w-full'} w-full p-10 text-black shadow-lg bg-gray-100`}
        >
          <div className="bg-white p-4 rounded-lg mb-6 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-blue-400 text-center">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: 'Bagaimana saya menggunakan Layanan Permohonan Data Online (PBO) ini?',
                  answer: 'Anda perlu mengunjungi situs web Disdik Jabar dan memilih menu ‘Layanan Menu’, kemudian pilih ‘Permohonan Surat’. Setelah memilih menu tersebut, Anda akan diarahkan ke formulir permohonan. Isi formulir sesuai dengan kebutuhan Anda. Berikut link website Disdik Jabar:',
                  link: 'https://disdik.jabarprov.go.id/',
                },
                {
                  question: 'Apa yang harus saya mohonkan dari website permohonan ini?',
                  answer: 'Anda dapat mengajukan berbagai jenis permohonan, seperti: permohonan surat A, permohonan surat B, dan permohonan surat C. Pastikan Anda memahami dengan jelas jenis permohonan yang ingin Anda ajukan sebelum mengisi formulir di situs web.',
                },
                {
                  question: 'Mengapa saya tidak bisa mengirim permohonan saya?',
                  answer: 'Ada beberapa hal yang mungkin menjadi penyebab masalah Anda:',
                  subAnswers: [
                    {
                      question: 'Data yang diisi tidak lengkap',
                      answer: 'Apabila data ada yang tidak lengkap, website tidak akan merespon permohonan Anda. Periksa formulir Anda dan pastikan semua formulir yang diperlukan sudah diisi sesuai ketentuan.',
                    },
                    {
                      question: 'Internet yang lemah',
                      answer: 'Apabila Anda mengalami masalah ini, periksa koneksi internet Anda. Jika internet lemah atau tidak ada, coba periksa kembali dan coba lagi nanti.',
                    },
                    {
                      question: 'Website Maintenance atau perbaikan',
                      answer: 'Jika formulir sudah diisi lengkap dan internet Anda baik, mungkin website sedang dalam perbaikan. Jika demikian, coba lagi nanti atau hubungi help center Disdik Jabar jika masalah terus berlanjut.',
                    },
                  ],
                },
                {
                  question: 'Apa yang harus saya lakukan apabila permohonan saya  telah terkirim?',
                  answer: 'Setelah permohonan Anda berhasil dikirim, Anda akan menerima kode referensi yang terkait dengan permohonan tersebut. Gunakan fitur tracking code untuk melacak status permohonan Anda dengan memasukkan kode yang diberikan. Informasi lebih lanjut mengenai permohonan Anda akan tersedia melalui fitur ini.',
                },
                {
                  question: 'Mengapa saya tidak mendapatkan informasi mengenai permohonan saya?',
                  answer: 'Jika permohonan Anda tidak memiliki informasi dalam waktu 2 minggu (waktu standar), Anda dapat melaporkan langsung ke help center atau ke Dinas Pendidikan setempat. Jika masih belum ada informasi lebih lanjut setelah periode tersebut, harap bersabar dan menunggu pembaruan lebih lanjut.',
                },
                {
                  question: 'Mengapa laporan saya terdaftar ‘rejected’?',
                  answer: 'Laporan yang ditolak atau ‘rejected’ mungkin disebabkan oleh beberapa faktor, seperti ketidaklengkapan dokumen atau kesalahan dalam pengisian permohonan. Jika Anda merasa tidak ada kesalahan dalam permohonan yang Anda ajukan, Anda dapat mengajukan permohonan kembali dan menunggu konfirmasi serta informasi tambahan yang mungkin diperlukan.',
                },
              ].map((faq, index) => (
                <div key={index} className="border rounded-lg shadow-lg">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left px-6 py-4 bg-blue-100 hover:bg-blue-200 focus:outline-none flex justify-between items-center"
                  >
                    <span>{faq.question}</span>
                    <i className={`ri-${openQuestion === index ? 'subtract' : 'add'}-line text-2xl`}></i>
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 py-4 bg-blue-50">
                      <p>
                        {faq.answer}{' '}
                        {faq.link && (
                          <a href={faq.link} className="text-blue-600 underline">
                            Here
                          </a>
                        )}
                      </p>
                      {faq.subAnswers && (
                        <div className="mt-4">
                          {faq.subAnswers.map((subAnswer, subIndex) => (
                            <div key={subIndex} className="border rounded-lg shadow-lg mt-2">
                              <button
                                onClick={() => toggleSubQuestion(subIndex)}
                                className="w-full text-left px-6 py-4 bg-blue-100 hover:bg-blue-200 focus:outline-none flex justify-between items-center"
                              >
                                <span>{subAnswer.question}</span>
                                <i className={`ri-${openSubQuestion === subIndex ? 'subtract' : 'add'}-line text-2xl`}></i>
                              </button>
                              {openSubQuestion === subIndex && (
                                <div className="px-6 py-4 bg-blue-50">
                                  <p>{subAnswer.answer}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
