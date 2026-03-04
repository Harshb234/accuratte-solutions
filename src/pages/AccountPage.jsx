import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AccountPage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate('/login');
    }, [user, navigate]);

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', maxWidth: '520px' }}
                className="relative z-10"
            >
                {/* Profile Card */}
                <div style={{
                    background: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.9)',
                    borderRadius: '28px',
                    padding: '40px',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.02)'
                }}>
                    {/* Avatar + Name */}
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0099ff, #00d4ff)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', fontSize: '28px', fontWeight: 800,
                            margin: '0 auto 16px', boxShadow: '0 8px 24px rgba(0,153,255,0.3)'
                        }}>
                            {user.avatar}
                        </div>
                        <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                            {user.name}
                        </h1>
                        <p style={{ fontSize: '14px', color: '#64748b' }}>{user.email}</p>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            background: '#f0f9ff', border: '1px solid #bae6fd',
                            borderRadius: '20px', padding: '4px 14px', marginTop: '12px',
                            fontSize: '12px', fontWeight: 700, color: '#0099ff'
                        }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0099ff' }} />
                            {user.plan} Plan
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
                        <div style={{
                            background: '#f8fafc', borderRadius: '16px', padding: '16px',
                            border: '1px solid #e2e8f0'
                        }}>
                            <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Provider</p>
                            <p style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>{user.provider}</p>
                        </div>
                        <div style={{
                            background: '#f8fafc', borderRadius: '16px', padding: '16px',
                            border: '1px solid #e2e8f0'
                        }}>
                            <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Member Since</p>
                            <p style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>{user.joinDate}</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px',
                        marginBottom: '28px', textAlign: 'center'
                    }}>
                        <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '16px', border: '1px solid #e2e8f0' }}>
                            <p style={{ fontSize: '24px', fontWeight: 800, color: '#0099ff' }}>1</p>
                            <p style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8' }}>Projects</p>
                        </div>
                        <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '16px', border: '1px solid #e2e8f0' }}>
                            <p style={{ fontSize: '24px', fontWeight: 800, color: '#0099ff' }}>3</p>
                            <p style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8' }}>Deployments</p>
                        </div>
                        <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '16px', border: '1px solid #e2e8f0' }}>
                            <p style={{ fontSize: '24px', fontWeight: 800, color: '#0099ff' }}>99.5%</p>
                            <p style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8' }}>Uptime</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <button
                            onClick={() => navigate('/services')}
                            style={{
                                width: '100%', padding: '14px', borderRadius: '14px',
                                background: '#0099ff', color: 'white', fontWeight: 700,
                                fontSize: '15px', border: 'none', cursor: 'pointer',
                                boxShadow: '0 4px 14px rgba(0,153,255,0.3)'
                            }}
                        >
                            Explore Services
                        </button>
                        <button
                            onClick={handleLogout}
                            style={{
                                width: '100%', padding: '14px', borderRadius: '14px',
                                background: 'transparent', color: '#ef4444', fontWeight: 700,
                                fontSize: '15px', border: '1.5px solid #fecaca', cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => { e.target.style.background = '#fef2f2'; }}
                            onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default AccountPage;
