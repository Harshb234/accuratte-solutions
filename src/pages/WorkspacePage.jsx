import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaTrash, FaCheck, FaPlay, FaCircle } from 'react-icons/fa';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function WorkspacePage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showNewTask, setShowNewTask] = useState(false);
    const [newTaskForm, setNewTaskForm] = useState({ title: '', description: '', priority: 'Medium' });

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else if (!user.isEmployee) {
            navigate('/account');
        } else {
            fetchTasks();
        }
    }, [user, navigate]);

    const fetchTasks = async () => {
        try {
            const res = await fetch(`${API_URL}/tasks`, {
                headers: { 'Authorization': `Bearer ${user.token}` }
            });
            const data = await res.json();
            if (res.ok) {
                setTasks(data);
            }
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateTask = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(newTaskForm)
            });
            const data = await res.json();
            if (res.ok) {
                setTasks([...tasks, data]);
                setNewTaskForm({ title: '', description: '', priority: 'Medium' });
                setShowNewTask(false);
            }
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const updateTaskStatus = async (id, newStatus) => {
        try {
            const res = await fetch(`${API_URL}/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) {
                setTasks(tasks.map(t => t._id === id ? { ...t, status: newStatus } : t));
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            const res = await fetch(`${API_URL}/tasks/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${user.token}` }
            });
            if (res.ok) {
                setTasks(tasks.filter(t => t._id !== id));
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    if (!user || !user.isEmployee) return null;

    const renderTaskCard = (task) => (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            key={task._id}
            className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3 group"
        >
            <div className="flex justify-between items-start">
                <h4 className="font-bold text-slate-800">{task.title}</h4>
                <button onClick={() => deleteTask(task._id)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaTrash />
                </button>
            </div>
            <p className="text-sm text-slate-500 line-clamp-2">{task.description}</p>
            <div className="flex justify-between items-center mt-2 pt-4 border-t border-slate-50">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    task.priority === 'High' ? 'bg-red-50 text-red-600' :
                    task.priority === 'Medium' ? 'bg-amber-50 text-amber-600' :
                    'bg-emerald-50 text-emerald-600'
                }`}>
                    {task.priority} Priority
                </span>
                
                <div className="flex gap-2">
                    {task.status !== 'To Do' && (
                        <button onClick={() => updateTaskStatus(task._id, 'To Do')} className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 flex items-center justify-center transition-colors" title="Move to To Do">
                            <FaCircle size={10} />
                        </button>
                    )}
                    {task.status !== 'In Progress' && (
                        <button onClick={() => updateTaskStatus(task._id, 'In Progress')} className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 flex items-center justify-center transition-colors" title="Start Progress">
                            <FaPlay size={10} />
                        </button>
                    )}
                    {task.status !== 'Done' && (
                        <button onClick={() => updateTaskStatus(task._id, 'Done')} className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 hover:bg-emerald-100 flex items-center justify-center transition-colors" title="Mark as Done">
                            <FaCheck size={12} />
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Workspace</h1>
                        <p className="text-slate-500">Welcome back, {user.name} ({user.employeeId})</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setShowNewTask(!showNewTask)}
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center gap-2"
                        >
                            <FaPlus /> New Task
                        </button>
                        <button
                            onClick={() => {
                                logout();
                                navigate('/');
                            }}
                            className="bg-red-50 text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-100 transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {showNewTask && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-8 overflow-hidden"
                        >
                            <form onSubmit={handleCreateTask} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Task Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={newTaskForm.title}
                                            onChange={e => setNewTaskForm({...newTaskForm, title: e.target.value})}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Enter task title"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Priority</label>
                                        <select
                                            value={newTaskForm.priority}
                                            onChange={e => setNewTaskForm({...newTaskForm, priority: e.target.value})}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        >
                                            <option value="Low">Low Priority</option>
                                            <option value="Medium">Medium Priority</option>
                                            <option value="High">High Priority</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                                    <textarea
                                        required
                                        value={newTaskForm.description}
                                        onChange={e => setNewTaskForm({...newTaskForm, description: e.target.value})}
                                        className="w-full flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Task details..."
                                    ></textarea>
                                    <div className="mt-4 flex justify-end">
                                        <button type="submit" className="bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                                            Create Task
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                {loading ? (
                    <div className="flex justify-center py-20 text-slate-400">Loading tasks...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* To Do Column */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-bold text-slate-800 text-lg">To Do</h3>
                                <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                                    {tasks.filter(t => t.status === 'To Do').length}
                                </span>
                            </div>
                            <AnimatePresence>
                                {tasks.filter(t => t.status === 'To Do').map(renderTaskCard)}
                            </AnimatePresence>
                        </div>

                        {/* In Progress Column */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-bold text-slate-800 text-lg">In Progress</h3>
                                <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full">
                                    {tasks.filter(t => t.status === 'In Progress').length}
                                </span>
                            </div>
                            <AnimatePresence>
                                {tasks.filter(t => t.status === 'In Progress').map(renderTaskCard)}
                            </AnimatePresence>
                        </div>

                        {/* Done Column */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-bold text-slate-800 text-lg">Done</h3>
                                <span className="bg-emerald-100 text-emerald-600 text-xs font-bold px-2.5 py-1 rounded-full">
                                    {tasks.filter(t => t.status === 'Done').length}
                                </span>
                            </div>
                            <AnimatePresence>
                                {tasks.filter(t => t.status === 'Done').map(renderTaskCard)}
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WorkspacePage;
