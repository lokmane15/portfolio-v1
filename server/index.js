require('dotenv').config(); // <--- 1. ضروري تكون هي اللولة كاع
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(cors());
app.use(express.json());

// --- Data Mock (المشاريع والتصاور) ---
const projects = [
    {
        id: 1,
        title: "Nike Store Clone",
        desc: "A modern E-commerce platform built with MERN Stack.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
        link: "#",
        screenshots: [
            "https://images.unsplash.com/photo-1472851294608-41531b665065?w=800&q=80",
            "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&q=80",
            "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
        ]
    },
    {
        id: 2,
        title: "Crypto Dashboard",
        desc: "Real-time cryptocurrency dashboard tracking prices.",
        tech: ["React", "Tailwind CSS", "Chart.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        link: "#",
        screenshots: [
            "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80",
            "https://images.unsplash.com/photo-1639322537228-ad7117a7a6ebd?w=800&q=80",
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80"
        ]
    },
    {
        id: 3,
        title: "Social Media App",
        desc: "A social networking app similar to Instagram.",
        tech: ["Socket.io", "Express", "React", "Firebase"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        link: "#",
        screenshots: [
            "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&q=80",
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
        ]
    }
];

// --- Routes ---

app.get('/', (req, res) => {
    res.send('Server is Running!');
});

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const project = projects.find(p => p.id === id);
    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ message: "Project not found" });
    }
});

// 👇👇 Route CONTACT (Secure Version) 👇👇
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // إعدادات Gmail باستعمال المتغيرات السرية
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // كيجبد الايميل من .env
            pass: process.env.EMAIL_PASS  // كيجبد المودباس من .env
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // كيصيفط باسمك
        to: process.env.EMAIL_USER,   // كيصيفط ليك نيت
        replyTo: email, 
        subject: `New Message from Portfolio: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ success: true, message: "Email sent!" });
    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ success: false, message: "Error sending email" });
    }
});

// إعداد البورت (باش يخدم ف Render وف Local)
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});