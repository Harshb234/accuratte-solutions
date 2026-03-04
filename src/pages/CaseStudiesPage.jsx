import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';

const CASE_STUDIES = [
    {
        tag: 'Cloud Migration',
        tagColor: 'bg-primary/10 text-primary',
        title: 'Fintech Startup Migrates 50+ Servers to AWS',
        description: 'A Series B fintech company needed to migrate their on-premise infrastructure to the cloud with minimal downtime during their busiest quarter.',
        stats: [
            { value: '50+', label: 'Servers Migrated' },
            { value: '<2min', label: 'Total Downtime' },
            { value: '35%', label: 'Cost Reduction' },
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfGKBxJ1dcVB_pmJg6LAAj6jTIuS44VhVKQbrvztHcEnECXqHzUn2yWw3no0Cp9aoJnTvg_nzR-pkJXFCloEE-AoQwFNp71UlH0fS_QWcPmNPeluElmz53WGQRPRXEmPHwnUA7ueKvWUMyNsuZybIEzUWpBvz6RCs6ESttSF-fVCxip6pnB3YDCKz31Ms05xGiDr-JJgyaBssPjMYzd7elk7AnLrxHBx4CQ9pbR6QVTw7YEnsJnGhp2I-T_HvOBLq1TNeeeDyOW28g',
    },
    {
        tag: 'Infrastructure',
        tagColor: 'bg-emerald-50 text-emerald-600',
        title: 'E-Commerce Brand Scales to Handle 10K Requests/sec',
        description: 'When seasonal traffic surges threatened to crash their D2C platform, this growing e-commerce brand turned to Accuratte for a solid auto-scaling setup.',
        stats: [
            { value: '10K+', label: 'Requests/Sec' },
            { value: '99.9%', label: 'Uptime' },
            { value: '2x', label: 'Faster Load' },
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfGKBxJ1dcVB_pmJg6LAAj6jTIuS44VhVKQbrvztHcEnECXqHzUn2yWw3no0Cp9aoJnTvg_nzR-pkJXFCloEE-AoQwFNp71UlH0fS_QWcPmNPeluElmz53WGQRPRXEmPHwnUA7ueKvWUMyNsuZybIEzUWpBvz6RCs6ESttSF-fVCxip6pnB3YDCKz31Ms05xGiDr-JJgyaBssPjMYzd7elk7AnLrxHBx4CQ9pbR6QVTw7YEnsJnGhp2I-T_HvOBLq1TNeeeDyOW28g',
    },
    {
        tag: 'Security',
        tagColor: 'bg-amber-50 text-amber-600',
        title: 'HealthTech App Achieves SOC 2 Compliance',
        description: 'A healthcare SaaS startup serving 20+ clinics needed SOC 2-compliant infrastructure across their cloud environment before their next funding round.',
        stats: [
            { value: '20+', label: 'Clinics Secured' },
            { value: '100%', label: 'SOC 2 Compliance' },
            { value: '2 weeks', label: 'Implementation' },
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfGKBxJ1dcVB_pmJg6LAAj6jTIuS44VhVKQbrvztHcEnECXqHzUn2yWw3no0Cp9aoJnTvg_nzR-pkJXFCloEE-AoQwFNp71UlH0fS_QWcPmNPeluElmz53WGQRPRXEmPHwnUA7ueKvWUMyNsuZybIEzUWpBvz6RCs6ESttSF-fVCxip6pnB3YDCKz31Ms05xGiDr-JJgyaBssPjMYzd7elk7AnLrxHBx4CQ9pbR6QVTw7YEnsJnGhp2I-T_HvOBLq1TNeeeDyOW28g',
    },
];

const TESTIMONIALS = [
    {
        quote: "Accuratte Solutions helped us migrate to the cloud faster than we ever expected. Their small but highly skilled team feels like an extension of our own.",
        name: 'Sarah Chen',
        role: 'CTO, NexusPay',
        avatar: 'SC',
    },
    {
        quote: "Under 2 minutes of downtime during a full server migration. For a startup, Accuratte punches way above their weight. Highly recommend.",
        name: 'Marcus Wright',
        role: 'VP Engineering, CloudCore',
        avatar: 'MW',
    },
    {
        quote: "From architecture to execution, Accuratte's process is clean and efficient. They helped us cut infra costs by 35% while improving our reliability.",
        name: 'Emily Rodriguez',
        role: 'Director of IT, Stratum Health',
        avatar: 'ER',
    },
];

function CaseStudiesPage() {
    const [heroRef, heroInView] = useInView({ threshold: 0.1 });
    const [cardsRef, cardsInView] = useInView({ threshold: 0.05 });
    const [testimonialRef, testimonialInView] = useInView({ threshold: 0.1 });

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10 space-y-6" ref={heroRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 bg-white/50 border border-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary"
                    >
                        Proven Results
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight"
                    >
                        Our <span className="text-primary">Success</span> Stories
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        See how we've helped global enterprises transform their IT infrastructure with precision deployment.
                    </motion.p>
                </div>
            </section>

            {/* Case Study Cards */}
            <section className="py-16 px-6" ref={cardsRef}>
                <div className="max-w-6xl mx-auto space-y-20">
                    {CASE_STUDIES.map((cs, index) => (
                        <motion.div
                            key={cs.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}
                        >
                            {/* Image */}
                            <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/30 group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent-cyan/10 mix-blend-overlay z-10" />
                                    <img
                                        alt={cs.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        src={cs.image}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold ${cs.tagColor}`}>
                                    {cs.tag}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">{cs.title}</h2>
                                <p className="text-slate-600 text-lg leading-relaxed">{cs.description}</p>

                                {/* Stats */}
                                <div className="flex gap-8 pt-4">
                                    {cs.stats.map((stat) => (
                                        <div key={stat.label}>
                                            <p className="text-3xl font-black text-primary">{stat.value}</p>
                                            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="flex items-center gap-2 mt-6 text-primary font-bold hover:gap-3 transition-all">
                                    Read Full Case Study <span className="material-symbols-outlined text-base">arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-[120px] rounded-full translate-x-1/4" />
                <div className="max-w-6xl mx-auto relative z-10" ref={testimonialRef}>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Client Testimonials</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">What Our Clients Say</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((t, index) => (
                            <motion.div
                                key={t.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-primary/30 transition-colors"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-amber-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    ))}
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-8 italic">"{t.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <p className="font-bold">{t.name}</p>
                                        <p className="text-sm text-slate-400">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Ready to become our next success story?</h3>
                    <p className="text-slate-600 text-lg">Join 50+ companies who trust Accuratte for reliable, scalable deployments.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:-translate-y-0.5 transition-all">
                            Start a Project
                        </Link>
                        <Link to="/services" className="border border-slate-200 bg-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors">
                            View Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CaseStudiesPage;
