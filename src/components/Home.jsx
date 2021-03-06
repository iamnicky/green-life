import React from 'react'
import BlogItem from './BlogItem'

export default function () {
  return (
    <div className='flex flex-col'>
      <section className='bg-image w-full h-[600px] bg-no-repeat flex flex-col justify-center items-center'>
      <h1 className='capitalize text-white text-2xl sm:text-6xl text-center mx-4'>Welcome to the world of nature</h1>
      <button className='text-white text-md sm:text-xl capitalize bg-green-500 px-4 py-1 mt-8 rounded hover:bg-green-600'>About Us</button>
      </section>

      <section className='mt-12'>
      <main className='flex justify-center items-center flex-col'>
      <h1 className='uppercase text-white text-xl sm:text-4xl tracking-widest'>About Us</h1>
      <div className='h-1 w-16 sm:w-32 bg-white mt-1 rounded'></div>
      </main>
      <p className='text-black mt-4 text-center text-md sm:text-xl mx-2 sm:mx-4'>With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.
      Now to compose a text Lorem Ipsum is much more fun      
      In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum.     
      Be original, test your imagination... our Lorem Ipsum generator will amaze you. Try it now! Copy and Paste!</p>
      </section>
      <section className='mt-12'>
      <main className='flex justify-center items-center flex-col'>
      <h1 className='uppercase text-white text-xl sm:text-4xl tracking-widest'>Latest Blogs</h1>
      <div className='h-1 w-16 sm:w-32 bg-white mt-1 rounded'></div>
      </main>

       <article className='flex flex-wrap justify-evenly mt-4'>
       <BlogItem url="https://cdn.vox-cdn.com/thumbor/pbWzK4QOzYgSZegof4eaK5xp9iQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13439425/shutterstock_285980522.jpg" title="awareness on global warming"/>
       <BlogItem url="https://www.onlinebiologynotes.com/wp-content/uploads/2018/07/water-pollution-678x381.jpg" title="brief talk on water pollution"/>
       <BlogItem url="https://upload.wikimedia.org/wikipedia/commons/3/33/A_Population_pollution.jpg" title="why to control population?"/>
      </article>

       <article className='flex flex-wrap justify-evenly'>
       <BlogItem url="https://assets.nrdc.org/sites/default/files/styles/header_background/public/health4_26_airpollguide_istock_2796602_900x600px.jpg?itok=vCwn8tgz" title="stop polluting air!"/>
       <BlogItem url="https://i1.wp.com/www.bioenergyconsult.com/wp-content/uploads/2014/01/plastic-wastes.jpg?ssl=1" title="steps for waste management"/>
       <BlogItem url="https://b2bpurchase.com/wp-content/uploads/2019/07/PG-76.jpg" title="all about water harvesting"/>
      </article>
      
      </section>
      <button className='justify-self-end self-end capitalize bg-blue-600 py-1 px-4 text-white hover:bg-blue-700 mt-6 rounded mr-4'>Read all</button>
      </div>
  )
}
