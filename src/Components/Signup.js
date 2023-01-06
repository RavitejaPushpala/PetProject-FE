import React from 'react'
import { useState } from 'react';
export default function Signup() {
    let [mail, setMail] = useState('');
    let [user_name, setName] = useState('');
    let [pass1, setPass1] = useState('');
    let [pass2, setPass2] = useState('');
    return (
        <div>
            <form>
                <label>
                    Name
                    <input type="text" value={user_name} onChange={(e) => { setName(e.target.value) }} required />
                </label>
                <br />
                <label>
                    Email
                    <input type="email" value={mail} onChange={(e) => { setMail(e.target.value) }} required />

                </label><br />
                <label>
                    Password
                    <input type="password" value={pass1} onChange={(e) => { setPass1(e.target.value) }} required />
                </label><br />
                <label>
                    Re-enter Password
                    <input type="password" value={pass2} onChange={(e) => { setPass2(e.target.value) }} required />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
