import React, { useState } from "react";

const AddUserInfo = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        })
    }
    return (
        <div >
            < div>My name is {name} and {age}  </div>
            <form onSubmit={handleOnSubmit}>
                <label>Your Name</label>
                <input

                    value={name}
                    type='text'
                    onChange={event => setName(event.target.value)}
                />
                <label>Your Age</label>
                <input
                    value={age}
                    type='text'
                    onChange={event=>setAge(event.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;