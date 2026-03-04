import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBfGKBxJ1dcVB_pmJg6LAAj6jTIuS44VhVKQbrvztHcEnECXqHzUn2yWw3no0Cp9aoJnTvg_nzR-pkJXFCloEE-AoQwFNp71UlH0fS_QWcPmNPeluElmz53WGQRPRXEmPHwnUA7ueKvWUMyNsuZybIEzUWpBvz6RCs6ESttSF-fVCxip6pnB3YDCKz31Ms05xGiDr-JJgyaBssPjMYzd7elk7AnLrxHBx4CQ9pbR6QVTw7YEnsJnGhp2I-T_HvOBLq1TNeeeDyOW28g";

function Hero() {
    return (
        <section className="relative px-6 lg:px-20 py-20 lg:py-32 overflow-hidden">
            {/* Background blurs */}
            <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left text column */}
                <motion.div
                    className="relative z-10 space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        Leading IT Deployment Experts
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                        Precision IT{' '}
                        <span className="bg-gradient-to-r from-primary to-accent-cyan bg-clip-text text-transparent">
                            Deployment
                        </span>{' '}
                        for Global Enterprises
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
                        Streamline your infrastructure with Accuratte Solutions. We're a fast-growing team specializing in seamless cloud migration and robust hardware architecture setup.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/contact" className="bg-gradient-to-r from-primary to-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-center">
                            Get Started
                        </Link>
                        <Link to="/case-studies" className="border border-slate-200 bg-white backdrop-blur-sm px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors text-center">
                            View Portfolio
                        </Link>
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center gap-6 pt-8 border-t border-slate-200/60">
                        <div>
                            <p className="text-2xl font-bold">50+</p>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Deployments</p>
                        </div>
                        <div className="h-10 w-px bg-slate-200" />
                        <div>
                            <p className="text-2xl font-bold">99.5%</p>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Uptime Rate</p>
                        </div>
                        <div className="h-10 w-px bg-slate-200" />
                        <div>
                            <p className="text-2xl font-bold">18</p>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Engineers</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right image column */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative group border border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent-cyan/10 mix-blend-overlay" />
                        <img
                            alt="High-end server infrastructure"
                            className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-1000"
                            src={HERO_IMG}
                        />
                    </div>
                    {/* Deployment badge */}
                    <div className="absolute -bottom-10 -left-10 p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl max-w-[280px] border border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <span className="font-bold text-sm">Deployment Active</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full mb-2 overflow-hidden">
                            <div className="bg-gradient-to-r from-primary to-accent-cyan h-full w-[85%]" />
                        </div>
                        <p className="text-[10px] text-slate-500 font-medium">85% Complete · Global Node Sync</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
