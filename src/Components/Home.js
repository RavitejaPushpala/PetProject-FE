import React from 'react'
import Delivery from './Delivery'
import DiningOut from './DiningOut'
import Options from './Options'
import { useState } from 'react'

const myContext=React.createContext();
export default function Home() {
    const tog = false;
    const [toggle, setToggle] = useState({ tog });
    console.log(toggle);
    return (
        <div>
            <myContext.Provider value={[toggle,setToggle]}>
            <Options />
            {toggle && <Delivery />}
            {!toggle && <DiningOut />}
            </myContext.Provider>
        </div>);
}

export {myContext}
