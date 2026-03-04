import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: 'cloud_upload',
        title: 'Cloud Migration',
        description: 'Scalable cloud architectures optimized for extreme performance, high availability, and iron-clad security protocols.',
    },
    {
        icon: 'dns',
        title: 'Infrastructure Setup',
        description: 'Expert physical hardware configuration, data center rack deployments, and complex networking architecture setup.',
    },
    {
        icon: 'security',
        title: 'Security Integration',
        description: 'Seamless integration of advanced security protocols, zero-trust frameworks, and threat monitoring during deployment.',
    },
];

function Services() {
    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <section className="py-24 lg:py-32 px-6 lg:px-20 relative" id="services">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">What we do</h2>
                        <h3 className="text-4xl lg:text-5xl font-black tracking-tight">End-to-End Enterprise Deployment Solutions</h3>
                    </div>
                    <p className="text-slate-600 max-w-sm">
                        We help growing tech companies deploy and manage their infrastructure with confidence and speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group p-8 rounded-3xl border border-slate-200 hover:border-primary/40 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="bg-primary/5 text-primary p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                            <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                            <Link className="inline-flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform" to="/services">
                                Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
