import React from 'react'


const BackgroundImage = 'https://images.unsplash.com/photo-1542121917-f75df954c8c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&h=880&q=80';
const LinearGradient = 'linear-gradient(900deg, #eee 25%, #c6770070 100%)'

const Image1 = 'https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=100';
const Image2 = 'https://images.unsplash.com/photo-1416592525293-e65266465eb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80';
const Image3 = 'https://images.unsplash.com/photo-1516704135885-dc4c68a189e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&h=500';
const Image4 = 'https://images.unsplash.com/photo-1517887121-557af22472e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80';

const LinearGradientBlogs = 'linear-gradient(rgb(238 238 238 / 26%) 25%, rgb(51, 48, 0) 100%)'

export default function FeatredBlogs() {
    return (
        <div className="h-xxl" style={{backgroundImage: `${LinearGradient}, url(${BackgroundImage})`}}>
            <h1 className="py-20 font-semibold text-3xl text-center">Featured Blogs</h1>
            <div className="grid grid-cols-4 gap-x-1">

                <div className='bg-white mx-3.5 shadow-md rounded-2xl overflow-hidden bg-cover bg-center hover:shadow-2xl hover:-translate-x-0.5 hover:-translate-y-10 transition duration-500 cursor-pointer' style={{backgroundImage: `${LinearGradientBlogs}, url(${Image1})`, height: '30rem'}}>
                    <div className="flex flex-col h-full items-start py-10 px-10 justify-end">
                        <h1 className='text-white text-xl font-semibold capitalize'>We take the best materials and designs to make the most functional</h1>
                        <button className='px-2 py-1 my-5 rounded-md bg-yellow-700 text-white'>Read More</button>
                        <div className="flex mt-5">
                            <img className='w-12 h-12 shadow-md rounded-3xl' src="https://classicrope.com/cr/Images/ClassicLegacy/shop%2004.jpg" />
                            <div className="flex flex-col items-start">
                                <span className="text-md text-gray-200 ml-5">
                                    John Doe
                                </span>
                                <span className="text-sm text-gray-200 ml-5">
                                    April 16, 2020 
                                </span>
                            </div>
                        </div>                         
                    </div>
                </div>


                <div className='bg-white mx-3.5 shadow-md rounded-2xl overflow-hidden bg-cover bg-center hover:-translate-x-0.5 hover:shadow-2xl hover:-translate-y-10 transition duration-500 cursor-pointer' style={{backgroundImage: `${LinearGradientBlogs}, url(${Image2})`, height: '30rem'}}>
                    <div className="flex flex-col h-full items-start py-10 px-10 justify-end">
                        <h1 className='text-white text-xl font-semibold capitalize'>We take the best materials and designs to make the most functional</h1>
                        <button className='px-2 py-1 my-5 rounded-md bg-yellow-700 text-white'>Read More</button>
                        <div className="flex mt-5">
                            <img className='w-12 h-12 shadow-md rounded-3xl' src="https://classicrope.com/cr/Images/ClassicLegacy/shop%2004.jpg" />
                            <div className="flex flex-col items-start">
                                <span className="text-md text-gray-200 ml-5">
                                    John Doe
                                </span>
                                <span className="text-sm text-gray-200 ml-5">
                                    April 16, 2020 
                                </span>
                            </div>
                        </div>                         
                    </div>
                </div>


                <div className='bg-white mx-3.5 shadow-md rounded-2xl overflow-hidden bg-cover bg-center hover:shadow-2xl hover:translate-x-0.5 hover:-translate-y-10 transition duration-500 cursor-pointer' style={{backgroundImage: `${LinearGradientBlogs}, url(${Image3})`, height: '30rem'}}>
                    <div className="flex flex-col h-full items-start py-10 px-10 justify-end">
                        <h1 className='text-white text-xl font-semibold capitalize'>We take the best materials and designs to make the most functional</h1>
                        <button className='px-2 py-1 my-5 rounded-md bg-yellow-700 text-white'>Read More</button>
                        <div className="flex mt-5">
                            <img className='w-12 h-12 shadow-md rounded-3xl' src="https://classicrope.com/cr/Images/ClassicLegacy/shop%2004.jpg" />
                            <div className="flex flex-col items-start">
                                <span className="text-md text-gray-200 ml-5">
                                    John Doe
                                </span>
                                <span className="text-sm text-gray-200 ml-5">
                                    April 16, 2020 
                                </span>
                            </div>
                        </div>                         
                    </div>
                </div>


                <div className='bg-white mx-3.5 shadow-md rounded-2xl overflow-hidden bg-cover bg-center hover:shadow-2xl hover:translate-x-0.5 hover:-translate-y-10 transition duration-500 cursor-pointer' style={{backgroundImage: `${LinearGradientBlogs}, url(${Image4})`, height: '30rem'}}>
                    <div className="flex flex-col h-full items-start py-10 px-10 justify-end">
                        <h1 className='text-white text-xl font-semibold capitalize'>We take the best materials and designs to make the most functional</h1>
                        <button className='px-2 py-1 my-5 rounded-md bg-yellow-700 text-white'>Read More</button>
                        <div className="flex mt-5">
                            <img className='w-12 h-12 shadow-md rounded-3xl' src="https://classicrope.com/cr/Images/ClassicLegacy/shop%2004.jpg" />
                            <div className="flex flex-col items-start">
                                <span className="text-md text-gray-200 ml-5">
                                    John Doe
                                </span>
                                <span className="text-sm text-gray-200 ml-5">
                                    April 16, 2020 
                                </span>
                            </div>
                        </div>                         
                    </div>
                </div>

            </div>
        </div>
    )
}
