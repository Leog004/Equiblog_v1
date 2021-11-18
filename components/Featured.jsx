import React from 'react'

export default function Featured({brands}) {

    function getBorderColor(brandName) {

        console.log(brandName);

        if(String(brandName).toLowerCase() === 'rattler') return 'border-red-400';
        if(String(brandName).toLowerCase() === 'classic equine') return 'border-green-400';
        if(String(brandName).toLowerCase() === 'martin saddlery') return 'border-yellow-800';
        if(String(brandName).toLowerCase() === 'classic rope') return 'border-blue-400';
        if(String(brandName).toLowerCase() === 'cashel') return 'border-yellow-400';

        return 'border-red-200'
    }


    return (
        <div className="py-20 px-0 max-w-6xl w-full mx-auto my-0">
            <div className="flex">
                <div className="flex flex-col w-2/3">
                    <h1 className="text-gray-700 font-semibold text-xl mb-10">Brand Featured</h1>
                    <div className="flex flex-wrap w-full gap-y-8 gap-x-3 justify-between">


                        <div className="w-5/5 shadow-md rounded-xl px-6 py-6 bg-white cursor-pointer">
                            <button className="bg-blue-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">Classic Rope</button>
                            <h2 className="text-xl font-semibold my-5">Our Most Valuable Asset</h2>
                            <p className="text-gray-600">Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna fatebor. Levat placetque…</p>
                            <div className="flex mt-10">
                                <img className='w-12 h-12 shadow-md rounded-3xl' src="https://classicrope.com/cr/Images/ClassicLegacy/shop%2004.jpg" />
                                <div className="flex flex-col items-start">
                                    <span className="text-md text-gray-500 ml-5">
                                        John Doe
                                    </span>
                                    <span className="text-sm text-gray-400 ml-5">
                                        April 16, 2020 
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-60 shadow-md rounded-xl px-6 py-6 bg-white cursor-pointer">
                            <button className="bg-green-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">XpertEquine</button>
                            <h2 className="text-xl font-semibold my-5">Our Most Valuable Asset</h2>
                            <p className="text-gray-600">Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna fatebor. Levat placetque…</p>
                            <div className="flex mt-10">
                                <img className='w-12 h-12 shadow-md rounded-3xl' src="https://classicrope.com/cr/Images/ClassicLegacy/shop%2004.jpg" />
                                <div className="flex flex-col items-start">
                                    <span className="text-md text-gray-500 ml-5">
                                        John Doe
                                    </span>
                                    <span className="text-sm text-gray-400 ml-5">
                                        April 16, 2020 
                                    </span>
                                </div>
                            </div>
                        </div>  

                        <div className="w-60 shadow-md rounded-xl px-6 py-6 bg-white cursor-pointer">
                            
                            <button className="bg-yellow-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">Cashel</button>
                            <h2 className="text-xl font-semibold my-5">Our Most Valuable Asset</h2>
                            <p className="text-gray-600">Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna fatebor. Levat placetque…</p>
                            <div className="flex mt-10">
                                <img className='w-12 h-12 shadow-md rounded-3xl' src="https://classicrope.com/cr/Images/ClassicLegacy/shop%2004.jpg" />
                                <div className="flex flex-col items-start">
                                    <span className="text-md text-gray-500 ml-5">
                                        John Doe
                                    </span>
                                    <span className="text-sm text-gray-400 ml-5">
                                        April 16, 2020 
                                    </span>
                                </div>
                            </div>                        
                        </div>

                        <div className="w-60 shadow-md rounded-xl px-6 py-6 bg-white cursor-pointer">
                            <button className="bg-red-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">Rattler</button>
                            <h2 className="text-xl font-semibold my-5">Our Most Valuable Asset</h2>
                            <p className="text-gray-600">Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna fatebor. Levat placetque…</p>
                            <div className="flex mt-10">
                                <img className='w-12 h-12 shadow-md rounded-3xl' src="https://classicrope.com/cr/Images/ClassicLegacy/shop%2004.jpg" />
                                <div className="flex flex-col items-start">
                                    <span className="text-md text-gray-500 ml-5">
                                        John Doe
                                    </span>
                                    <span className="text-sm text-gray-400 ml-5">
                                        April 16, 2020 
                                    </span>
                                </div>
                            </div>                        
                        </div>  

                    </div>
                </div>
                <div className="flex flex-col w-1/3 gap-y-5">
                    <h1 className="text-gray-700 text-center font-semibold text-xl mb-10">Brands</h1>
                    

                    {
                        brands.map((el) => (
                            <div className={`bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 ${getBorderColor(el.brandName)}`}>
                                <img className='w-auto h-4' src={el.brandImage.url} />
                                <h3 className="mr-2 w-full text-right">{el.brandName}</h3>
                            </div>  
                        ))
                    }

                    {/* <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-green-400">
                        <img className='w-auto h-4' src="https://classicequine.com/ce/assets/images/logo-ce-color.svg" />
                        <h3 className="mr-2 w-full text-right">Classic Equine</h3>
                    </div>

                    <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-yellow-800">
                        <img className='w-auto h-4' src="https://classicrope.com/images/Brands/MARTIN.png" />
                        <h3 className="mr-2 w-full text-right">Martin Saddlery</h3>
                    </div>

                    <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-blue-400">
                        <img className='w-auto h-4' src="https://classicrope.com/images/Brands/CLASSIC.png" />
                        <h3 className="mr-2 w-full text-right">Classic Rope</h3>
                    </div>

                    <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-red-400">
                        <img className='w-auto h-4' src="https://classicrope.com/images/Brands/RATTLER.png" />
                        <h3 className="mr-2 w-full text-right">Rattler</h3>
                    </div>

                    <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-yellow-400">
                        <img className='w-auto h-4' src="https://classicrope.com/images/Brands/CASHEL.png" />
                        <h3 className="mr-2 w-full text-right">Cashel</h3>
                    </div>*/}

                    <div className="bg-white h-full w-3/5 mx-auto my-0 shadow-md rounded-xl px-3 py-2 flex flex-col items-center cursor-pointer border-b-2 border-yellow-400">
                        <video className='h-full w-full overflow-hidden' controls={true} autoPlay={true} muted loop src="/video/Wild horses.mp4"/>
                        <p className="text-sm font-semibold text-gray-700">Feature Video</p>
                    </div> 

                    {/* <div className='h-full w-full align-end'>
                        <img className='w-2/3 mx-auto my-0' src="https://www.marketing91.com/wp-content/uploads/2020/06/COKE-Advertising-Example-Share-a-Coke-Campaign.jpg"/>
                    </div>  */}

                </div>
            </div>
        </div>
    )
}
