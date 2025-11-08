import React from 'react'
import { motion } from 'framer-motion'


const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center" aria-label="hero">
            <div className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold leading-tight">
                        Crafting sleek, high-performance UI — <span className="text-primary">Ascendant Blue</span>
                    </motion.h1>


                    <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="mt-6 text-lg text-lightSecondaryText dark:text-darkSecondaryText max-w-xl">
                        I design and build polished, UI-heavy portfolios and frontends with a focus on clarity, motion, and pixel-perfect execution.
                    </motion.p>


                    <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md border border-borderLight dark:border-borderDark">Contact</a>
                    </motion.div>
                </div>


                <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="w-full">
                    <div className="section-surface rounded-2xl p-6 shadow-subtle">
                        <div className="h-64 md:h-72 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary">
                            <span className="text-sm text-lightSecondaryText dark:text-darkSecondaryText">Placeholder — interactive preview (3D/Lottie)</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


export default Hero