import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        q: "Apakah data pribadi saya aman?",
        a: "Tentu. Kami menggunakan sistem enkripsi data dan tidak menyimpan kredensial login Anda setelah proses pelaporan selesai. Kami sangat menghargai privasi Anda."
    },
    {
        q: "Dokumen apa saja yang perlu disiapkan?",
        a: "Cukup siapkan Bukti Potong (1721-A1/A2) dan daftar harta/utang sederhana. Tim kami akan membimbing Anda melalui WhatsApp."
    },
    {
        q: "Apa yang terjadi setelah saya membayar?",
        a: "Tim kami akan segera menghubungi Anda untuk meminta data yang diperlukan. BPE akan dikirimkan sesuai dengan estimasi waktu paket yang Anda pilih."
    },
    {
        q: "Apakah ini berlaku untuk badan usaha?",
        a: "Saat ini kami fokus memberikan bantuan kilat untuk SPT Tahunan Orang Pribadi agar harga tetap terjangkau."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pertanyaan Umum</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all hover:shadow-md">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-gray-900">{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="text-[#FF6B00]" /> : <ChevronDown className="text-gray-400" />}
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
