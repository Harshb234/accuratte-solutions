import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public
router.post('/signup', async (req, res) => {
    const { name, email, password, isEmployee, employeeId } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        if (isEmployee && employeeId) {
            const employeeIdExists = await User.findOne({ employeeId });
            if (employeeIdExists) {
                return res.status(400).json({ message: 'Employee ID already exists' });
            }
        }

        const user = await User.create({
            name,
            email,
            password,
            isEmployee: isEmployee || false,
            employeeId: employeeId || null
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isEmployee: user.isEmployee,
                employeeId: user.employeeId,
                avatar: user.avatar,
                provider: user.provider,
                plan: user.plan,
                joinDate: user.joinDate,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
    // Check if today is a weekend/holiday
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sunday, 6 is Saturday
    
    // Check if it's a weekend (we can also add specific holiday dates here)
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return res.status(403).json({ message: 'Access denied. Logins are disabled during weekends and holidays.' });
    }

    const { email, password, isEmployee, employeeId } = req.body;

    try {
        let query = {};
        if (isEmployee) {
            if (!employeeId) return res.status(400).json({ message: 'Employee ID is required' });
            query = { employeeId };
        } else {
            if (!email) return res.status(400).json({ message: 'Email is required' });
            query = { email };
        }
        
        const user = await User.findOne(query);

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isEmployee: user.isEmployee,
                employeeId: user.employeeId,
                avatar: user.avatar,
                provider: user.provider,
                plan: user.plan,
                joinDate: user.joinDate,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
