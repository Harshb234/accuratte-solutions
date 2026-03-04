import AccuratLogo from './AccuratLogo';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-20 pb-10 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                {/* Brand */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="text-primary size-8">
                            <AccuratLogo />
                        </div>
                        <span className="text-2xl font-black tracking-tight">Accuratte Solutions</span>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        A fast-growing IT deployment and cloud infrastructure startup helping companies scale with confidence since 2022.
                    </p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all" href="https://accuratte.com" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined text-lg">public</span>
                        </a>
                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all" href="mailto:contact@accuratte.com">
                            <span className="material-symbols-outlined text-lg">alternate_email</span>
                        </a>
                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all" href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined text-lg">monitoring</span>
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h5 className="font-bold mb-6">Services</h5>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><Link className="hover:text-primary transition-colors" to="/services">Cloud Migration</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/services">Data Center Setup</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/services">Network Security</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/services">IT Consulting</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h5 className="font-bold mb-6">Company</h5>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/services#how-it-works">Process</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/case-studies">Case Studies</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/about">Careers</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h5 className="font-bold mb-6">Support</h5>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><Link className="hover:text-primary transition-colors" to="/contact">Contact</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/services">Resources</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/services">Documentation</Link></li>
                        <li><Link className="hover:text-primary transition-colors" to="/about">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-500 text-xs font-medium">© 2024 Accuratte Solutions Inc. All rights reserved.</p>
                <div className="flex gap-8 text-xs font-medium text-slate-500">
                    <Link className="hover:text-primary" to="/about">Privacy Policy</Link>
                    <Link className="hover:text-primary" to="/about">Cookie Settings</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
