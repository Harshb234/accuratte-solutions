import AccuratLogo from './AccuratLogo';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const { user, logout } = useAuth();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-background-light/80 backdrop-blur-md px-6 lg:px-20 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="text-primary size-8">
                        <AccuratLogo />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Accuratte Solutions</span>
                </Link>
                <nav className="hidden md:flex items-center gap-10">
                    <Link className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-primary' : 'hover:text-primary'}`} to="/services">Services</Link>
                    <Link className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`} to="/#process">Process</Link>
                    <Link className={`text-sm font-medium transition-colors ${isActive('/case-studies') ? 'text-primary' : 'hover:text-primary'}`} to="/case-studies">Case Studies</Link>
                    <Link className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`} to="/about">About</Link>
                </nav>
                <div className="flex items-center gap-3">
                    {user ? (
                        /* Logged-in state: Avatar dropdown */
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-slate-100 transition-colors"
                            >
                                <div style={{
                                    width: '36px', height: '36px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #0099ff, #00d4ff)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', fontSize: '13px', fontWeight: 800,
                                    boxShadow: '0 2px 8px rgba(0,153,255,0.3)'
                                }}>
                                    {user.avatar}
                                </div>
                                <span className="text-sm font-semibold text-slate-700 hidden sm:block">{user.name.split(' ')[0]}</span>
                                <span className="material-symbols-outlined text-sm text-slate-400">expand_more</span>
                            </button>

                            {dropdownOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden"
                                        style={{ animation: 'fadeInDown 0.15s ease-out' }}
                                    >
                                        {/* User info */}
                                        <div className="px-4 py-3 border-b border-slate-100">
                                            <p className="text-sm font-bold text-slate-800">{user.name}</p>
                                            <p className="text-xs text-slate-500 mt-0.5">{user.email}</p>
                                        </div>
                                        {/* Links */}
                                        <div className="py-1">
                                            <Link to="/account" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                                <span className="material-symbols-outlined text-lg text-slate-400">person</span>
                                                My Account
                                            </Link>
                                            <Link to="/services" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                                <span className="material-symbols-outlined text-lg text-slate-400">deployed_code</span>
                                                My Projects
                                            </Link>
                                            <Link to="/contact" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                                <span className="material-symbols-outlined text-lg text-slate-400">settings</span>
                                                Settings
                                            </Link>
                                        </div>
                                        {/* Sign out */}
                                        <div className="border-t border-slate-100 py-1">
                                            <button
                                                onClick={() => { logout(); setDropdownOpen(false); }}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full text-left"
                                            >
                                                <span className="material-symbols-outlined text-lg">logout</span>
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        /* Logged-out state: Sign In + Contact */
                        <>
                            <Link to="/login" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors hidden sm:block">Sign In</Link>
                            <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                                Contact Us
                            </Link>
                        </>
                    )}
                    <button className="md:hidden text-slate-600" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="material-symbols-outlined text-2xl">{menuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden mt-4 pb-4 border-t border-slate-200/50 pt-4 space-y-4 px-2">
                    <Link className="block text-sm font-medium hover:text-primary transition-colors" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className="block text-sm font-medium hover:text-primary transition-colors" to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link className="block text-sm font-medium hover:text-primary transition-colors" to="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link>
                    <Link className="block text-sm font-medium hover:text-primary transition-colors" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link className="block text-sm font-medium hover:text-primary transition-colors" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    {user ? (
                        <>
                            <Link className="block text-sm font-medium hover:text-primary transition-colors" to="/account" onClick={() => setMenuOpen(false)}>My Account</Link>
                            <button className="block text-sm font-medium text-red-500 hover:text-red-600 transition-colors" onClick={() => { logout(); setMenuOpen(false); }}>Sign Out</button>
                        </>
                    ) : (
                        <>
                            <Link className="block text-sm font-medium hover:text-primary transition-colors" to="/login" onClick={() => setMenuOpen(false)}>Sign In</Link>
                            <Link className="block text-sm font-medium hover:text-primary transition-colors" to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
                        </>
                    )}
                </div>
            )}
            <style>{`@keyframes fadeInDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </header>
    );
}

export default Navbar;
