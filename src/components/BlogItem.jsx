import React from 'react'

export default function BlogItem(props) {
  return (
  <div className='bg-blue-500 h-64 w-96 sm:w-96 overflow-hidden rounded-t-lg flex flex-col shadow-lg cursor-pointer m-2 pb-2'>
   <img src={props.url} alt="error image" className='overflow-hidden w-full h-64 hover:scale-110 hover:transition hover:ease-in hover:delay-100 transition ease-out delay-100
   '/>
   <h1 className='capitalize text-center mt-2 text-3xl sm:text-2xl text-white'>{props.title}</h1>
   
    </div>
            
    
  )
}
