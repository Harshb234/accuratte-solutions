import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaUsers, FaTasks, FaChartLine, FaEnvelope } from 'react-icons/fa';

function WorkspacePage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else if (!user.isEmployee) {
            navigate('/account');
        }
    }, [user, navigate]);

    if (!user || !user.isEmployee) return null;

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Employee Workspace</h1>
                        <p className="text-slate-500">Welcome back, {user.name} ({user.employeeId})</p>
                    </div>
                    <button
                        onClick={() => {
                            logout();
                            navigate('/');
                        }}
                        className="bg-red-50 text-red-600 px-6 py-2.5 rounded-xl font-semibold hover:bg-red-100 transition-colors"
                    >
                        Sign Out
                    </button>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                            <FaTasks />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Tasks</h3>
                        <p className="text-slate-500 mt-1">12 active</p>
                    </motion.div>
                    
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                            <FaUsers />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Clients</h3>
                        <p className="text-slate-500 mt-1">45 assigned</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                            <FaChartLine />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Reports</h3>
                        <p className="text-slate-500 mt-1">Generated this week</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                            <FaEnvelope />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Messages</h3>
                        <p className="text-slate-500 mt-1">3 unread</p>
                    </motion.div>
                </div>

                {/* Main Content Area */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 min-h-[400px]">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-slate-800">System Login</h4>
                                <p className="text-sm text-slate-500">You logged into the workspace successfully.</p>
                            </div>
                            <span className="text-sm text-slate-400">Just now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkspacePage;
