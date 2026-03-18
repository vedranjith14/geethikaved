"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScreenContainer from "../ScreenContainer"

function FlowerDrawing() {
    const pathTransition = { duration: 2, ease: "easeInOut" }

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-30">
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
                <motion.path
                    d="M250 420 C240 360 260 300 250 240"
                    stroke="#ff6fae"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={pathTransition}
                />
                <motion.path
                    d="M250 300 C200 260 200 220 210 190"
                    stroke="#ff6fae"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ ...pathTransition, delay: 1 }}
                />
                <motion.path
                    d="M250 300 C300 260 300 220 290 190"
                    stroke="#ff6fae"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ ...pathTransition, delay: 1 }}
                />
                <motion.circle
                    cx="250"
                    cy="200"
                    r="22"
                    stroke="#ff6fae"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2 }}
                />
                <motion.circle
                    cx="210"
                    cy="180"
                    r="18"
                    stroke="#ff6fae"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2.4 }}
                />
                <motion.circle
                    cx="290"
                    cy="180"
                    r="18"
                    stroke="#ff6fae"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2.8 }}
                />
            </svg>
        </div>
    )
}

// Hearts burst when card clicked
function HeartBurst({ show }) {
    const hearts = Array.from({ length: 20 })
    const emojis = ["❤️","💖","💘","💗","💞"]

    return (
        <AnimatePresence>
            {show && (
                <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-40">
                    {hearts.map((_, i) => {
                        const angle = Math.random() * 360
                        const distance = 150 + Math.random() * 150
                        const x = Math.cos(angle) * distance
                        const y = Math.sin(angle) * distance
                        const emoji = emojis[Math.floor(Math.random() * emojis.length)]

                        return (
                            <motion.div
                                key={i}
                                className="absolute text-2xl"
                                initial={{ x:0, y:0, opacity:1, scale:0.8 }}
                                animate={{ x, y, opacity:0, scale:1.4 }}
                                exit={{ opacity:0 }}
                                transition={{ duration:1.2, ease:"easeOut" }}
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

// Soft petals falling when overlay opens
function Petals({ show }) {
    const petals = Array.from({ length: 25 })
    const colors = ["#ffb6c1","#ffc0cb","#ff69b4","#ff1493"]

    return (
        <AnimatePresence>
            {show && (
                <div className="fixed inset-0 pointer-events-none z-30">
                    {petals.map((_, i) => {
                        const startX = Math.random() * window.innerWidth
                        const delay = Math.random() * 1.5
                        const size = 6 + Math.random() * 8
                        const color = colors[Math.floor(Math.random() * colors.length)]

                        return (
                            <motion.div
                                key={i}
                                style={{
                                    position:"absolute",
                                    top:-10,
                                    left:startX,
                                    width:size,
                                    height:size,
                                    backgroundColor: color,
                                    borderRadius:"50%",
                                }}
                                initial={{ y:0, opacity:0.8, rotate:0 }}
                                animate={{ y: window.innerHeight + 10, rotate:360, opacity:0 }}
                                transition={{ duration:3 + Math.random()*2, delay, ease:"linear" }}
                                exit={{ opacity:0 }}
                            />
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

Sometimes I imagine the day when this distance will disappear and I’ll finally be able to hold you instead of just missing you 🫂💞 (tu meri baahon mein duniya bhula dena) 🤗💖✨. Remember today was the first time u hugged me 🫣🫣🫣? We'll relive those moments within a few years, i promise. Until then, I promise to keep loving you with the same patience, faith, and devotion that brought us this far 💫💗.

I also feel grateful that Lord Krishna is watching over us 🙏💙✨. Just like His divine love stories teach us about devotion and faith, I believe He brought us together for a reason 💫💖. I pray that He keeps blessing our love, protecting you, and guiding us until the day we no longer have to count kilometers between us 💞✨💗.

And today, on our anniversary, I want to make some promises to you from the bottom of my heart 💓💖. No matter what happens in life, I will always love you 💞💘💗. Even if you beat me sometimes 😅😂, even if you irritate me 🙄😆, even if you jokingly try to change my gender (btw dont call me pookie and cute cuz im not) 😂✨. I promise my love for you will never change 💖💞💓.

I promise to always take care of your heart 💗, respect you 🤍, and love you the way Lord Krishna loves Radha  with pure devotion and endless love 💙💫💖 (maybe this sentece is wrong cuz i promise to love u wayyyy more than how Krishna Loved Radha. I promise to devote my entire life to you 💞✨. For me, it has always been you… and if it’s not you, then it’s nobody 💘💗💖. You are my person, my peace, and my forever 🫶💞✨. I love how you get a little jealous sometimes 😏💖 It makes you look so cute! But don’t worry, my love, I will love only youuuuu 💘💞✨. Gopiyaan taare hain, chaand hai Radha 🌟💙.

I also want to say I’m truly sorry for the mistakes I’ve made 😔💔. I feel really bad when I make you cry sometimes 🥺💔. Seeing you hurt because of me is one of the worst feelings, and I’m sorry for every moment like that 💞. Please forgive me 😔❤️💗.

I know you are a very strong woman who handles so many things alone 💪✨💖, and I admire you so much for that 👀💫. But I want you to know you don’t have to carry everything by yourself anymore 💞. I promise I’ll always stand by your side 🤝💖, support you 💫, and help you in whatever you want or decide in life 💗✨. No matter what you go through, I’ll always be there for you 💞🫂💖.

And if I could sing something for you, it would sound like a soft romantic song in my heart 🎶💫💖:

*Dooriyon mein bhi tera hi ehsaas rehta hai,* ✨
*Har raat meri duaon mein tera naam rehta hai.* 💖
*Ek din ye faasle bhi khatam ho jayenge,* 💫
*Phir meri baahon mein tera poora jahaan rehta hai.* 💞

Through every good moment and every difficult one, through every laugh and every tear, my love will stay the same 💖💞✨. Even across thousands of kilometers, my heart will always find its way back to you ❤️💗💘👀.

You are not just my girlfriend — you are my peace, my strength, and the most beautiful part of my life 💞✨💖. I can’t wait for the day when distance becomes just a memory and I can finally celebrate every moment beside you 💫💗🫂.

Ayyy whats wrong w u, sm romantic message I wrote, I used my entire english vocabulary and u're crying? Bruh wipe ur tears. I LOVE YOU SO MUCH "600 rupay tankah wale sainik ke liye apna sab kuch chhod aayi Maharani. Iss Janam ke liye alvida Princess Noor Jahan".

Happy anniversary, my love 💖💘💞✨😘😘😘

By your half bf (maybe full bf 😁),
Your Teddy Bear 🧸💞,
Your Doraemon 😁😘💖
Ved Ranjith.
`

    const handleCardClick = () => {
        setBurst(true)
        setTimeout(() => {
            setBurst(false)
            setShowOverlay(true)
        }, 700)

        // 🎵 Play Raabta when card is clicked
        const audio = new Audio('/Raabta(KoshalWorld.Com)-[AudioTrimmer.com].mp3')
        audio.loop = true
        audio.volume = 0
        audio.play().then(() => {
            let vol = 0
            const interval = setInterval(() => {
                if(vol < 0.4) {
                    vol += 0.02
                    audio.volume = vol
                } else clearInterval(interval)
            }, 100)
        }).catch(() => {})
    }

    const closeOverlay = () => setShowOverlay(false)

    return (
        <ScreenContainer>
            <FlowerDrawing />
            <HeartBurst show={burst} />
            <Petals show={showOverlay} />

            <div className="w-full max-w-4xl mx-auto text-center relative z-10">

                <motion.div
                    className="mb-8"
                    initial={{ opacity:0, y:-20 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ duration:0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent mb-4"
                        animate={{ backgroundPosition:["0% 50%","100% 50%","0% 50%"] }}
                        transition={{ duration:3, repeat:Infinity }}
                    >
                        From My Heart to Yours ❤️
                    </motion.h1>
                </motion.div>

                <motion.div
                    className="relative group mb-8"
                    initial={{ opacity:0, y:20 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ delay:0.5, duration:0.8 }}
                >
                    <motion.div
                        whileHover={{ scale:1.05 }}
                        whileTap={{ scale:0.95 }}
                        onClick={handleCardClick}
                        className="w-80 h-48 mx-auto bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-pink-800/40 backdrop-blur-lg rounded-2xl border-2 border-pink-400/50 shadow-2xl relative overflow-hidden cursor-pointer"
                    >
                        <div className="flex flex-col items-center justify-center h-full p-6">
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{ scale:[1,1.2,1], rotate:[0,5,-5,0] }}
                                transition={{ duration:2, repeat:Infinity }}
                            >
                                💌
                            </motion.div>

                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                For You, My Radha 🦚❤️
                            </h3>

                            <p className="text-purple-300 text-sm">
                                Unwrap your anniversary note 🎁
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <AnimatePresence>
                    {showOverlay && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            initial={{ opacity:0 }}
                            animate={{ opacity:1 }}
                            exit={{ opacity:0 }}
                            onClick={closeOverlay}
                        >
                            <motion.div
                                className="w-full max-w-2xl bg-gradient-to-b from-purple-950/50 via-black/90 to-pink-950/50 rounded-2xl shadow-2xl border-2 border-pink-400/40 p-8 relative"
                                initial={{ scale:0.8, opacity:0, y:50 }}
                                animate={{ scale:1, opacity:1, y:0 }}
                                exit={{ scale:0.8, opacity:0, y:50 }}
                                onClick={e=>e.stopPropagation()}
                            >
                                <button
                                    onClick={closeOverlay}
                                    className="absolute top-4 right-4 text-pink-400 text-2xl"
                                >
                                    ×
                                </button>

                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                        Happy Anniversary!
                                    </h3>
                                    <p className="text-purple-300">Just for You ♥</p>
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
