import React from 'react'
import DarkModeToggle from './DarkModeToggle'


const Navbar: React.FC<{ name?: string }> = ({ name = 'name' }) => {
    return (
        <header className="fixed w-full backdrop-blur-md bg-white/60 dark:bg-black/40 border-b border-borderLight dark:border-borderDark z-40">
            <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                <a href="#home" className="font-semibold text-lg text-primary">YK</a>
                <div className="hidden md:flex gap-6 items-center text-sm text-lightSecondaryText dark:text-darkSecondaryText">
                    <a href="#home" className="hover:text-primary">Home</a>
                    <a href="#about" className="hover:text-primary">About</a>
                    <a href="#projects" className="hover:text-primary">Projects</a>
                    <a href="#contact" className="hover:text-primary">Contact</a>
                    <DarkModeToggle />
                </div>
                <div className="md:hidden">
                    <DarkModeToggle />
                </div>
            </nav>
        </header>
    )
}


export default Navbar