import React from 'react';
import { motion } from 'framer-motion'

function Hero(props) {
    return (
        <div className='h-[50vh] bg-slate-400 text-lg md:text-5xl  font-mono font-semibold'>
            <div className='flex h-full place-items-center justify-evenly'>
                <motion.p initial={{ scale: 2 }}
                    animate={{ scale: [0.5, 2, 0.5] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeIn'
                    }}
                    className=''>Super</motion.p>
                <motion.p initial={{ scale: 0.5 }}
                    animate={{ scale: [2, 0.5, 2] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: ''
                    }}

                    className=''>User</motion.p>
                <motion.p
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                    className=''>Info</motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        ease: 'easeIn'
                    }}
                    className=''>Collector</motion.p>
                <motion.p
                    animate={{ scale: [1.5, 0.2, 1.5] }}
                    transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: 'easeIn'
                    }}
                    className=' '>Deluxe</motion.p>
            </div>
        </div>
    );
}

export default Hero;