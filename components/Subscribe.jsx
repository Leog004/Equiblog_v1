import React from 'react'

export default function Subscribe() {
    return (
        <div className='h-full max-w-6xl py-4 px-0 w-full mx-auto my-0 rounded-2xl'>
            <div className='p-20 bg-white my-20 rounded-xl'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold text-center w-full'>Subscribe to our newsletter!</h1>
                    <p className='text-light text-center mt-5 text-gray-700'>We'll send you the best of our blog just once a month. We promise.</p>
                    <input className='focus:outline-none bg-gray-200 text-center mx-auto mt-10 w-3/4 h-10 px-10 py-4 text-black rounded-md' name='email' id='email' placeholder='Email Address' type='text' />
                    <button className='bg-yellow-700 px-3 py-2 text-white mt-5 text-lg self-center rounded-md'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
