import React from 'react'
import axios from "axios";


import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function ShippingForm({image}) {

    const stripe = useStripe();
    const elements = useElements();

    const CardElementOptions = {
        style: {
            base: {
                backgroundColor: '#fdf2e9',
                height: '500px',
                fontSize: '1.3rem',
                "::placeholder": {
                    
                }
            }
        }
    }

    return (
        
            <div class="grid min-h-full h-full z-50 place-items-center fixed w-full top-0 left-0 bottom-0 right-0 bg-blue-200">
            <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                {/* <h1 class="text-xl font-semibold">Hello there 👋, <span class="font-normal">please fill in your information to continue</span></h1> */}
                <form class="mt-0">
                <div class="flex justify-between gap-3">
                    <span class="w-1/2">
                    <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                    <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    </span>
                    <span class="w-1/2">
                    <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                    <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    </span>
                </div>
                <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <label for="address" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Address</label>
                <input id="address" type="text" name="address" placeholder="Your address"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <label for="state" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">State</label>
                <input id="state" type="text" name="state" placeholder="Texas" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <label for="zip" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Zip Code</label>
                <input id="zip" type="text" name="zip" placeholder="55555" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                
                <label htmlFor="cn" className='block mt-2 text-xs font-semibold text-gray-600 uppercase' >Card Information</label>
                <CardElement className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner' />

                <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                    Purchase
                </button>
                </form>
            </div>
            </div>
    )
}
