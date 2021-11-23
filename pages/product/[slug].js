import React, {useState} from 'react'
import { ShippingForm } from '../../components';
import { getProductDetails, getProductsSlug } from '../../services';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_TaVn2jvIdYAuA8ZwVRqQF1YA');

export default function ({product}) {

    const [showShop, setShowShop] = useState(false)

    const isReader = (e) => {
        e.preventDefault();
       
        setShowShop(true);
    }
    

    return (
        <Elements stripe={stripePromise}>
        {
            product ?
            
        <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded overflow-hidden" src={product.image.url}/>
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">Featured Product</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{product.title}</h1>
                        <span class="title-font font-medium text-2xl text-gray-900">${product.price}</span>

                        <p class="leading-relaxed mt-10">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        <div class="mt-10 pb-5 border-b-2 border-gray-200 mb-5"></div>
                        <div class="flex">
                        <button onClick={isReader} type='button' class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>
        </section> : <h1 className='text-2xl text-gray-700 w-full text-center my-10 font-semibold'>Product Not Found</h1>
        }

        { showShop && <ShippingForm image={product.image.url}/>}
        </Elements>
    )
}

// Fetch data at build time
export async function getStaticProps({ params }) 
{
    const data = await getProductDetails(params.slug);

    return {
      props: {
        product: data,
      },
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getProductsSlug();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }