import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
const Home = () => {
    return (_jsxs("section", { id: "home", className: "relative flex flex-col justify-center items-center text-center h-screen overflow-hidden bg-gradient-to-b from-[#F9F9FB] to-white dark:from-[#121212] dark:to-[#1F1F1F] transition-colors duration-700", children: [_jsx(motion.div, { className: "absolute inset-0 -z-10 opacity-50", initial: { opacity: 0 }, animate: { opacity: 0.4 }, transition: { duration: 2 }, style: {
                    background: "radial-gradient(circle at 50% 30%, rgba(0,122,255,0.25) 0%, transparent 70%)",
                } }), _jsxs(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: "easeOut" }, className: "text-5xl md:text-6xl font-extrabold tracking-tight text-primary", children: ["Hey, I\u2019m ", _jsx("span", { className: "text-accent", children: "Yaman Khan" })] }), _jsx(motion.h2, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3, duration: 0.9, ease: "easeOut" }, className: "mt-4 text-xl md:text-2xl text-lightSecondaryText dark:text-darkSecondaryText max-w-xl", children: "I craft interactive, performance-driven web experiences with precision and creativity." }), _jsxs(motion.div, { className: "mt-8 flex gap-4 flex-wrap justify-center", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5, duration: 0.9 }, children: [_jsx("a", { href: "#projects", className: "px-6 py-3 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition shadow-lg shadow-blue-500/30", children: "View My Work" }), _jsx("a", { href: "#contact", className: "px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition", children: "Contact Me" })] }), _jsx(motion.div, { className: "absolute bottom-8 flex justify-center", animate: { y: [0, 8, 0] }, transition: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                }, children: _jsx(ArrowDown, { className: "w-6 h-6 text-primary" }) })] }));
};
export default Home;
