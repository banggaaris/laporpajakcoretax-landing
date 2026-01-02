import { Check, Coffee, Sparkles, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    iconType: "coffee" | "sparkles";
    price: string;
    originalPrice: string;
    discount: string;
    duration: string;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
    whatsappLink: string;
}

function CreativePricing({
    tag = "Harga Terjangkau",
    title = "Pilih Paket Lapor Anda",
    description = "Semua harga sudah termasuk diskon promo terbatas",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    const getIcon = (iconType: string) => {
        switch (iconType) {
            case "coffee":
                return <Coffee className="w-7 h-7" />;
            case "sparkles":
                return <Sparkles className="w-7 h-7" />;
            default:
                return <Coffee className="w-7 h-7" />;
        }
    };

    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
            <div className="w-full max-w-5xl mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <div className="font-bold text-base text-[#FF6B00] uppercase tracking-widest">
                        {tag}
                    </div>
                    <div className="relative">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                            {title}
                            <span className="absolute -right-8 top-0 text-[#FF6B00] rotate-12 text-2xl">
                                ✨
                            </span>
                        </h2>
                    </div>
                    <p className="text-base text-gray-500 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {tiers.map((tier, index) => (
                        <div
                            key={tier.name}
                            className={cn(
                                "relative group",
                                "transition-all duration-300",
                                index === 0 && "rotate-[-1deg] hover:rotate-0",
                                index === 1 && "rotate-[1deg] hover:rotate-0"
                            )}
                        >
                            <div
                                className={cn(
                                    "absolute inset-0 bg-white",
                                    "border-2 border-gray-900",
                                    "rounded-3xl shadow-[6px_6px_0px_0px] shadow-gray-900",
                                    "transition-all duration-300",
                                    "group-hover:shadow-[10px_10px_0px_0px]",
                                    "group-hover:translate-x-[-4px]",
                                    "group-hover:translate-y-[-4px]"
                                )}
                            />

                            <div className="relative p-8">
                                {tier.popular && (
                                    <div
                                        className="absolute -top-3 -right-3 bg-[#FF6B00] text-white 
                                        font-bold px-4 py-2 rounded-full rotate-12 text-sm border-2 border-gray-900
                                        shadow-[3px_3px_0px_0px] shadow-gray-900 flex items-center gap-1"
                                    >
                                        <Sparkles size={14} />
                                        Populer!
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div
                                        className={cn(
                                            "w-14 h-14 rounded-full mb-4",
                                            "flex items-center justify-center",
                                            "border-2 border-gray-900",
                                            "bg-orange-100 text-[#FF6B00]"
                                        )}
                                    >
                                        {getIcon(tier.iconType)}
                                    </div>
                                    <h3 className="font-extrabold text-xl text-gray-900 mb-1">
                                        {tier.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        {tier.description}
                                    </p>
                                </div>

                                {/* Duration Badge */}
                                <div className="mb-4">
                                    <span className="inline-block bg-orange-100 text-[#FF6B00] px-3 py-1 rounded-full text-xs font-bold border border-[#FF6B00]">
                                        ⏱ {tier.duration}
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="mb-6 p-4 bg-gray-50 rounded-2xl border-2 border-gray-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-sm line-through text-gray-400">
                                            Rp {tier.originalPrice}
                                        </span>
                                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">
                                            {tier.discount}
                                        </span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl font-bold text-gray-900">
                                            Rp
                                        </span>
                                        <span className="text-4xl font-black text-[#FF6B00]">
                                            {tier.price}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    {tier.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-3"
                                        >
                                            <div
                                                className="w-6 h-6 rounded-full border-2 border-gray-900 
                                                bg-green-100 flex items-center justify-center shrink-0"
                                            >
                                                <Check className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="font-medium text-gray-700">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={tier.whatsappLink}
                                    className={cn(
                                        "w-full h-14 font-bold text-base relative flex items-center justify-center gap-2",
                                        "border-2 border-gray-900 rounded-xl",
                                        "transition-all duration-300",
                                        "shadow-[4px_4px_0px_0px] shadow-gray-900",
                                        "hover:shadow-[6px_6px_0px_0px]",
                                        "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                        tier.popular
                                            ? "bg-[#FF6B00] text-white hover:bg-[#e66000]"
                                            : "bg-white text-gray-900 hover:bg-gray-50"
                                    )}
                                >
                                    <span>Pilih Paket Ini</span>
                                    <MessageCircle size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Guarantee Badge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-orange-50 text-orange-700 text-sm font-bold border-2 border-orange-200">
                        🛡️ Semua paket memiliki Garansi 100% Uang Kembali
                    </div>
                    <p className="mt-4 text-xs text-gray-400">
                        *Estimasi waktu dihitung setelah dokumen lengkap diterima tim ahli kami.
                    </p>
                </div>
            </div>
        </section>
    );
}

export { CreativePricing };
export type { PricingTier };
