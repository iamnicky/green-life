import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Head() {
    return (
       
            <nav className='flex justify-between bg-blue-200 h-12 sm:h-16 w-full items-center'>
            <img className='h-24 w-24 sm:h-32 sm:w-32 cursor-pointer' src='logo.png' alt='error'></img>
                <ul className='items-center p-2 capitalize hidden sm:flex text-blue-900'>
                    <li className='list-none px-2'><a href='#'>Home</a></li>
                    <li className='list-none px-2'><a href='#'>Post</a></li>
                    <li className='list-none px-2'><a href='#'>Tutorials</a></li>
                    <li className='list-none px-2'><a href='#'>Join Us</a></li>
                </ul>
                    <a href='#' className='sm:hidden'><GiHamburgerMenu className='h-4 w-4'></GiHamburgerMenu></a>
            </nav>

    )
}
