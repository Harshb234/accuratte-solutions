import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBfGKBxJ1dcVB_pmJg6LAAj6jTIuS44VhVKQbrvztHcEnECXqHzUn2yWw3no0Cp9aoJnTvg_nzR-pkJXFCloEE-AoQwFNp71UlH0fS_QWcPmNPeluElmz53WGQRPRXEmPHwnUA7ueKvWUMyNsuZybIEzUWpBvz6RCs6ESttSF-fVCxip6pnB3YDCKz31Ms05xGiDr-JJgyaBssPjMYzd7elk7AnLrxHBx4CQ9pbR6QVTw7YEnsJnGhp2I-T_HvOBLq1TNeeeDyOW28g";

const services = [
    {
        icon: 'cloud_upload',
        title: 'Cloud Migration',
        description: 'Transition your systems to modern, scalable cloud architectures with minimal downtime and strong security practices.',
        image: true,
        imgClass: 'rounded-2xl',
        blobColor: 'bg-sky-100',
    },
    {
        icon: null,
        title: 'Hardware Infrastructure',
        description: 'Custom hardware provisioning and network setup tailored to your performance requirements and growth plans.',
        image: true,
        imgClass: 'rounded-full border-4 border-white',
        blobColor: 'bg-blue-100',
    },
    {
        icon: null,
        title: 'Cybersecurity Deployment',
        description: 'Security best practices baked into your deployment pipeline, from firewall configuration to identity management.',
        image: true,
        imgClass: 'rounded-2xl',
        blobColor: 'bg-indigo-100',
    },
    {
        icon: 'hub',
        title: 'Network Optimization',
        description: "Fine-tune your existing network for low latency and high availability. We handle the complex routing so you don't have to.",
        image: false,
        iconColor: 'text-cyan-600',
        blobColor: 'bg-cyan-100',
    },
    {
        icon: 'monitoring',
        title: '24/7 Monitoring',
        description: 'Round-the-clock infrastructure surveillance and incident response to keep your business running smoothly at all times.',
        image: false,
        iconColor: 'text-blue-600',
        blobColor: 'bg-slate-100',
    },
    {
        icon: 'terminal',
        title: 'DevOps Integration',
        description: 'Bridge the gap between development and operations with automated CI/CD pipelines and container orchestration.',
        image: false,
        iconColor: 'text-primary',
        blobColor: 'bg-blue-50',
    },
];

const steps = [
    { num: '01', title: 'Discovery', description: 'We analyze your current stack and business objectives to define the perfect deployment strategy.' },
    { num: '02', title: 'Architecture', description: 'Our lead engineers design a scalable, secure blueprint for your new infrastructure environment.' },
    { num: '03', title: 'Execution', description: 'Rapid deployment and migration led by our specialized teams with zero business disruption.' },
    { num: '04', title: 'Optimization', description: 'Continuous tuning and ongoing support to ensure your systems perform at their peak 24/7.' },
];

function ServicesPage() {
    const [heroRef, heroInView] = useInView({ threshold: 0.1 });
    const [cardsRef, cardsInView] = useInView({ threshold: 0.05 });
    const [processRef, processInView] = useInView({ threshold: 0.1 });
    const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

    return (
        <>
            {/* Hero */}
            <section className="relative pt-44 pb-20 px-6 flex flex-col items-center text-center overflow-visible">
                <div className="max-w-4xl mx-auto space-y-8 relative z-10" ref={heroRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 bg-white/50 border border-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900"
                    >
                        Comprehensive <span className="text-primary">Deployment</span> Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        From initial architecture to global scale, we provide end-to-end IT deployment services tailored for the world's most innovative companies.
                    </motion.p>
                </div>
            </section>

            {/* Service Cards Grid */}
            <section className="py-20 px-6" id="services">
                <div className="max-w-7xl mx-auto" ref={cardsRef}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/60 backdrop-blur-[10px] border border-white/80 p-8 md:p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                {/* Icon blob */}
                                <div className="relative w-24 h-24 mb-8">
                                    <div className={`absolute inset-0 ${service.blobColor} opacity-50 group-hover:rotate-12 transition-transform`} style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {service.image ? (
                                            <img
                                                alt={service.title}
                                                className={`w-16 h-16 object-cover shadow-lg transform ${index === 0 ? '-rotate-3' : index === 1 ? 'rotate-3' : '-rotate-6'} group-hover:rotate-0 transition-transform ${service.imgClass}`}
                                                src={HERO_IMG}
                                            />
                                        ) : (
                                            <span className={`material-symbols-outlined text-4xl ${service.iconColor}`}>{service.icon}</span>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-extrabold mb-4">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>
                                <Link to="/contact" className="flex items-center gap-2 font-bold text-sm text-primary group/btn">
                                    Learn More
                                    <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 px-6" id="how-it-works">
                <div className="max-w-6xl mx-auto" ref={processRef}>
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={processInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
                        >
                            Our Deployment Process
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={processInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-slate-500 font-medium"
                        >
                            A systematic approach to engineering excellence.
                        </motion.p>
                    </div>

                    <div className="relative flex flex-col md:flex-row gap-12 justify-between">
                        {/* Connector line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-1 z-0 opacity-20" style={{ background: 'repeating-linear-gradient(90deg, #0099ff 0, #0099ff 4px, transparent 4px, transparent 8px)' }} />

                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                animate={processInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative z-10 flex flex-col items-center text-center max-w-[280px] mx-auto"
                            >
                                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border-4 border-primary relative">
                                    <span className="text-2xl font-black text-primary">{step.num}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6">
                <motion.div
                    ref={ctaRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto bg-[#0D0D12] rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    {/* Dot pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                    <div className="relative z-10 space-y-10">
                        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                            Ready to evolve your <br /><span className="text-primary">infrastructure?</span>
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-extrabold text-xl hover:scale-105 transition-transform text-center">
                                Book Strategy Call
                            </Link>
                            <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-full font-extrabold text-xl hover:bg-white/20 transition-colors text-center">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default ServicesPage;
