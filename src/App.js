import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        try {
            const saved = localStorage.getItem("theme");
            const prefersDark = window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches;
            const init = saved ?? (prefersDark ? "dark" : "light");
            setTheme(init);
            document.documentElement.classList.toggle("dark", init === "dark");
        }
        catch {
            // ignore
        }
    }, []);
    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        try {
            localStorage.setItem("theme", next);
        }
        catch { }
    };
    return (_jsxs("div", { className: `min-h-screen transition-colors duration-500 ${theme === "light" ? "bg-lightBg text-lightText" : "bg-darkBg text-darkText"}`, children: [_jsx(Navbar, { name: "Name" }), " ", _jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.main, { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, transition: { duration: 0.45 }, children: [_jsx(Home, {}), _jsx(About, {}), _jsx(Projects, {}), _jsx(Contact, {})] }, theme) }), _jsx(Footer, {})] }));
};
export default App;
