import React from 'react';
import { motion } from 'framer-motion'

function Hero(props) {
    return (
        <div className='h-[50vh] bg-slate-400'>
            <div className='flex h-full place-items-center justify-evenly'>
                <motion.p className='text-5xl font-mono font-semibold'>Super</motion.p>
                <motion.p className='text-5xl font-mono font-semibold'>User</motion.p>
                <motion.p className='text-5xl font-mono font-semibold'>Info</motion.p>
                <motion.p className='text-5xl font-mono font-semibold'>Collector</motion.p>
                <motion.p className='text-5xl font-mono font-semibold'>Deluxe</motion.p>
            </div>
        </div>
    );
}

export default Hero;