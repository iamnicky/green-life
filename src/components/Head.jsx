import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Menu from './Menu'

export default function Head() {

    const [toggle, setToggle] = useState(false)
    function toggleMe() {
        setToggle(!toggle)
    }
    return (
        <div>
            <nav className='flex justify-between bg-blue-200 h-12 sm:h-16 w-full items-center'>
                
                    <img className='h-8 w-8 sm:h-12 sm:w-12 cursor-pointer' src='logo.png' alt='error'></img>
                   
              
                <ul className='items-center p-2 capitalize hidden sm:flex text-blue-900'>
                    <li className='list-none px-4 hover-underline-animation'><a href='#'>Home</a></li>
                    <li className='list-none px-4 hover-underline-animation'><a href='#'>Post</a></li>
                    <li className='list-none px-4 hover-underline-animation'><a href='#'>Tutorials</a></li>
                    <li className='list-none px-4 hover-underline-animation'><a href='#'>Join Us</a></li>
                </ul>
                <button onClick={toggleMe} className='sm:hidden mr-4'><GiHamburgerMenu className='h-4 w-4'></GiHamburgerMenu></button>
            </nav>

            {toggle ? <Menu /> : null}

        </div>
    )
}
