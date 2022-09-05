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
        const newAge = await axios.post('http://localhost:3001/person', data).catch(function (error) { console.log(error) })
        setAge(newAge.data)
    }

    return (
        <div className='w-screen flex justify-center'>
            <div className='w-32 flex'>
                <form onSubmit={handleSubmit} method="post" className='flex flex-col place-self-center bg-zinc-500 font-mono'>
                    <h2>My Name is {name}</h2>
                    <input type="text" id='name' className='' onChange={handleChangeName} />
                    <h2>My Age is {age}</h2>
                    <input type="number" id='age' onChange={handleChangeAge} />
                    <h2>I'm a {gender}</h2>
                    <input type="text" id='gender' onChange={handleChangeGender} />
                    <button >Click Me</button>
                </form>
            </div>
        </div>
    );
}

export default Person;