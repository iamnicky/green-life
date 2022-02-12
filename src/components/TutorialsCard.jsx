import React from 'react'
import {BsPlayCircleFill} from 'react-icons/bs'

export default function (props) {
    return (
        <div className='bg-slate-900 w-96 h-56 shadow-md shadow-gray-800 border-t-2 border-yellow-400 flex flex-col justify-center items-center'>
        <a href={props.link} target='_blank'><BsPlayCircleFill className='h-20 w-20 sm:h-24 sm:w-24 fill-white'></BsPlayCircleFill></a>
        <h1 className='capitalize text-white text-xl sm:text-2xl mt-2 text-center mx-4'>{props.title}</h1>             
        </div>
    )
}
