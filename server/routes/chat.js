import express from 'express';

const router = express.Router();

const responses = [
    {
        keywords: ['service', 'offer', 'provide', 'do you do', 'what do'],
        reply: "Accuratte Solutions offers:\n\n• **Digital Transformation** — Modernize your business with cutting-edge technology\n• **Cloud Solutions** — Scalable, secure cloud infrastructure\n• **AI Integration** — Embed intelligent automation into your workflows\n• **Custom Software Development** — Tailor-made applications for your needs\n• **Enterprise Security** — End-to-end protection for your business\n\nWould you like to know more about any of these?"
    },
    {
        keywords: ['digital transformation', 'digitize', 'modernize'],
        reply: "Our **Digital Transformation** service helps businesses move from legacy systems to modern, agile infrastructure. We assess your current processes and build a roadmap to increase efficiency and competitiveness. Want to discuss your specific needs?"
    },
    {
        keywords: ['cloud', 'aws', 'azure', 'hosting', 'infrastructure'],
        reply: "Our **Cloud Solutions** include cloud migration, architecture design, and managed cloud services. We work with all major providers (AWS, Azure, GCP) to find the best fit for your business. Reach out via our Contact page for a personalized assessment."
    },
    {
        keywords: ['ai', 'artificial intelligence', 'machine learning', 'automation', 'ml'],
        reply: "Our **AI Integration** service embeds intelligent automation into your existing workflows — from predictive analytics to smart customer interactions. We design custom AI solutions tailored to your industry. Want to learn how AI can benefit your business?"
    },
    {
        keywords: ['software', 'development', 'app', 'application', 'custom', 'build'],
        reply: "Our **Custom Software Development** team builds scalable, high-performance applications from scratch — web apps, mobile apps, APIs, and enterprise platforms. Every solution is built to your exact specifications."
    },
    {
        keywords: ['security', 'secure', 'protection', 'cyber', 'compliance'],
        reply: "Our **Enterprise Security** service covers vulnerability assessments, compliance audits, threat monitoring, and end-to-end data protection. We ensure your business is protected against modern cyber threats."
    },
    {
        keywords: ['price', 'pricing', 'cost', 'quote', 'how much', 'rate', 'charge'],
        reply: "Pricing depends on the scope and requirements of your project. For a custom quote, please visit our **Contact page** and our sales team will get back to you within 24 hours."
    },
    {
        keywords: ['contact', 'reach', 'talk', 'speak', 'email', 'phone', 'call'],
        reply: "You can reach us through the **Contact page** on our website. Our team typically responds within 24 hours on business days."
    },
    {
        keywords: ['who', 'about', 'company', 'accuratte', 'team'],
        reply: "**Accuratte Solutions** is a modern enterprise technology company delivering high-performance digital solutions. Our team of experts specializes in Digital Transformation, Cloud, AI, Custom Software, and Security — helping businesses scale and innovate."
    },
    {
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'greetings'],
        reply: "Hello! Welcome to Accuratte Solutions. I'm here to help you learn about our services. What can I assist you with today?"
    },
    {
        keywords: ['thank', 'thanks', 'appreciate'],
        reply: "You're welcome! Is there anything else I can help you with?"
    },
    {
        keywords: ['bye', 'goodbye', 'see you', 'later'],
        reply: "Thank you for reaching out to Accuratte Solutions! Have a great day. Feel free to come back anytime."
    },
];

const DEFAULT_REPLY = "That's a great question! For detailed information on that topic, I'd recommend reaching out to our team directly via the **Contact page**. They'll be happy to help. In the meantime, I can tell you about our services: Digital Transformation, Cloud Solutions, AI Integration, Custom Software Development, and Enterprise Security.";

router.post('/', (req, res) => {
    const { message } = req.body;

    if (!message || !message.trim()) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const lower = message.toLowerCase();
    const matched = responses.find(r => r.keywords.some(k => lower.includes(k)));

    res.json({ message: matched ? matched.reply : DEFAULT_REPLY });
});

export default router;
