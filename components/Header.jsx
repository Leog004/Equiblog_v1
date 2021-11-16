import React from 'react'

export default function Header() {

    const handleMobileNav = (e) => {
        e.preventDefault();
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    }

    return (
        // Navbar goes here
        // <nav className="bg-gray-200 h-24">
        //     <div className="max-w-6xl mx-auto px-4 h-full">
        //         <div className="flex justify-between h-full items-center">
        //             <div className="flex space-x-4">

        //                 {/* Logo */}
        //                 <div>
        //                     <a href="#" className="flex items-center py-5 px-3 text-gray-700">
        //                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        //                         </svg>
        //                         <span className="font-bold">Better Dev</span>
        //                     </a>
        //                 </div>


        //                 {/* primary nav */}
        //                 <div className="hidden md:inline-flex flex items-center space-x-1">
        //                     <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Features</a>
        //                     <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</a>
        //                 </div>
        //             </div>

        //             {/* // secondary nav */}
        //             <div className="hidden md:inline-flex flex items-center space-x-3">
        //                     <a href="#" className="py-5 px-3">Login</a>
        //                     <a href="#" className="py-3 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-white hover:text-yellow-400 duration-400 transition-all ease-in-out">Signup</a>        
        //             </div>


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
        // </nav>



        //Navbar goes here
        <nav className="h-40 mb-5 md:mb-0 md:h-24" style={{fontFamily: 'Karla, sans-serif'}}>
            <div className="max-w-6xl mx-auto px-4 h-full bg-white">
                {/* <div className="md:flex-wrap md:justify-center md:gap-1 md:mt-5 flex justify-between h-full items-center"> */}
                <div className="flex flex-wrap justify-center gap-2 mt-5 md:gap-0 md:mt-0 md:flex-nowrap md:justify-between h-full items-center">

                {/* Logo */}
                <div className="mx-2.5">
                    <a className="cursor-pointer" href="/">
                        <img className="max-h-12 w-full" src='./img/Logo.png' alt="Image" />
                    </a>
                </div>

                {/* search nav */}
                <div className="align-middle items-center">
                    <div className="flex w-96 px-6 py-2 bg-gray-50 shadow-sm">
                        <span className="items-center justify-center content-center flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input className="w-96 bg-gray-50 px-2 py-2 focus:outline-none"  type="text" name="search" placeholder="Discover news, articles and more.." />
                    </div>
                </div>

                {/* // primary nav */}
                  <div className="hidden md:inline-flex flex items-center space-x-1">
                    <a href="#" className="py-5 px-3 text-gray-400 text-sm font-semibold hover:text-gray-900">Home</a>
                    <a href="#" className="py-5 px-3 text-gray-400 text-sm font-semibold hover:text-gray-900">Our Brands</a>
                    <a href="#" className="py-5 px-3 text-gray-400 text-sm font-semibold hover:text-gray-900">Contact</a>
                 </div>

                {/* Mobile Button */}


                {/* // mobile nav */}


                </div>
            </div>
        </nav>
    )
}
