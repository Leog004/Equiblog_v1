import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { getHeaderFeatures } from '../services';

const HeaderImage = 'https://images.unsplash.com/flagged/photo-1557296126-953ce119454c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80';
const LinearGradient = 'linear-gradient(900deg, #fcff9e40 0%, #c6770070 100%)'

export default function Hero() {

    const [featuredPost, setfeaturedPost] = useState([]);

    useEffect(() => {
        getHeaderFeatures().then((result) => {
            setfeaturedPost(result);
        });
      }, []);


    return (

        // Component Image
        <div className="h-xl bg-red-200" style={{backgroundImage: `${LinearGradient},url(${HeaderImage})`, backgroundSize: 'cover'}}>
            
            <div className="flex h-full justify-between items-center max-w-6xl mx-auto my-0">
            {/* Welcome Texts */}
                <div className="flex flex-col justify-center items-baseline px-6 py-3 self-end mb-32 w-2/3">
                    <button className="bg-red-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">Rattler</button>
                    <h1 style={{textShadow: '0 2px 4px rgba(0,0,0,0.80)'}} className="text-5xl text-white font-semibold leading-normal"> THE CLASSIC DIFFERENCE IS HERE TO STAY </h1>
                </div>


            {/* Featured Blogs */}
            <div className="flex flex-col justify-center items-baseline w-1/3 gap-5">

                {
                    featuredPost.map((el) => (

                    
                        <Link href={`/blog/${el.slug}`}>
                            <article className="bg-white py-1.5 pl-2 pr-2 rounded-xl shadow-lg cursor-pointer flex flex-wrap overflow-hidden border-l-8 border-green-300 hover:translate-x-4 hover:shadow-2xl hover:border-green-600 transition duration-300 ease-in-out">
                            
                                <img className="w-1/3 rounded-md" src={el.blogImage.url} />
                                <div className="w-2/3 px-4">
                                    <h3 className="mt-2 text-md font-semibold text-gray-700">{el.title}</h3>
                                    <p className="mt-3 text-xs font-semibold text-gray-600">{el.brand.brandName}</p>
                                    <span className="flex text-xs font-light text-gray-700">June 02, 2020
                                            <span className="ml-4 flex items-end">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                2 min
                                            </span>
                                    </span>
                                </div>
                            </article>
                        </Link>    
                        
                    ))
                    
                }

                {/* <Link href='/blog/asd'>
                    <article className="bg-white py-1.5 pl-2 pr-2 rounded-xl shadow-lg cursor-pointer flex flex-wrap overflow-hidden border-l-8 border-green-300 hover:translate-x-4 hover:shadow-2xl hover:border-green-600 transition duration-300 ease-in-out">
                     
                        <img className="w-1/3 rounded-md" src="https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=100" />
                        <div className="w-2/3 px-4">
                            <h3 className="mt-2 text-md font-semibold text-gray-700">Classic ropes are CONSISTENT due to our CoreTech technology.</h3>
                            <p className="mt-3 text-xs font-semibold text-gray-600">Classic Rope</p>
                            <span className="flex text-xs font-light text-gray-700">June 02, 2020
                                    <span className="ml-4 flex items-end">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        2 min
                                    </span>
                             </span>
                        </div>
                    </article>
                </Link>
                    <article className="bg-white py-1.5 pl-2 pr-2 rounded-xl shadow-lg cursor-pointer flex flex-wrap overflow-hidden border-l-8 border-green-300 hover:translate-x-4 hover:shadow-2xl hover:border-green-600 transition duration-300 ease-in-out">
                        <img className="w-1/3 rounded-md" src="https://images.unsplash.com/photo-1605264522799-1996bdbe5f72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=100" />
                        <div className="w-2/3 px-4">
                            <h3 className="mt-2 text-md font-semibold text-gray-700">Innovation and leadership are at the core if Classic Rope's DNA</h3>
                            <p className="mt-3 text-xs font-semibold text-gray-600">Classic Rope</p>
                            <span className="flex text-xs font-light text-gray-700">June 02, 2020
                                    <span className="ml-4 flex items-end">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        2 min
                                    </span>
                             </span>
                        </div>
                    </article>

                    <article className="bg-white py-1.5 pl-2 pr-2 rounded-xl shadow-lg cursor-pointer flex flex-wrap overflow-hidden border-l-8 border-green-300 hover:translate-x-4 hover:border-green-600 hover:shadow-2xl transition duration-300 ease-in-out">
                        <img className="w-1/3 rounded-md" src="https://images.unsplash.com/photo-1593179449458-e0d43d512551?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=100" />
                        <div className="w-2/3 px-4">
                            <h3 className="mt-2 text-md font-semibold text-gray-700">Classic ropes bringing Organization to the sport.</h3>
                            <p className="mt-3 text-xs font-semibold text-gray-600">Classic Rope</p>
                            <span className="flex text-xs font-light text-gray-700">June 02, 2020
                                    <span className="ml-4 flex items-end">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        2 min
                                    </span>
                             </span>
                        </div>
                        
                    </article> */}

                </div>


            </div>
        </div>
    )
}
