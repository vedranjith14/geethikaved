"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ScreenContainer from "../ScreenContainer"

export default function IntroScreenWithPassword({ onNext }) {
    const [password, setPassword] = useState("")
    const [authorized, setAuthorized] = useState(false)
    const [error, setError] = useState("")

    const [loveCheck, setLoveCheck] = useState(false) // show love question
    const [loveAnswer, setLoveAnswer] = useState(null) // Ved or Geethika

    const correctPassword = "dairymilkoreo"

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === correctPassword) {
            setAuthorized(true)
            setLoveCheck(true)
        } else {
            setError("Oops! Wrong password 😅")
            setPassword("")
        }
    }

    const handleLoveAnswer = (answer) => {
        setLoveAnswer(answer)
    }

    const handleShowIntro = () => {
        setLoveCheck(false)
        if (onNext) onNext()
    }

    const handleBack = () => {
        setLoveAnswer(null) // reset choice so she can choose again
    }

    return (
        <ScreenContainer>
            {/* PASSWORD POPUP */}
            {!authorized && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                    <div className="bg-purple-900/90 text-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
                        <h2 className="text-2xl font-bold mb-4">Enter Our Secret Word 💖</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Type the secret word"
                                className="p-3 rounded-xl text-black text-center font-medium"
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="bg-pink-500 hover:bg-pink-400 transition-colors p-3 rounded-xl font-bold"
                            >
                                Unlock 💌
                            </button>
                        </form>
                        {error && <p className="mt-3 text-red-400">{error}</p>}
                    </div>
                </div>
            )}

            {/* LOVE CHECK POPUP */}
            {authorized && loveCheck && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                    <div className="bg-pink-900/90 text-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
                        {!loveAnswer ? (
                            <>
                                <h2 className="text-2xl font-bold mb-6">Who loves their partner more? 💖</h2>
                                <div className="flex justify-center gap-6">
                                    <button
                                        onClick={() => handleLoveAnswer("Ved")}
                                        className="bg-pink-500 hover:bg-pink-400 p-3 rounded-xl font-bold w-24"
                                    >
                                        Ved 😘
                                    </button>
                                    <button
                                        onClick={() => handleLoveAnswer("Geethika")}
                                        className="bg-purple-500 hover:bg-purple-400 p-3 rounded-xl font-bold w-24"
                                    >
                                        Geethika 😏
                                    </button>
                                </div>
                            </>
                        ) : loveAnswer === "Ved" ? (
                            <>
                                <h2 className="text-2xl font-bold mb-6">Yea indeed, VED loves Geethikaa moreeeee 😘💖</h2>
                                <button
                                    onClick={handleShowIntro}
                                    className="bg-pink-500 hover:bg-pink-400 transition-colors p-3 rounded-xl font-bold"
                                >
                                    Show Ved's Surprise 🎁
                                </button>
                            </>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold mb-6">Uhm unfortunately, you’re wrong 😅💔</h2>
                                <button
                                    onClick={handleBack}
                                    className="bg-purple-500 hover:bg-purple-400 transition-colors p-3 rounded-xl font-bold"
                                >
                                    Go Back 🔙
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* ORIGINAL INTRO SCREEN CONTENT */}
            {!loveCheck && (
                <div className="text-center max-w-2xl mx-auto">
                    {/* Main heading with romantic animation */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold text-pink-400 mb-4 text-balance"
                        >
                            It's Our Special Day
                        </motion.h1>
                    </motion.div>

                    {/* Cute gif placeholder */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <div className="w-35 h-35 md:w-39 md:h-39 mx-auto bg-purple-500/10 flex items-center justify-center backdrop-blur-md border-2 border-pink-400/30">
                            <img
                                src="/gifs/tangledintro.gif"
                                alt="Cute romantic illustration"
                                className="w-28 md:w-32 object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Subtext */}
                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-12 text-pretty"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        I created this with love, just for you...
                    </motion.p>

                    {/* Start button */}
                    <motion.button
                        onClick={onNext}
                        className="group relative px-8 py-4 bg-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Button glow effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                                background: [
                                    "linear-gradient(45deg, #ff6b81, #6a5acd)",
                                    "linear-gradient(45deg, #6a5acd, #ff6b81)",
                                    "linear-gradient(45deg, #ff6b81, #6a5acd)",
                                ],
                            }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        />

                        <span className="relative z-10 flex items-center gap-2">
                            Start Our Journey ✨
                        </span>
                    </motion.button>
                </div>
            )}
        </ScreenContainer>
    )
}
