import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DarkModeToggle from './DarkModeToggle';
const Navbar = ({ name = 'name' }) => {
    return (_jsx("header", { className: "fixed w-full backdrop-blur-md bg-white/60 dark:bg-black/40 border-b border-borderLight dark:border-borderDark z-40", children: _jsxs("nav", { className: "max-w-6xl mx-auto px-6 py-3 flex items-center justify-between", children: [_jsx("a", { href: "#home", className: "font-semibold text-lg text-primary", children: "YK" }), _jsxs("div", { className: "hidden md:flex gap-6 items-center text-sm text-lightSecondaryText dark:text-darkSecondaryText", children: [_jsx("a", { href: "#home", className: "hover:text-primary", children: "Home" }), _jsx("a", { href: "#about", className: "hover:text-primary", children: "About" }), _jsx("a", { href: "#projects", className: "hover:text-primary", children: "Projects" }), _jsx("a", { href: "#contact", className: "hover:text-primary", children: "Contact" }), _jsx(DarkModeToggle, {})] }), _jsx("div", { className: "md:hidden", children: _jsx(DarkModeToggle, {}) })] }) }));
};
export default Navbar;
