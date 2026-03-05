import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccuratLogo from '../components/AccuratLogo';
import { useAuth } from '../context/AuthContext';

function SignUpPage() {
    const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
    const [toast, setToast] = useState('');
    const { loginWithGoogle, loginWithGithub, signup, loading, error } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirm) {
            showToast('Passwords do not match');
            return;
        }
        try {
            await signup(form.name, form.email, form.password);
            showToast('Account created! Redirecting...');
            setTimeout(() => navigate('/account'), 800);
        } catch (err) {
            // Error managed by AuthContext
        }
    };


    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(''), 3000);
    };

    const handleGoogleLogin = () => {
        loginWithGoogle();
        showToast('Signed up with Google!');
        setTimeout(() => navigate('/account'), 800);
    };

    const handleGithubLogin = () => {
        loginWithGithub();
        showToast('Signed up with GitHub!');
        setTimeout(() => navigate('/account'), 800);
    };

    const inputStyle = {
        width: '100%', padding: '12px 16px', borderRadius: '12px',
        border: '1.5px solid #e2e8f0', background: '#f8fafc',
        fontSize: '14px', outline: 'none', boxSizing: 'border-box',
        transition: 'border-color 0.2s, box-shadow 0.2s'
    };

    const handleFocus = (e) => { e.target.style.borderColor = '#0099ff'; e.target.style.boxShadow = '0 0 0 4px rgba(0,153,255,0.1)'; };
    const handleBlur = (e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; };

    return (
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/15 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', maxWidth: '440px' }}
                className="relative z-10"
            >
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="text-primary size-7"><AccuratLogo /></div>
                        <span className="text-xl font-black tracking-tight">Accuratte Solutions</span>
                    </Link>
                    <h1 className="text-3xl font-extrabold tracking-tight">Create your account</h1>
                    <p className="text-slate-500 mt-2 text-sm">Start your 14-day free trial. No credit card required.</p>
                </div>

                {/* Form card */}
                <div style={{
                    background: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.9)',
                    borderRadius: '24px',
                    padding: '32px',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.02)'
                }}>
                    {/* Social login buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                        <button onClick={handleGoogleLogin} style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                            padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0',
                            background: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer'
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        <button onClick={handleGithubLogin} style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                            padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0',
                            background: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer'
                        }}>
                            <svg width="18" height="18" fill="#333" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            GitHub
                        </button>
                    </div>

                    {/* Divider */}
                    <div style={{ position: 'relative', marginBottom: '24px' }}>
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '100%', borderTop: '1px solid #e2e8f0' }} />
                        </div>
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <span style={{ background: 'white', padding: '0 16px', fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                Or continue with email
                            </span>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div style={{
                            marginBottom: '20px', padding: '12px', borderRadius: '12px',
                            background: '#fef2f2', border: '1px solid #fee2e2',
                            color: '#dc2626', fontSize: '13px', fontWeight: 500,
                            display: 'flex', alignItems: 'center', gap: '8px'
                        }}>
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {error}
                        </div>
                    )}

                    {/* Form */}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Full Name</label>
                            <input name="name" value={form.name} onChange={handleChange} type="text" required placeholder="John Doe" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Email Address</label>
                            <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="john@company.com" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Password</label>
                            <input name="password" value={form.password} onChange={handleChange} type="password" required placeholder="••••••••" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Confirm Password</label>
                            <input name="confirm" value={form.confirm} onChange={handleChange} type="password" required placeholder="••••••••" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '100%', padding: '14px', borderRadius: '12px',
                                background: loading ? '#94a3b8' : '#0099ff', color: 'white', fontWeight: 700,
                                fontSize: '15px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                                boxShadow: loading ? 'none' : '0 4px 14px rgba(0,153,255,0.3)',
                                transition: 'background 0.2s, transform 0.1s'
                            }}
                            onMouseDown={(e) => !loading && (e.target.style.transform = 'scale(0.98)')}
                            onMouseUp={(e) => !loading && (e.target.style.transform = 'scale(1)')}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>

                    </form>

                    <p style={{ textAlign: 'center', fontSize: '13px', color: '#64748b', marginTop: '20px' }}>
                        Already have an account? <Link to="/login" style={{ color: '#0099ff', fontWeight: 700, textDecoration: 'none' }}>Sign in</Link>
                    </p>
                </div>

                <p style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8', marginTop: '20px' }}>
                    By signing up, you agree to our <Link to="/about" style={{ textDecoration: 'underline' }}>Terms of Service</Link> and <Link to="/about" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>.
                </p>
            </motion.div>

            {/* Toast notification */}
            {toast && (
                <div style={{
                    position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
                    background: '#0f172a', color: 'white', padding: '14px 28px', borderRadius: '14px',
                    fontSize: '14px', fontWeight: 600, boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px',
                    animation: 'fadeInUp 0.3s ease-out'
                }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                    {toast}
                </div>
            )}
            <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateX(-50%) translateY(20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }`}</style>
        </section>
    );
}

export default SignUpPage;
