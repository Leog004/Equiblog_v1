import React from 'react'
import { getProducts } from '../../services';

export default function index({products}) {
    return (
        <main class="my-8">
            <div class="container mx-auto px-6">
                <h3 class="text-gray-700 text-2xl font-medium">Featured Products</h3>
                <span class="mt-3 text-sm text-gray-500">Equibrand Store</span>
                <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {
                    products.map((el) => (
                        <div class="w-full max-w-sm mx-auto rounded-md shadow-xl overflow-hidden">
                        <div className='flex items-end justify-end h-56 w-full bg-cover' style={{backgroundImage: `url(${el.image.url})`}}>
                                <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </button>
                            </div>
                            <div class="px-5 py-3 flex justify-between">
                                <h3 class="text-gray-700 uppercase">{el.title}</h3>
                                <span class="text-gray-500 mt-2">{el.price}</span>
                            </div>
                            <div className='my-2 px-4 w-full text-right flex justify-between items-center'>
                                <img className='h-4' src={el.brand.brandImage.url} />
                                <a href={el.url} target='_blank' className='text-white text-sm shadow-sm px-3 py-2 mt-2 bg-blue-600 rounded-md'>View Now</a>
                            </div>
                        </div>
                    ))
                }
                    
                </div>
            </div>
    </main>

    )
}

export async function getServerSideProps(context) {

    const products = (await getProducts()) || [];

    return {
        props: { products },
      };
}
