import React from 'react'


const Footer: React.FC = () => (
    <footer className="mt-20 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-lightSecondaryText dark:text-darkSecondaryText">
            © {new Date().getFullYear()} Yaman khan — Crafted with Ascendant Blue. • Built with React + Vite + Tailwind
        </div>
    </footer>
)


export default Footer