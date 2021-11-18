import React from 'react'
import Link from 'next/link'

export default function Header() {

    const handleMobileNav = (e) => {
        e.preventDefault();
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    }

    const handleDropDown = (e) => {
        e.preventDefault();
        document.querySelector('#dropdown').classList.toggle('hidden')
    }

    const handleDropDownAway = (e) => {
        e.preventDefault();

        if(!document.querySelector('#dropdown').classList.contains('hidden'))
            document.querySelector('#dropdown').classList.toggle('hidden')
    }

    return (

        //             {/* Mobile Button */}

        //             <div className="md:hidden flex items-center">
        //                 <button onClick={handleMobileNav} className="mobile-menu-button">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        //                     </svg>
        //                 </button>
        //             </div>

        //         </div>
        //     </div>
        //     {/* // mobile nav */}

        //     <div className="md:hidden mobile-menu hidden transition duration-700 bg-red-500">
        //         <a href="#" className="block py-2 px-3 text-sm  hover:text-gray-200">Features</a>
        //         <a href="#" className="block py-2 px-3 text-sm hover:text-gray-200">Pricing</a>
        //     </div>



        //Navbar goes here
        <nav className="sticky top-0  z-30 h-40 mb-5 md:mb-0 md:h-28 bg-white" style={{fontFamily: 'Karla, sans-serif'}}>
            <div className="max-w-6xl mx-auto px-4 h-full bg-white">
                {/* <div className="md:flex-wrap md:justify-center md:gap-1 md:mt-5 flex justify-between h-full items-center"> */}
                <div className="flex flex-wrap justify-center gap-2 mt-5 md:gap-0 md:mt-0 md:flex-nowrap md:justify-between h-full items-center">

                {/* Logo */}
                <div className="mx-2.5">
                    <Link href='/'>
                        <a className="cursor-pointer" >
                            <img className="max-h-16 w-full" src='/img/Logo.png' alt="Image" />
                        </a>
                    </Link>
                </div>

                {/* search nav */}
                <div className="align-middle items-center">
                    <div className="flex w-96 px-6 py-2 bg-gray-100 shadow-sm">
                        <span className="items-center justify-center content-center flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input className="w-96 bg-gray-100 px-2 py-2 focus:outline-none"  type="text" name="search" placeholder="Discover news, articles and more.." />
                    </div>
                </div>

                {/* // primary nav */}
                  <div className="hidden md:inline-flex flex items-center space-x-1">
                    <Link href="/"><a className="py-5 px-3 text-gray-400 text-sm font-semibold hover:text-gray-900">Home</a></Link> 
                    <a href="#" onMouseLeave={handleDropDownAway} onClick={handleDropDown} className="py-5 px-3 text-gray-400 text-sm font-semibold hover:text-gray-900">
                        Our Brands &darr;
                        <div id="dropdown" className="shadow-xl absolute top-0 pt-10 bg-white w-1/8 flex flex-col hidden">
                            <h1 className='text-left pb-12 pt-1 px-0 text-gray-700 font-semibold text-md'>Our Brands &darr;</h1>
                            <hr/>
                            <a href="#" className="py-5 px-3 hover:bg-blue-100 text-gray-400 text-sm font-semibold hover:text-gray-900">
                                <img className='w-auto h-4' src="https://classicequine.com/ce/assets/images/logo-ce-color.svg" />
                            </a>
                            <a href="#" className="py-5 px-3 hover:bg-blue-100 text-gray-400 text-sm font-semibold hover:text-gray-900">
                                <img className='w-auto h-4' src="https://classicrope.com/images/Brands/MARTIN.png" />
                            </a>
                            <a href="#" className="py-5 px-3 hover:bg-blue-100 text-gray-400 text-sm font-semibold hover:text-gray-900">
                                <img className='w-auto h-4' src="https://classicrope.com/images/Brands/CLASSIC.png" />
                            </a>
                            <a href="#" className="py-5 px-3 hover:bg-blue-100 text-gray-400 text-sm font-semibold hover:text-gray-900">
                                <img className='w-auto h-4' src="https://classicrope.com/images/Brands/RATTLER.png" />
                            </a>
                            <a href="#" className="py-5 px-3 hover:bg-blue-100 text-gray-400 text-sm font-semibold hover:text-gray-900">
                                <img className='w-auto h-4' src="https://classicrope.com/images/Brands/CASHEL.png" />
                            </a>
                        </div>
                    </a>
                    <Link href="/blog" ><a className="py-5 px-3 text-gray-400 text-sm font-semibold hover:text-gray-900">Blogs</a></Link>
                    <Link href="#"><a className="py-5 px-3 text-gray-400 text-sm font-semibold hover:text-gray-900">Feature Products</a></Link>
                 </div>

                 <div class="p-10">

</div>

                {/* Mobile Button */}


                {/* // mobile nav */}


                </div>
            </div>
        </nav>
    )
}
