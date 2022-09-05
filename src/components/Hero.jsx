import React from 'react';
import { motion } from 'framer-motion'

function Hero(props) {
    return (
        <div className='h-[50vh] bg-slate-400'>
            <div className='flex h-full place-items-center justify-evenly'>
                <motion.p className='text-5xl font-mono font-semibold'>Super</motion.p>
                <p>User</p>
                <p>Info</p>
                <p>Collector</p>
                <p>Deluxe</p>
            </div>

        </div>
    );
}

export default Hero;