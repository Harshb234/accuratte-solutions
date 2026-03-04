import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';
import AccuratLogo from '../components/AccuratLogo';

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBfGKBxJ1dcVB_pmJg6LAAj6jTIuS44VhVKQbrvztHcEnECXqHzUn2yWw3no0Cp9aoJnTvg_nzR-pkJXFCloEE-AoQwFNp71UlH0fS_QWcPmNPeluElmz53WGQRPRXEmPHwnUA7ueKvWUMyNsuZybIEzUWpBvz6RCs6ESttSF-fVCxip6pnB3YDCKz31Ms05xGiDr-JJgyaBssPjMYzd7elk7AnLrxHBx4CQ9pbR6QVTw7YEnsJnGhp2I-T_HvOBLq1TNeeeDyOW28g";

const VALUES = [
    { icon: 'precision_manufacturing', title: 'Precision', description: 'Every deployment is engineered to sub-millisecond accuracy. No cutting corners, no approximations.' },
    { icon: 'shield', title: 'Security First', description: 'Zero-trust architecture and end-to-end encryption are baked into every solution we design.' },
    { icon: 'speed', title: 'Speed', description: 'Rapid deployment without compromising quality. We move fast because downtime costs money.' },
    { icon: 'diversity_3', title: 'Partnership', description: "We're not vendors — we're part of your team. Your success is our success, always." },
];



const MILESTONES = [
    { year: '2022', title: 'Founded', description: 'Accuratte Solutions launched with a small team on a mission to simplify IT deployment for growing companies.' },
    { year: '2023', title: 'First 10 Clients', description: 'Signed our first major contracts and built a reputation for fast, reliable cloud migrations.' },
    { year: '2024', title: 'Team of 18', description: 'Grew from 4 founders to 18 engineers, expanding our service offering to include cybersecurity.' },
    { year: '2025', title: 'Expanding Markets', description: 'Launched AI-powered deployment monitoring and started operations across 3 countries.' },
];

function AboutPage() {
    const [heroRef, heroInView] = useInView({ threshold: 0.1 });
    const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
    const [timelineRef, timelineInView] = useInView({ threshold: 0.05 });

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10" ref={heroRef}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={heroInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-4 py-1.5 bg-white/50 border border-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                            About Us
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                            Engineering the <span className="text-primary">backbone</span> of enterprise IT
                        </h1>
                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                            Founded in 2022, Accuratte Solutions started as a 4-person team of infrastructure architects and has grown into a trusted IT deployment partner serving clients across 3 countries.
                        </p>
                        <div className="flex gap-12 pt-4">
                            <div>
                                <p className="text-4xl font-black text-primary">50+</p>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Projects Completed</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-primary">8</p>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Countries</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-primary">18</p>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Engineers</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
                            <img alt="Accuratte office" className="w-full h-full object-cover" src={HERO_IMG} />
                        </div>
                        {/* Floating accent */}
                        <div className="absolute -bottom-8 -left-8 bg-primary/10 backdrop-blur-xl rounded-3xl p-6 border border-primary/20 shadow-xl">
                            <AccuratLogo className="w-12 h-12 text-primary" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 px-6 bg-white/50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Mission</h2>
                    <p className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                        To eliminate the complexity of IT deployment so enterprises can focus on what matters — <span className="text-primary">building great products</span>.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6" ref={valuesRef}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Values</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">What Drives Us</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VALUES.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/60 backdrop-blur-sm border border-white/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                            >
                                <div className="bg-primary/5 text-primary p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" ref={timelineRef}>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-[120px]" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Journey</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Milestones That Define Us</h3>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-px" />

                        <div className="space-y-16">
                            {MILESTONES.map((m, index) => (
                                <motion.div
                                    key={m.year}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-slate-900 z-10" />

                                    <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                        <span className="text-primary font-black text-lg">{m.year}</span>
                                        <h4 className="text-xl font-bold mt-1">{m.title}</h4>
                                        <p className="text-slate-400 text-sm mt-2 leading-relaxed">{m.description}</p>
                                    </div>

                                    <div className="hidden md:block md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-[#007acc] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                    <div className="relative z-10 space-y-8">
                        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Want to join our team?</h3>
                        <p className="text-white/90 text-lg font-medium">We're always looking for talented engineers who share our passion for precision.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg">
                                View Open Roles
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutPage;
