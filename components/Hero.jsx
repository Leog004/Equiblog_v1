import React from 'react'

const HeaderImage = 'https://images.unsplash.com/flagged/photo-1557296126-953ce119454c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80';
const LinearGradient = 'linear-gradient(900deg, #fcff9e40 0%, #c6770070 100%)'

export default function Hero() {
    return (

        // Component Image
        <div className="h-xl bg-red-200" style={{backgroundImage: `${LinearGradient},url(${HeaderImage})`, backgroundSize: 'cover'}}>
            
            <div className="flex h-full justify-between items-center max-w-6xl mx-auto my-0">
            {/* Welcome Texts */}
                <div className="flex flex-col justify-center items-baseline px-6 py-3 self-end mb-32 w-2/3">
                    <button className="bg-red-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">Rattler</button>
                    <h1 className="text-5xl text-white font-semibold"> THE CLASSIC DIFFERENCE </h1>
                </div>


            {/* Featured Blogs */}
                <div className="flex flex-col justify-center items-baseline w-1/3 gap-5">

                    <article className="bg-white py-1.5 pl-2 pr-2 rounded-2xl shadow-lg cursor-pointer flex flex-wrap overflow-hidden border-l-8 border-green-300">
                        <img className="w-1/3 rounded-md" src="https://images.unsplash.com/photo-1605264522799-1996bdbe5f72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=100" />
                        <div className="w-2/3 px-4">
                            <h3 className="mt-2 text-md font-semibold text-gray-700">Classic ropes are CONSISTENT due to our CoreTech technology.</h3>
                            <p className="mt-3 text-xs font-semibold text-gray-600">Classic Rope</p>
                            <span>June 02, 2020</span>
                        </div>
                  
                    </article>

                    <article className="bg-white py-1.5 pl-2 pr-2 rounded-2xl shadow-lg cursor-pointer flex flex-wrap overflow-hidden border-l-8 border-green-300">
                        <img className="w-1/3 rounded-md" src="https://images.unsplash.com/photo-1605264522799-1996bdbe5f72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=100" />
                        <div className="w-2/3 px-4">
                            <h3 className="mt-2 text-md font-semibold text-gray-700">Classic ropes are CONSISTENT due to our CoreTech technology.</h3>
                            <p className="mt-3 text-xs font-semibold text-gray-600">Classic Rope</p>
                            <span>June 02, 2020</span>
                        </div>
                        
                    </article>

                    <article className="bg-white py-1.5 pl-2 pr-2 rounded-2xl shadow-lg cursor-pointer flex flex-wrap overflow-hidden border-l-8 border-green-300">
                        <img className="w-1/3 rounded-md" src="https://images.unsplash.com/photo-1605264522799-1996bdbe5f72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=100" />
                        <div className="w-2/3 px-4">
                            <h3 className="mt-2 text-md font-semibold text-gray-700">Classic ropes are CONSISTENT due to our CoreTech technology.</h3>
                            <p className="mt-3 text-xs font-semibold text-gray-600">Classic Rope</p>
                            <span>June 02, 2020</span>
                        </div>
                        
                    </article>

                </div>


            </div>
        </div>
    )
}