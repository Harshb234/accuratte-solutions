import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccuratLogo from './AccuratLogo';

export default function HolidayLockoutScreen({ message }) {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(16px)',
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '24px',
                    padding: '48px',
                    maxWidth: '480px',
                    width: '100%',
                    textAlign: 'center',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative glows */}
                <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'rgba(0, 153, 255, 0.15)', filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none' }} />
                
                <motion.div 
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    style={{ color: '#0099ff', display: 'flex', justifyContent: 'center', marginBottom: '24px' }}
                >
                    <div style={{ width: '48px', height: '48px' }}>
                        <AccuratLogo />
                    </div>
                </motion.div>
                
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                    Access Restricted
                </h2>
                
                <div style={{ 
                    background: 'rgba(239, 68, 68, 0.1)', 
                    border: '1px solid rgba(239, 68, 68, 0.2)', 
                    borderRadius: '12px', 
                    padding: '16px', 
                    marginBottom: '24px' 
                }}>
                    <p style={{ color: '#fca5a5', fontSize: '14px', fontWeight: 500, lineHeight: 1.6 }}>
                        {message || "Logins are currently disabled due to weekend or holiday observances."}
                    </p>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.6, marginBottom: '32px' }}>
                    At Accuratte Solutions, we value work-life balance and system integrity. Normal access will resume on the next business day. For urgent inquiries, please contact your system administrator.
                </p>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <Link to="/" style={{
                        flex: 1,
                        padding: '12px 24px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        textAlign: 'center'
                    }}
                    onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                    onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                    >
                        Return Home
                    </Link>
                    <a href="mailto:support@accuratte.com" style={{
                        flex: 1,
                        padding: '12px 24px',
                        background: '#0099ff',
                        borderRadius: '12px',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        textAlign: 'center',
                        boxShadow: '0 4px 14px rgba(0,153,255,0.3)'
                    }}
                    onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 20px rgba(0,153,255,0.4)'; }}
                    onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 14px rgba(0,153,255,0.3)'; }}
                    >
                        Contact Support
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
