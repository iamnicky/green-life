import React from 'react'

export default function BlogItem() {
  return (
  <div className='flex justify-center'>
    <div className='bg-blue-300 w-96 h-auto flex  sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8 rounded-lg'>
       <div class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
       <div class="sm:-my-2.5">
              <a href="#" class="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden ">
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/957C/production/_111686283_pic1.png"  class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
              </a>
            </div>
       </div>
    </div>
    </div>
            
    
  )
}
