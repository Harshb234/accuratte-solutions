import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChatAlt2, HiX, HiPaperAirplane } from 'react-icons/hi';
import { RiRobot2Fill } from 'react-icons/ri';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { role: 'model', parts: [{ text: "Hello! I'm the Accuratte Solutions AI. How can I assist you today?" }] }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory, isLoading]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        const userMessage = message.trim();
        setMessage('');
        
        // Add user message to history
        const newHistory = [
            ...chatHistory,
            { role: 'user', parts: [{ text: userMessage }] }
        ];
        setChatHistory(newHistory);
        setIsLoading(true);

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const response = await fetch(`${API_URL}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: userMessage,
                    history: chatHistory.filter((m, i) => !(i === 0 && m.role === 'model'))
                }),
            });

            const data = await response.json();
            
            if (data.error) {
                setChatHistory(prev => [
                    ...prev,
                    { role: 'model', parts: [{ text: `Error: ${data.error}` }] }
                ]);
            } else {
                setChatHistory(prev => [
                    ...prev,
                    { role: 'model', parts: [{ text: data.message }] }
                ]);
            }
        } catch (error) {
            setChatHistory(prev => [
                ...prev,
                { role: 'model', parts: [{ text: "Sorry, I'm having trouble connecting right now. Please try again later." }] }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-display">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
            >
                {isOpen ? <HiX className="text-2xl" /> : <HiChatAlt2 className="text-2xl" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 right-0 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl md:w-[400px]"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 bg-primary p-4 text-white">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                <RiRobot2Fill className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold">AI Assistant</h3>
                                <p className="text-xs text-white/80 flex items-center gap-1">
                                    <span className="h-2 w-2 rounded-full bg-green-400"></span> Online
                                </p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background-light/30">
                            {chatHistory.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${
                                            msg.role === 'user'
                                                ? 'bg-primary text-white rounded-tr-none'
                                                : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                        }`}
                                    >
                                        {msg.parts[0].text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-3 shadow-sm">
                                        <div className="flex gap-1">
                                            <motion.span
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ repeat: Infinity, duration: 1 }}
                                                className="h-1.5 w-1.5 rounded-full bg-gray-400"
                                            ></motion.span>
                                            <motion.span
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                                                className="h-1.5 w-1.5 rounded-full bg-gray-400"
                                            ></motion.span>
                                            <motion.span
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                                                className="h-1.5 w-1.5 rounded-full bg-gray-400"
                                            ></motion.span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="border-t border-gray-100 p-4 bg-white">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-4 pr-12 text-sm outline-none transition-all focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-primary/10"
                                />
                                <button
                                    type="submit"
                                    disabled={!message.trim() || isLoading}
                                    className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white transition-all hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary"
                                >
                                    <HiPaperAirplane className="rotate-90 text-lg" />
                                </button>
                            </div>
                            <p className="mt-2 text-center text-[10px] text-gray-400">
                                Powered by Accuratte Solutions AI
                            </p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
