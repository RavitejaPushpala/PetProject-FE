import React from 'react'
import { useState } from 'react';
export default function Login() {
    let [user_name, setName] = useState('');
    let [pass1, setPass1] = useState('');
    return (
        <div>
            <form >
                <label>
                    Name
                    <input type="text" value={user_name} onChange={(e) => { setName(e.target.value) }} required />
                </label>
                <br />
                <label>
                    Password
                    <input type="password" value={pass1} onChange={(e) => { setPass1(e.target.value) }} required />
                </label><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
