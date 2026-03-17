"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScreenContainer from "../ScreenContainer"

function FallingHearts() {
    const hearts = Array.from({ length: 35 })
    const emojis = ["❤️", "💖", "💘", "💗", "💞", "💕"]

    return (
        <div
            className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
            style={{
                maskImage:
                    "radial-gradient(circle at center, transparent 180px, black 320px)",
                WebkitMaskImage:
                    "radial-gradient(circle at center, transparent 180px, black 320px)",
            }}
        >
            {hearts.map((_, i) => {
                const left = Math.random() * 100
                const duration = 6 + Math.random() * 6
                const delay = Math.random() * 5
                const size = 14 + Math.random() * 26
                const emoji = emojis[Math.floor(Math.random() * emojis.length)]

                return (
                    <motion.div
                        key={i}
                        className="absolute opacity-70"
                        style={{
                            left: `${left}%`,
                            fontSize: `${size}px`,
                        }}
                        initial={{ y: "-10vh", opacity: 0 }}
                        animate={{
                            y: "110vh",
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration,
                            delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {emoji}
                    </motion.div>
                )
            })}
        </div>
    )
}

function HeartBurst({ trigger }) {
    const hearts = Array.from({ length: 18 })
    const emojis = ["💖", "💘", "💗", "💞", "💕"]

    return (
        <AnimatePresence>
            {trigger && (
                <div className="pointer-events-none fixed inset-0 flex items-center justify-center z-40">
                    {hearts.map((_, i) => {
                        const angle = Math.random() * 360
                        const distance = 120 + Math.random() * 120
                        const emoji = emojis[Math.floor(Math.random() * emojis.length)]

                        const x = Math.cos(angle) * distance
                        const y = Math.sin(angle) * distance

                        return (
                            <motion.div
                                key={i}
                                className="absolute text-2xl"
                                initial={{ x: 0, y: 0, opacity: 1, scale: 0.8 }}
                                animate={{
                                    x,
                                    y,
                                    opacity: 0,
                                    scale: 1.4,
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeOut",
                                }}
                            >
                                {emoji}
                            </motion.div>
                        )
                    })}
                </div>
            )}
        </AnimatePresence>
    )
}

export default function MessageScreen() {
    const [showOverlay, setShowOverlay] = useState(false)
    const [burst, setBurst] = useState(false)

    const romanticMessage = `Happy Anniversary, MY GEETHIKAAAAAA ❤️💖💞💗💘✨

Dayum… I spent one whole year with you (okay okay I’m joking — I’m ready to spend my entire life with you 😁😌💖). Even though there are almost 14,000 kilometers between us, not a single day goes by when I don’t feel your presence in my heart 🥺🥺🥺💓💞. Distance may keep our hands apart, but it has never been strong enough to separate our souls ✨💫. Every call, every message, every moment we wait for each other reminds me how special what we have truly is 💖👀✨.

Sometimes I imagine the day when this distance will disappear and I’ll finally be able to hold you instead of just missing you 🫂💞 (tu meri baahon mein duniya bhula dena) 🤗💖✨. Remember today was the first time u hugged me 🫣🫣🫣? We'll relive those moments within a few years, i promise.

Until then, I promise to keep loving you with the same patience, faith, and devotion that brought us this far 💫💗.

I also feel grateful that Lord Krishna is watching over us 🙏💙✨.

Through every good moment and every difficult one, through every laugh and every tear, my love will stay the same 💖💞✨.

You are not just my girlfriend — you are my peace, my strength, and the most beautiful part of my life 💞✨💖.

Happy anniversary, my love 💖💘💞✨😘😘😘

By your half bf (maybe full bf 😁),
your teddy bear 🧸💞,
your Doraemon 😁😘💖
`

    const handleCardClick = () => {
        setBurst(true)
        setTimeout(() => {
            setBurst(false)
            setShowOverlay(true)
        }, 600)
    }

    const closeOverlay = () => setShowOverlay(false)

    return (
        <ScreenContainer>
            <FallingHearts />
            <HeartBurst trigger={burst} />

            <div className="w-full max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        A Special Message For You
                    </motion.h1>
                </motion.div>

                <motion.div
                    className="relative group mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCardClick}
                        className="w-80 h-48 mx-auto bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-pink-800/40 backdrop-blur-lg rounded-2xl border-2 border-pink-400/50 shadow-2xl relative overflow-hidden cursor-pointer"
                    >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <div className="flex flex-col items-center justify-center h-full p-6">
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                💌
                            </motion.div>

                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                For You, My Cutiepiee
                            </h3>

                            <p className="text-purple-300 text-sm">
                                Click to read my message
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <AnimatePresence>
                    {showOverlay && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeOverlay}
                        >
                            <motion.div
                                className="w-full max-w-2xl bg-gradient-to-b from-purple-950/50 via-black/90 to-pink-950/50 rounded-2xl shadow-2xl border-2 border-pink-400/40 p-8 relative"
                                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeOverlay}
                                    className="absolute top-4 right-4 text-pink-400 hover:text-pink-300 text-2xl"
                                >
                                    ×
                                </button>

                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                        Happy Anniversary!
                                    </h3>
                                    <p className="text-purple-300">
                                        This is just for you ♥
                                    </p>
                                </div>

                                <div className="h-80 overflow-y-auto pr-4">
                                    <div className="text-sm text-pink-100 leading-relaxed text-left whitespace-pre-line">
                                        {romanticMessage}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ScreenContainer>
    )
}
