"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ScreenContainer from '../ScreenContainer';

export default function PhotoGalleryScreen({ onNext }) {
    const photos = [
        "/images/g1.jpeg",
        "/images/g2.jpeg",
        "/images/g3.jpeg",
        "/images/g4.jpeg",
        "/images/g5.jpeg",
        "/images/g6.jpeg",
        "/images/g7.jpeg",
        "/images/g8.jpeg",
        "/images/g9.jpeg",
        "/images/g10.jpeg",
        "/images/g11.jpeg",
        "/images/g12.jpeg",
        "/images/g13.jpeg",
        "/images/g14.jpeg",
        "/images/g15.jpeg",
        "/images/g16.jpeg",
        "/images/g17.jpeg",
        "/images/g18.jpeg",
        "/images/g20.jpeg",
        "/images/g21.jpeg",
        "/images/g22.jpeg",
        "/images/g23.jpeg",
    ]

    const [details, setDetails] = React.useState(null)

    // 🎵 Music with fade-in
    React.useEffect(() => {
        const audio = new Audio('/Abdul_Hannan_Rovalio_-_Iraaday_(mp3.pm)-[AudioTrimmer.com].mp3')
        audio.loop = true
        audio.volume = 0

        const fadeIn = () => {
            let vol = 0
            const interval = setInterval(() => {
                if (vol < 0.4) {
                    vol += 0.02
                    audio.volume = vol
                } else {
                    clearInterval(interval)
                }
            }, 100)
        }

        const playAudio = () => {
            audio.play().then(fadeIn).catch(() => {})
            document.removeEventListener('click', playAudio)
            document.removeEventListener('touchstart', playAudio)
            document.removeEventListener('pointerdown', playAudio)
        }

        document.addEventListener('click', playAudio)
        document.addEventListener('touchstart', playAudio)
        document.addEventListener('pointerdown', playAudio)

        return () => {
            audio.pause()
            document.removeEventListener('click', playAudio)
            document.removeEventListener('touchstart', playAudio)
            document.removeEventListener('pointerdown', playAudio)
        }
    }, [])

    const [sliderRef] = useKeenSlider({
        loop: true,
        detailsChanged(s) {
            setDetails(s.track.details)
        },
        initial: 2,
    })

    function scaleStyle(idx) {
        if (!details) return {}
        const slide = details.slides[idx]
        const scale_size = 0.7
        const scale = 1 - (scale_size - scale_size * slide.portion)
        return {
            transform: `scale(${scale})`,
            WebkitTransform: `scale(${scale})`,
        }
    }

    return (
        <ScreenContainer>
            <motion.section
                className="flex items-center justify-center py-8 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center w-full">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 text-balance text-center leading-tight"
                    >
                        Precious moments from our miles-apart love story 🫣❤️🫂
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-white/60 mb-2"
                    >
                        (Keep Swiping Gutika 😛➡️)
                    </motion.p>

                    {/* Photo Carousel */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .5, duration: 1 }}
                        className='flex h-[520px] w-[280px] sm:h-[650px] sm:w-[320px]'
                    >
                        <div ref={sliderRef} className="zoom-out keen-slider cursor-grab active:cursor-grabbing">
                            {photos.map((photo, index) => (
                                <div key={index} className="keen-slider__slide zoom-out__slide">
                                    <Image
                                        src={photo}
                                        fill
                                        sizes="400px"
                                        alt={`Memory ${index + 1}`}
                                        className="object-contain object-center rounded-2xl w-full bg-black"
                                        style={scaleStyle(index)}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.button
                        onClick={onNext}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex mx-auto mt-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">A Message from Ved 💌</span>
                    </motion.button>
                </div>
            </motion.section>
        </ScreenContainer>
    );
};
