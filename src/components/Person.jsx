import axios from 'axios';
import React, { useState } from 'react';
import { motion } from 'framer-motion'

function Person() {
    const [name, setName] = useState('Hod');
    const [age, setAge] = useState('5');
    const [gender, setGender] = useState('Bi-cycle')
    const [modal, showModal] = useState(false)

    function handleChangeName(e) {
        setName(e.target.value)
    }
    function handleChangeAge(e) {
        setAge(e.target.value)
    }
    function handleChangeGender(e) {
        setGender(e.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const data = {
            "name": e.target.name.value,
            "age": e.target.age.value,
            "gender": e.target.gender.value,
        }
        const newAge = await axios.post(`${process.env.REACT_APP_PORT}/person`, data).catch(function (error) { console.log(error) })
        setAge(newAge.data)
        e.target.name.value = ''
        e.target.age.value = ''
        e.target.gender.value = ''
    }
    function showForm() {
        showModal(!modal)
    }

    return (
        <div className='h-fit flex flex-col justify-center items-center py-16 bg-gradient-to-t from-red-900 to-zinc-300'>
            <motion.button
                onClick={showForm}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.4 }}
                className='text-2xl backdrop-blur-lg  md:text-5xl border-x-2 rounded-lg '>
                Enter Info
            </motion.button>
            {modal &&
                <div className='flex mt-16 '>
                    <form data-testid='userForm' onSubmit={handleSubmit} method="post" className='flex flex-col place-self-center text-xl md:text-4xl font-mono'>
                        <h2 data-testid='name'>My Name is {name}</h2>
                        <input className='border-t-2 border-x-2 rounded-t-xl border-zinc-600 bg-zinc-200 ' type="text" id='name' data-testid='name-input' onChange={handleChangeName} />
                        <h2 data-testid='age'>My Age is {age}</h2>
                        <input className='border-x-2 border-zinc-600 bg-zinc-200 ' type="number" id='age' data-testid='age-input' onChange={handleChangeAge} />
                        <h2 data-testid='gender'>I'm a {gender}</h2>
                        <input className='border-x-2 border-zinc-600 bg-zinc-200 ' type="text" id='gender' data-testid='gender-input' onChange={handleChangeGender} />
                        <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='mt-3 rounded-b-xl border-b-2 border-red-900 bg-zinc-200 hover:bg-black hover:text-white text-red-900'>See the Magic</motion.button>
                    </form>
                </div>}
        </div>
    );
}

export default Person;