import React from 'react'
import BlogItem from './BlogItem'

export default function () {
  return (
    <div className='bg-green-600'>
      <section className='bg-image w-full h-96 bg-no-repeat flex flex-col justify-center items-center'>
      <h1 className='capitalize text-white text-2xl sm:text-4xl text-center mx-4'>Welcome to the world of nature</h1>
      <button className='text-white text-lg sm:text-2xl capitalize bg-green-500 px-4 py-1 mt-8 rounded hover:bg-green-600'>About Us</button>
      </section>

      <section className='mt-12'>
      <main className='flex justify-center items-center flex-col'>
      <h1 className='uppercase text-white text-xl sm:text-4xl tracking-widest'>About Us</h1>
      <div className='h-1 w-16 sm:w-32 bg-white mt-1 rounded'></div>
      </main>
      <p className='text-black mt-4 text-center text-md sm:text-xl mx-2 sm:mx-4'>With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.

      Now to compose a text Lorem Ipsum is much more fun!
      
      In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum.
      
      Be original, test your imagination... our Lorem Ipsum generator will amaze you. Try it now! Copy and Paste!With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.

      Now to compose a text Lorem Ipsum is much more fun!
      
      In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum.
      
      Be original, test your imagination... our Lorem Ipsum generator will amaze you. Try it now! Copy and Paste!</p>
      </section>
      <section className='mt-12'>
      <main className='flex justify-center items-center flex-col'>
      <h1 className='uppercase text-white text-xl sm:text-4xl tracking-widest'>Latest Blogs</h1>
      <div className='h-1 w-16 sm:w-32 bg-white mt-1 rounded'></div>
      </main>

      <BlogItem url="https://ichef.bbci.co.uk/news/976/cpsprodpb/957C/production/_111686283_pic1.png" title="nature"/>
       
     
      
      </section>
    </div>
  )
}
