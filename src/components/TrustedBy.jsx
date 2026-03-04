function TrustedBy() {
    const brands = ['NEXUS', 'CLOUDCORE', 'SYNERGY', 'STRATUM', 'VECTOR'];

    return (
        <section className="py-12 border-y border-slate-200/50 bg-white/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
                    Trusted by Innovative Startups & SMBs
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand) => (
                        <span key={brand} className="text-2xl font-black italic tracking-tighter">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrustedBy;
