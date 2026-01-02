import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <a href="/" className="text-lg font-bold tracking-tight text-gray-900">
                            Lapor Pajak <span className="text-[#FF6B00]">Coretax</span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-[#FF6B00] transition-colors">Keunggulan</a>
                        <a href="#pricing" className="text-gray-600 hover:text-[#FF6B00] transition-colors">Harga</a>
                        <a href="#faq" className="text-gray-600 hover:text-[#FF6B00] transition-colors">FAQ</a>
                        <a
                            href="https://wa.me/628123456789?text=Halo%20LaporPajakCoreTax,%20saya%20ingin%20dibantu%20lapor%20SPT%20Tahunan%20Coretax."
                            className="bg-[#FF6B00] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e66000] transition-all shadow-lg shadow-orange-200"
                        >
                            Bantu Saya Lapor
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600" aria-label="Toggle menu">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
                    <a href="#features" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium">Keunggulan</a>
                    <a href="#pricing" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium">Harga</a>
                    <a href="#faq" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium">FAQ</a>
                    <a
                        href="https://wa.me/628123456789?text=Halo%20LaporPajakCoreTax,%20saya%20ingin%20dibantu%20lapor%20SPT%20Tahunan%20Coretax."
                        className="block text-center bg-[#FF6B00] text-white py-4 rounded-xl font-bold"
                    >
                        Bantu Saya Lapor Sekarang
                    </a>
                </div>
            )}
        </nav>
    );
}
