import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const MOCK_USERS = {
    google: {
        name: 'Harsh Bambatkar',
        email: 'harshbambatkar2004@gmail.com',
        avatar: 'HB',
        provider: 'Google',
        plan: 'Starter',
        joinDate: 'March 2026',
    },
    github: {
        name: 'Harsh Bambatkar',
        email: 'harshbambatkar@github.com',
        avatar: 'HB',
        provider: 'GitHub',
        plan: 'Starter',
        joinDate: 'March 2026',
    },
    email: {
        name: 'User',
        email: '',
        avatar: 'U',
        provider: 'Email',
        plan: 'Free Trial',
        joinDate: 'March 2026',
    }
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('accuratte_user');
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('accuratte_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('accuratte_user');
        }
    }, [user]);

    const loginWithGoogle = () => {
        setUser(MOCK_USERS.google);
    };

    const loginWithGithub = () => {
        setUser(MOCK_USERS.github);
    };

    const loginWithEmail = (email, name) => {
        const initials = (name || email).split(/[\s@]/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
        setUser({ ...MOCK_USERS.email, email, name: name || email.split('@')[0], avatar: initials });
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, loginWithGoogle, loginWithGithub, loginWithEmail, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}
