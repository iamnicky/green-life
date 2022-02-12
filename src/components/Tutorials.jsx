import React from 'react'
import TutorialsCard from './TutorialsCard'

export default function Tutorials() {
    return (
        <div className='flex flex-col bg-green-500'>
            <main className='flex justify-center items-center flex-col'>
                <h1 className='uppercase text-white text-xl sm:text-4xl tracking-widest'>Tutorials</h1>
                <div className='h-1 w-16 sm:w-32 bg-white mt-1 rounded'></div>
            </main>
            
            <section className='flex flex-wrap gap-2 justify-evenly mt-4'>
                <TutorialsCard link='https://youtube.com' title='How to do Water Harvesting' />
                <TutorialsCard link='https://youtube.com' title='How to do Water Harvesting' />
                <TutorialsCard link='https://youtube.com' title='How to do Water Harvesting' />

            </section>

            <section className='flex flex-wrap gap-2 justify-evenly mt-4'>
                <TutorialsCard link='https://youtube.com' title='How to do Water Harvesting' />
                <TutorialsCard link='https://youtube.com' title='How to do Water Harvesting' />
                <TutorialsCard link='https://youtube.com' title='How to do Water Harvesting' />
            </section>
        </div>
    )
}
