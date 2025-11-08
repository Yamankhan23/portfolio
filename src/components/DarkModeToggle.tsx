import React, { useEffect, useState } from 'react'


const DarkModeToggle: React.FC = () => {
    const [dark, setDark] = useState<boolean>(() => {
        try {
            const v = localStorage.getItem('theme')
            if (v) return v === 'dark'
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        } catch { return false }
    })


    useEffect(() => {
        const root = document.documentElement
        if (dark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [dark])


    return (
        <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/6 transition"
        >
            {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 5.22a1 1 0 011.415 0L6.64 6.22a1 1 0 11-1.415 1.415L4.22 6.636a1 1 0 010-1.415zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zM14.36 7.635a1 1 0 011.415-1.415l1.005 1.005a1 1 0 01-1.415 1.415l-1.005-1.005zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
                </svg>
            )}
        </button>
    )
}


export default DarkModeToggle