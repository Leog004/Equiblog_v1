import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='w-full bg-white h-full'>
            <div className='max-w-5xl mx-auto my-0 py-20'>
                <div className='grid grid-cols-3 justify-between text-center'>

                    {/* Logo */}
                    <div className='flex flex-col border-r-2 border-gray-50 justify-center'>
                        <img style={{width: 'fit-content'}} className='h-24' src='/img/logo.png'/>
                        <p className='text-sm text-left mt-10'>All rights reserve @Equibrand 2021</p>
                    </div>

                    {/* Navs */}
                    <nav className='flex flex-col w-full border-r-2 border-gray-50'>
                        <div className="hidden md:inline-flex h-full items-center justify-center flex-wrap">
                            <Link href={"/"}><a className="py-5 px-5 text-gray-400 text-sm font-semibold hover:text-gray-900">Home</a></Link>
                            <Link href={"/blog"}><a href="#" className="py-5 px-5 text-gray-400 text-sm font-semibold hover:text-gray-900">Our Blogs</a></Link>
                            <Link href={"/contact"}><a href="#" className="py-5 px-5 text-gray-400 text-sm font-semibold hover:text-gray-900">Contact</a></Link>
                            <Link href={"/"}><a href="#" className="py-5 px-5 text-gray-400 text-sm font-semibold hover:text-gray-900">Terms & Services</a></Link>
                            <Link href={"/"}><a href="#" className="py-5 px-5 text-gray-400 text-sm font-semibold hover:text-gray-900">Shop</a></Link>
                        </div>
                    </nav>

                    {/* Contact Adress */}
                    <div className='flex flex-col border-r-2 p-5 border-gray-50'>
                        <iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Equibrand%20Corporation%203500%20W%20US%20Hwy%20377&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                        <p className='text-sm text-center mt-10'>Equibrand Corporation 3500 W US Hwy 377</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
