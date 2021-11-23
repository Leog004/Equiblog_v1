import React, {useState} from 'react'
import axios from "axios";


import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();


export default function ShippingForm({image, payment}) {

    const clearFields = () => {
        document.getElementsByName('firstname')[0].value = '';
        document.getElementsByName('lastname')[0].value = '';
        document.getElementsByName('email')[0].value = '';
    }

    const successMessage = () => {
        toast.success('Your payment was succesfull. You should be recieving an email shortly! ', {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000});
        clearFields();
    }

    const errorMessage = () => {
        toast.error(`Something went wrong, please try again or contact support. ${checkoutError}`, {position: toast.POSITION.BOTTOM_RIGHT,  autoClose: 5000});
        clearFields();
    }

    const stripe = useStripe();
    const elements = useElements();

    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: ''});

    const onInputChange = (e) => {
        const { target } = e;
        if (target.type === 'checkbox') {
          setFormData((prevState) => ({
            ...prevState,
            [target.name]: target.checked,
          }));
        } else {
          setFormData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
          }));
        }
      };

      const handleCardDetailsChange = e => {
        e.error ? setCheckoutError(e.error.message) : setCheckoutError();
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const { firstname, lastname, email } = formData;

        const billingDetails = {
            name: `${firstname} ${lastname}`,
            email: `${email}`
        };

        setProcessingTo(true);

        const cardElement = elements.getElement("card");
        try {
            const { data: clientSecret } = await axios.post("/api/payment_intents", {
                amount: payment * 100
            });

            const paymentMethodReq = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: billingDetails
            });

            if (paymentMethodReq.error) {
                setCheckoutError(paymentMethodReq.error.message);
                setProcessingTo(false);
                errorMessage();
                return;
            }

            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq.paymentMethod.id
            });

            if (error) {
                setCheckoutError(error.message);
                errorMessage();
                setProcessingTo(false);
                return;
            }

            // setSuccess(true);
            successMessage();
            window.location.href = '/';
            

            } catch (err) {
            setCheckoutError(err.message);
            errorMessage();
        }       
        
        cardElement.clear();
        setProcessingTo(false);
    };

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
                <h1 class="text-xl font-semibold">Amount {payment}</h1>
                <form class="mt-0">
                <div class="flex justify-between gap-3">
                    <span class="w-1/2">
                    <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                    <input onChange={onInputChange} id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    </span>
                    <span class="w-1/2">
                    <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                    <input onChange={onInputChange} id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    </span>
                </div>
                <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                <input id="email" onChange={onInputChange} type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <label for="address" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Address</label>
                <input id="address" onChange={onInputChange} type="text" name="address" placeholder="Your address"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <label for="state" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">State</label>
                <input id="state" onChange={onInputChange} type="text" name="state" placeholder="Texas" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <label for="zip" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Zip Code</label>
                <input id="zip" onChange={onInputChange} type="text" name="zip" placeholder="55555" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                
                <label htmlFor="cn" className='block mt-2 text-xs font-semibold text-gray-600 uppercase' >Card Information</label>
                <CardElement onChange={handleCardDetailsChange} className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner' />

                <button onClick={handleFormSubmit} disabled={isProcessing || !stripe} type='submit' class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                {isProcessing ? "Processing..." : `Purchase`}
                </button>
                </form>
            </div>
            </div>
    )
}
