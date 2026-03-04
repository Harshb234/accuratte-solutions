import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const steps = [
    {
        num: '01',
        title: 'Discovery',
        description: 'In-depth analysis of your current infrastructure and future scaling goals to build a custom roadmap.',
    },
    {
        num: '02',
        title: 'Architecture',
        description: 'Designing the robust skeletal structure of your IT ecosystem with redundancy and speed in mind.',
    },
    {
        num: '03',
        title: 'Execution',
        description: 'Our elite team handles the heavy lifting, from racking servers to cloud configurations with zero downtime.',
    },
    {
        num: '04',
        title: 'Optimization',
        description: 'Continuous testing and fine-tuning post-deployment to ensure your systems perform at peak efficiency.',
    },
];

function Process() {
    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <section className="py-24 bg-slate-900 text-white px-6 lg:px-20 relative overflow-hidden" id="process">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-[120px] rounded-full translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent-cyan/5 blur-[120px] rounded-full -translate-x-1/4" />
            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <div className="mb-20 text-center space-y-4">
                    <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Methodology</h2>
                    <h3 className="text-4xl lg:text-5xl font-black">A Streamlined Deployment Process</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative space-y-6"
                        >
                            <div className="text-7xl font-black text-white/5 absolute -top-10 -left-4">{step.num}</div>
                            <h4 className="text-xl font-bold pt-4">{step.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                            <div className="h-1 w-12 bg-primary/40 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;
