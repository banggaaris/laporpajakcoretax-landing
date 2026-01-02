import { useState, useEffect } from 'react';

export default function Stats() {
    const [counts, setCounts] = useState({ spt: 0, rating: 0, guarantee: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setCounts(prev => ({
                spt: prev.spt < 5000 ? prev.spt + 125 : 5000,
                rating: 4.9,
                guarantee: 100
            }));
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-[#FF6B00]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
                    <div>
                        <div className="text-4xl font-extrabold mb-2">{counts.spt.toLocaleString()}+</div>
                        <div className="text-orange-200 font-medium uppercase tracking-wider">SPT Berhasil Dilaporkan</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-2">{counts.rating}/5</div>
                        <div className="text-orange-200 font-medium uppercase tracking-wider">Rating Kepuasan Pelanggan</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold mb-2">{counts.guarantee}%</div>
                        <div className="text-orange-200 font-medium uppercase tracking-wider">Garansi Uang Kembali</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
