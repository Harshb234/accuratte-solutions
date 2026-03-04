import { motion } from 'framer-motion';
import { useState } from 'react';

const CONTACT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBfGKBxJ1dcVB_pmJg6LAAj6jTIuS44VhVKQbrvztHcEnECXqHzUn2yWw3no0Cp9aoJnTvg_nzR-pkJXFCloEE-AoQwFNp71UlH0fS_QWcPmNPeluElmz53WGQRPRXEmPHwnUA7ueKvWUMyNsuZybIEzUWpBvz6RCs6ESttSF-fVCxip6pnB3YDCKz31Ms05xGiDr-JJgyaBssPjMYzd7elk7AnLrxHBx4CQ9pbR6QVTw7YEnsJnGhp2I-T_HvOBLq1TNeeeDyOW28g";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Cloud Migration',
        details: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! We will be in touch within 24 hours.');
        setFormData({ name: '', email: '', service: 'Cloud Migration', details: '' });
    };

    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left column */}
                    <motion.div
                        className="space-y-12"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                                Let's build your <span className="text-primary">future</span>
                            </h1>
                            <p className="text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
                                Ready to scale your infrastructure? Our IT experts are standing by to help you deploy with precision using the latest cloud technologies.
                            </p>
                        </div>

                        {/* Floating image */}
                        <div className="relative inline-block">
                            <div className="w-48 h-48 md:w-64 md:h-64 bg-primary rounded-[3rem] p-4 relative z-10" style={{ animation: 'float 6s ease-in-out infinite' }}>
                                <img
                                    alt="Expert Support"
                                    className="w-full h-full object-cover rounded-[2.5rem]"
                                    src={CONTACT_IMG}
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00f2fe] rounded-full flex items-center justify-center text-white shadow-xl z-20 border-4 border-white">
                                <span className="material-symbols-outlined text-4xl">chat_bubble</span>
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-primary">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Email us</h4>
                                    <p className="text-slate-500 text-sm">hello@accuratte.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-[#00f2fe]">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Call us</h4>
                                    <p className="text-slate-500 text-sm">+1 (555) 000-1234</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white shadow-2xl"
                        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.06)' }}
                    >
                        <div className="mb-10">
                            <h2 className="text-3xl font-extrabold mb-2">Book a Demo</h2>
                            <p className="text-slate-500 font-medium">Fill out the form and we'll be in touch within 24 hours.</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-0 focus:border-primary focus:shadow-[0_0_0_4px_rgba(0,153,255,0.1)] transition-all text-sm font-medium outline-none"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-0 focus:border-primary focus:shadow-[0_0_0_4px_rgba(0,153,255,0.1)] transition-all text-sm font-medium outline-none"
                                        placeholder="john@company.com"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Service of Interest</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-0 focus:border-primary focus:shadow-[0_0_0_4px_rgba(0,153,255,0.1)] transition-all text-sm font-medium outline-none"
                                >
                                    <option>Cloud Migration</option>
                                    <option>Infrastructure Deployment</option>
                                    <option>Security Audit</option>
                                    <option>Managed Services</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Project Details</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-[2rem] border border-slate-200 bg-slate-50/50 focus:ring-0 focus:border-primary focus:shadow-[0_0_0_4px_rgba(0,153,255,0.1)] transition-all text-sm font-medium outline-none resize-none"
                                    placeholder="Tell us about your IT goals..."
                                    rows="4"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-slate-900 text-white py-5 rounded-full font-bold text-lg hover:bg-primary transition-all flex items-center justify-center gap-2 group shadow-lg"
                            >
                                Send Message
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>

                            <p className="text-center text-xs text-slate-400 font-medium">
                                By clicking send, you agree to our <a className="underline hover:text-primary" href="#">Privacy Policy</a>.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;
