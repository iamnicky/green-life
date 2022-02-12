import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black w-full py-8 rounded-t-lg flex flex-col mt-20 justify-center items-center'>
      <img className='h-20 w-20 sm:h-32 sm:w-32' src='logo.png' alt='error'></img>
      <h1 className='text-white text-xl sm:text-3xl capitalize'>Green Life</h1>
      <h1 className='text-orange-500 mt-4 tracking-wider'><span className='text-green-600 tracking-wider'>  Reduce </span><span className='text-yellow-500 tracking-wider'>  Reuse   </span>Recycle</h1>
    </div>
  )
}
