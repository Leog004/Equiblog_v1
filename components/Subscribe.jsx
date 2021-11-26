import React, {useState} from 'react'
import { toast } from 'react-toastify';
import { submitComment } from '../services';

import 'react-toastify/dist/ReactToastify.css'

toast.configure();

export default function Subscribe() {

    const successMessage = () => {
        toast.success('Email has sucesfully been submitted, thank you! ', {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000});
    }
    
    const errorMessage = (msg) => {
        toast.error(`${msg ? msg : 'Make sure all fields are filled and that you use a vaild email address' }`, {position: toast.POSITION.BOTTOM_RIGHT,  autoClose: 5000});
    }

    const [formData, setFormData] = useState({email: ''});
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [error, setError] = useState(false);


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


      
      const submitHandler = (e) => {
        e.preventDefault();
        setError(false);
        const { email } = formData;

        
        if (!email) {
          setError(true);
          errorMessage();
          return;
        }

        const commentObj = 
        {
            email
        };
    
    
        submitComment(commentObj)
          .then((res) => {
              if(res.createSubscriber){
                formData.email = '';
                setError(true);
                successMessage();
              }
          }).catch((err) => {
              formData.email = '';
              setError(true);
              errorMessage('User has already been inserted. Thank you!');
          });
      };

    return (
        <div className='h-full max-w-6xl py-4 px-0 w-full mx-auto my-0 rounded-2xl'>
            <div className='p-10 md:p-20 bg-white my-20 rounded-xl'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold text-center w-full'>Subscribe to our newsletter!</h1>
                    <p className='text-light text-center mt-5 text-gray-700'>We'll send you the best of our blog just once a month. We promise.</p>
                    <input onChange={onInputChange} value={formData.email} className='focus:outline-none bg-gray-200 text-center mx-auto mt-10 w-3/4 h-10 px-10 py-4 text-black rounded-md' name='email' id='email' placeholder='Email Address' type='text' />
                    <button onClick={submitHandler} className='bg-yellow-700 px-3 py-2 text-white mt-5 text-lg self-center rounded-md'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
