import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import WorkspacePage from './pages/WorkspacePage';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';

function App() {
    return (
        <Router>
            <AuthProvider>
                <ScrollToTop />
                <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-mesh">
                    <Navbar />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/signup" element={<SignUpPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/account" element={<AccountPage />} />
                            <Route path="/workspace" element={<WorkspacePage />} />
                        </Routes>
                    </main>
                    <Footer />
                    <Chatbot />
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
