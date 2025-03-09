import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key_here';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        return next(); // 🛠 Added "return" here
    });
    return; // 🛠 Added this to satisfy TypeScript
};
