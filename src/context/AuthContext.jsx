import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('accuratte_user');
        return saved ? JSON.parse(saved) : null;
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            localStorage.setItem('accuratte_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('accuratte_user');
        }
    }, [user]);

    const loginWithEmail = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Login failed');
            setUser(data);
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const signup = async (name, email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Signup failed');
            setUser(data);
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const loginWithGoogle = () => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            setError('Access denied. Logins are disabled during weekends and holidays.');
            throw new Error('Access denied');
        }

        setError('Google login is not implemented yet. Please use email and password.');
        throw new Error('Google login is not implemented yet.');
    };

    const loginWithGithub = () => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            setError('Access denied. Logins are disabled during weekends and holidays.');
            throw new Error('Access denied');
        }

        setError('GitHub login is not implemented yet. Please use email and password.');
        throw new Error('GitHub login is not implemented yet.');
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, loading, error, loginWithGoogle, loginWithGithub, loginWithEmail, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}

