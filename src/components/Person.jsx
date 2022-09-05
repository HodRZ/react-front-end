import axios from 'axios';
import React, { useState } from 'react';


function Person() {
    const [name, setName] = useState('Hod');
    const [age, setAge] = useState('5');
    const [gender, setGender] = useState('Bi-cycle')

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

    return (
        <div className='w-screen flex justify-center'>
            <div className='w-32 flex'>
                <form data-testid='userForm' onSubmit={handleSubmit} method="post" className='flex flex-col place-self-center bg-zinc-500 font-mono'>
                    <h2 data-testid='name'>My Name is {name}</h2>
                    <input type="text" id='name' data-testid='name-input' onChange={handleChangeName} />
                    <h2 data-testid='age'>My Age is {age}</h2>
                    <input type="number" id='age' data-testid='age-input' onChange={handleChangeAge} />
                    <h2 data-testid='gender'>I'm a {gender}</h2>
                    <input type="text" id='gender' data-testid='gender-input' onChange={handleChangeGender} />
                    <button >Click Me</button>
                </form>
            </div>
        </div>
    );
}

export default Person;