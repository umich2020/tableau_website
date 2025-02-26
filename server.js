const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//install dependencies via npm install express body-parser cors

const app = express();
const port = 3005;

app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Dummy user database
const users = [
    { username: 'test', password: 'password123' }
];

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // In a real application, you would use proper JWT or session management
        res.json({ success: true, token: 'dummy-token' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 