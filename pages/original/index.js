import React from 'react'


const HeaderImage = 'https://images.unsplash.com/flagged/photo-1557296126-953ce119454c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80';
const LinearGradient = 'linear-gradient(0deg, #9f9effeb 0%, #0065c670 20%)'

export default function ({post}) {
    return (

        <main className='w-full h-full bg-gray-100'>
            {/* // Component Image */}
            <div className="h-xl" style={{backgroundImage: `${LinearGradient},url(${HeaderImage})`, backgroundSize: 'cover'}}>         
                <div className="flex h-full justify-between items-center max-w-6xl mx-auto my-0">
                {/* Welcome Texts */}
                    <div className="flex flex-col justify-center items-baseline px-6 py-3 self-end mb-32 w-2/3">
                        <button className="bg-blue-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">Classic Rope</button>
                        <h1 style={{textShadow: '0 2px 4px rgba(0,0,0,0.50)'}} className="text-5xl text-white font-semibold leading-normal"> THE CLASSIC DIFFERENCE IS HERE TO STAY </h1>
                        <span className=' border-l-2 border-blue-100 pl-5 py-5 text-sm mt-5 font-semibold text-gray-300'>
                                April 02, 2020 - (1 min)
                        </span>
                    </div>
                </div>
            </div>


            <div className="py-20 px-0 max-w-6xl w-full mx-auto my-0">
                <div className="flex justify-between gap-10">
                    <div className="flex flex-col bg-white shadow-sm py-10 px-12 rounded-lg w-2/3">
                        <h1 className="text-gray-700 font-semibold text-xl mb-10">Primo in altis pelle alumnae</h1>
                        <p className='text-base font-base leading-8 text-justify'>
                            Lorem markdownum obvius in seque opus, est bicorni forte; laeva. 
                            Iurant patria beatam semel communis et atra qua fugit, solet invicti cui inter patulas regibus remolliat volumina sorori? 
                            Quidem miscentem regna interea natura in adligat, aenum onere placere lympha. 
                            Sunt tantum intentare exhortatus avidas Scythides lacrimis imitatus prohibent terraeque donec ulterius thalamosque fero comitantibus. 
                            Tela cervicem insiluit locis, falsa et umida ulterius digitos excipiunt!
                        </p>

                        <p className='text-base font-base leading-8 text-justify my-10'>
                            Facto adversaque telum, stirpe? Sic et illi praesepia agna esse quas siluere capax sim tangi iubebit furtim cuncta, tutaeque ob utque stagni spargere. 
                            Totum silva feramus haec terras lacus omnia talia!
                        </p>

                        <ol className='list-disc px-4'>
                            <li>  Quis de per nec nec </li>
                            <li>  Quis de per nec nec </li>
                            <li>  Quis de per nec nec </li>
                            <li>  Quis de per nec nec </li>
                        </ol>


                        <h2 className='text-gray-700 font-semibold text-lg mt-10 mb-0'>Addidit neve qui versa</h2>

                        <p className='text-base font-base leading-8 text-justify mt-2 mb-10'>
                            Facto adversaque telum, stirpe? Sic et illi praesepia agna esse quas siluere capax sim tangi iubebit furtim cuncta, tutaeque ob utque stagni spargere. 
                            Totum silva feramus haec terras lacus omnia talia!
                        </p>

                        <p className='text-base italic p-10 border-l-2 border-blue-400 leading-8 text-justify mt-2 mb-10'>
                        Leni vacuus: non sociorum et aperto onerosus extrema Pagasaea tempore gemunt et facta posset. Caecum tauros, ferrataque Ulixis pharetratae aquarum Plura cum sua invitaque qui verba rerum Romanique Tethyn interit ungues trahens illi.
                        </p>

                        <p className='text-base font-base leading-8 text-justify'>
                            Facto adversaque telum, stirpe? Sic et illi praesepia agna esse quas siluere capax sim tangi iubebit furtim cuncta, tutaeque ob utque stagni spargere. 
                            Totum silva feramus haec terras lacus omnia talia!
                        </p>


                        <p className='text-base font-base leading-8 text-justify mt-2 mb-5'>
                            Facto adversaque telum, stirpe? Sic et illi praesepia agna esse quas siluere capax sim tangi iubebit furtim cuncta, tutaeque ob utque stagni spargere. 
                            Totum silva feramus haec terras lacus omnia talia!
                        </p>

                        <hr/>

                            <div className='flex w-full py-10 items-center justify-between'>
                                <div className='flex'>
                                    <h4 className='mx-2 text-gray-700 text-md font-semibold'>Tags: </h4> 
                                    <button className='mx-1 px-3 py-2 text-xs text-white bg-blue-900 rounded-lg'>#Bussiness</button>
                                    <button className='mx-1 px-3 py-2 text-xs text-white bg-blue-900 rounded-lg'>#Classic Rope</button>
                                </div>

                                <div className='flex gap-2'>
                                    <h4 className='mx-2 text-gray-700 text-md font-semibold'>Share: </h4> 
                                    <span>Facebook</span>
                                    <span>Twitter</span>
                                    <span>Instagram</span>
                                </div>

                            </div>

                        <hr/>


                        <div className='flex py-10 justify-between items-center'>
                            <div>
                                <h2 className='text-xl text-gray-700 font-semibold'>Comments</h2>
                            </div>
                            <div className='flex gap-4'>
                                <button className='text-sm'>Sign In</button>
                                <button className='text-sm border-gray-100 px-2 py-2 rounded-lg border-2'>Sign Up</button>
                            </div>
                        </div>

                        <form className='flex w-full border-2 border-gray-200 rounded-lg h-28 shadow-inner'>
                            <textarea className='px-12 py-10 w-full' name='comment' placeholder='Enter your comment here...'></textarea>
                        </form>

                    </div>

                <aside className='flex sticky top-32 flex-col h-full w-1/3 gap-y-5'>
                    <h1 className="text-gray-700 text-center font-semibold text-xl mb-10">Brands</h1>
                    
                    <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-green-400">
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
                    </div>

                    {/* <div className="bg-white h-full w-3/5 mx-auto my-0 shadow-md rounded-xl px-3 py-2 flex flex-col items-center cursor-pointer border-b-2 border-yellow-400">
                        <video className='h-full w-full overflow-hidden' controls={true} autoPlay={true} muted loop src="/video/Wild horses.mp4"/>
                        <p className="text-sm font-semibold text-gray-700">Feature Video</p>
                    </div> */}
{/* 
                    <div className='h-full w-full align-end'>
                        <img className='w-2/3 mx-auto my-0' src="https://www.marketing91.com/wp-content/uploads/2020/06/COKE-Advertising-Example-Share-a-Coke-Campaign.jpg"/>
                    </div> */}

                </aside>

                    {/* Aside */}

                    {/* <aside className='flex sticky top-0 flex-col h-full w-1/3 gap-y-5'>
                        <div className='h-full  bg-white shadow-sm py-10 px-12 rounded-lg'>
                            alksjdlkasjdlk
                        </div>

                        <div className='h-full  bg-white shadow-sm py-10 px-12 rounded-lg'>
                            alksjdlkasjdlk
                        </div>

                        <div className='h-full  bg-white shadow-sm py-10 px-12 rounded-lg'>
                            alksjdlkasjdlk
                        </div>

                        <div className='h-full  bg-white shadow-sm py-10 px-12 rounded-lg'>
                            alksjdlkasjdlk
                        </div>

                        
                        <div className='h-full  bg-white shadow-sm py-10 px-12 rounded-lg'>
                            alksjdlkasjdlk
                        </div>

                        
                        <div className='h-full  bg-white shadow-sm py-10 px-12 rounded-lg'>
                            alksjdlkasjdlk
                        </div>
                    </aside> */}
                </div>
            </div>

        </main>
    )
}
