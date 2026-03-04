import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';

function CTA() {
    const [ref, isInView] = useInView({ threshold: 0.2 });

    return (
        <section className="py-24 px-6 lg:px-20 relative">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="max-w-7xl mx-auto bg-gradient-to-br from-primary to-[#007acc] rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/40"
            >
                {/* Dot pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
                            backgroundSize: '30px 30px',
                        }}
                    />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h3 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                        Ready to evolve your IT infrastructure?
                    </h3>
                    <p className="text-xl text-white/90 font-medium">
                        Join 50+ companies who trust Accuratte Solutions for their deployment needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                        <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-black/10 text-center">
                            Book a Strategy Call
                        </Link>
                        <Link to="/contact" className="bg-primary/30 border border-white/20 backdrop-blur-md px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-colors text-center">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default CTA;
