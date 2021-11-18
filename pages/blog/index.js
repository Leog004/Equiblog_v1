import React from 'react'


const HeaderImage = 'https://images.unsplash.com/flagged/photo-1557296126-953ce119454c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80';
const LinearGradient = 'linear-gradient(0deg, #9f9effeb 0%, #0065c670 20%)'

export default function Blogs() {
    return (
        <main className='w-full h-full bg-gray-100'>

            {/* // Component Image */}
            <div className="h-md bg-center" style={{backgroundImage: `${LinearGradient},url(${HeaderImage})`, backgroundSize: 'cover'}}>         
                <div className="flex h-full justify-between items-center max-w-6xl mx-auto my-0">
                {/* Welcome Texts */}
                    <div className="flex justify-start items-center px-6 py-3 self-end mb-10 w-2/3">
                        {/* <button className="bg-blue-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">Classic Rope</button> */}
                        <span className='mr-5'><a className='text-white text-sm' href="#">Home</a></span>
                        <span className='border-l-2 border-blue-100 pl-5 py-5 text-sm mt-5 font-semibold text-gray-300'>
                            <h1 style={{textShadow: '0 2px 4px rgba(0,0,0,0.50)'}} className="text-5xl text-white font-semibold leading-normal"> Blogs </h1>
                        </span>
                    </div>
                </div>
            </div>


            <div className='py-24 w-full'>
                
                <div className='flex flex-wrap max-w-6xl mx-auto my-0 justify-around gap-10'>

                    <h1 className='w-full text-gray-700 font-semibold text-2xl my-2'>New Blogs</h1>
                    <p className='w-full text-md text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                    <div className='flex shadow-md bg-white flex-col w-2/6 p-2 rounded-lg overflow-hidden'>
                        <img className='rounded-lg' src={HeaderImage} alt="An image with a blog" />
                        <h2 className='text-xl font-semibold text-gray-700 px-5 my-5 text-center'>Our Most Valuable Asset</h2>
                        <p className='text-sm text-gray-500 leading-6 px-8'>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
                        <button className="bg-blue-400 px-6 py-1 mt-10 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm self-center">Read More</button>
                    </div>

                    <div className='flex shadow-md bg-white flex-col w-2/6 p-2 rounded-lg overflow-hidden'>
                        <img className='rounded-lg' src={HeaderImage} alt="An image with a blog" />
                        <h2 className='text-xl font-semibold text-gray-700 px-5 my-5 text-center'>Our Most Valuable Asset</h2>
                        <p className='text-sm text-gray-500 leading-6 px-8'>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
                        <button className="bg-blue-400 px-6 py-1 mt-10 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm self-center">Read More</button>
                    </div>

                    <div className='flex shadow-md bg-white flex-col w-1/4 p-2 rounded-lg overflow-hidden'>
                        <img className='rounded-lg' src={HeaderImage} alt="An image with a blog" />
                        <h2 className='text-xl font-semibold text-gray-700 px-5 my-5 text-center'>Our Most Valuable Asset</h2>
                        <p className='text-sm text-gray-500 leading-6 px-8'>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
                        <button className="bg-blue-400 px-6 py-1 mt-10 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm self-center">Read More</button>
                    </div>


                    <div className='flex shadow-md bg-white flex-col w-1/4 p-2 rounded-lg overflow-hidden'>
                        <img className='rounded-lg' src={HeaderImage} alt="An image with a blog" />
                        <h2 className='text-xl font-semibold text-gray-700 px-5 my-5 text-center'>Our Most Valuable Asset</h2>
                        <p className='text-sm text-gray-500 leading-6 px-8'>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
                        <button className="bg-blue-400 px-6 py-1 mt-10 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm self-center">Read More</button>

                    </div>

                    <div className='flex shadow-md bg-white flex-col w-2/6 p-2 rounded-lg overflow-hidden'>
                        <img className='rounded-lg' src={HeaderImage} alt="An image with a blog" />
                        <h2 className='text-xl font-semibold text-gray-700 px-5 my-5 text-center'>Our Most Valuable Asset</h2>
                        <p className='text-sm text-gray-500 leading-6 px-8'>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
                        <button className="bg-blue-400 px-6 py-1 mt-10 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm self-center">Read More</button>

                    </div>

                    <div className='flex shadow-md bg-white flex-col w-2/6 p-2 rounded-lg overflow-hidden'>
                        <img className='rounded-lg' src={HeaderImage} alt="An image with a blog" />
                        <h2 className='text-xl font-semibold text-gray-700 px-5 my-5 text-center'>Our Most Valuable Asset</h2>
                        <p className='text-sm text-gray-500 leading-6 px-8'>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
                        <button className="bg-blue-400 px-6 py-1 mt-10 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm self-center">Read More</button>

                    </div>

                </div>
            </div>
            
        </main>
    )
}
