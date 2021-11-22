import React, {useState, useEffect} from 'react'
import Subscribe from '../../components/Subscribe';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import { submitMessage } from '../../services';

toast.configure();

const HeaderImage = 'https://images.unsplash.com/flagged/photo-1557296126-953ce119454c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80';
const LinearGradient = 'linear-gradient(0deg, #9f9effeb 0%, #0065c670 20%)'

export default function index() {

    const successMessage = () => {
        toast.success('Email has sucesfully been submitted, thank you! ', {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000});
    }
    
    const errorMessage = (msg) => {
        toast.error(`${msg ? msg : 'Make sure all fields are filled and that you use a vaild email address' }`, {position: toast.POSITION.BOTTOM_RIGHT,  autoClose: 5000});
    }

    const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', message:''});
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

          const {firstName, lastName, email, message} = formData;

          if(!firstName || !lastName || !email || !message)
          {
              setError(true);
              errorMessage();
              return;
          }


          const messageObj = {
              firstName, lastName, email, message
          };

          submitMessage(messageObj).then((res) => {
              if(res.createMessage){
                formData.firstName = '';
                formData.lastName = '';
                formData.email = '';
                formData.message = '';
                setShowSuccessMessage(true);
                return successMessage();
              }
          })
          .catch((err) => {
            errorMessage('Oops, something went wrong. Please try again later');
        });
      }

    return (
        <main className='w-full h-full bg-gray-100'>
            {/* // Component Image */}
            <div className="h-md bg-center" style={{backgroundImage: `${LinearGradient},url(${HeaderImage})`, backgroundSize: 'cover'}}>         
                <div className="flex h-full justify-between items-center max-w-6xl mx-auto my-0">
                {/* Welcome Texts */}
                    <div className="flex justify-start items-center px-6 py-3 self-end mb-10 w-2/3">
                        {/* <button className="bg-blue-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">Classic Rope</button> */}
                        <span className='mr-5'><a className='text-white text-sm' href="#">Home</a></span>
                        <span className='border-l-2 border-blue-100 pl-5 py-5 text-sm mt-5 font-semibold text-gray-300'>
                            <h1 style={{textShadow: '0 2px 4px rgba(0,0,0,0.50)'}} className="text-5xl text-white font-semibold leading-normal"> Contact </h1>
                        </span>
                    </div>
                </div>
            </div>


            <div className='py-24 w-full'>
                <div className='flex flex-wrap max-w-6xl mx-auto my-0 justify-around'>
                <div className='bg-white w-full my-0 mx-auto'>
                <div className='h-md w-full bg-cover bg-center' style={{backgroundImage: `url(${HeaderImage})`}}></div>
                    <div className=' py-16 px-16 '>
                        <h1 className='w-full text-center text-gray-700 font-semibold text-3xl leading-10 my-2 capitalize'>We would like to hear from you</h1>
                        <p className='w-full text-center text-md text-gray-500 mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                            <form className='w-1/2 my-10 mx-auto grid grid-cols-2 gap-5 justify-between'>
                                <div className='flex flex-col w-full'>
                                    <label className='text-gray-700 text-lg font-semibold leading-10'>First Name</label>
                                    <input value={formData.firstName} onChange={onInputChange} className='bg-gray-200 py-2 px-5 rounded-md' type='text' placeholder='first-name' name='firstName' />
                                </div>

                                <div className='flex flex-col w-full'>
                                    <label className='text-gray-700 text-lg font-semibold leading-10'>Last Name</label>
                                    <input value={formData.lastName} onChange={onInputChange} className='bg-gray-200 py-2 px-5 rounded-md' type='text' placeholder='last-name' name='lastName' />
                                </div>

                                <div className='flex flex-col w-full col-span-2'>
                                    <label className='text-gray-700 text-lg font-semibold leading-10'>Email</label>
                                    <input value={formData.email} onChange={onInputChange} className='bg-gray-200 py-2 px-5 rounded-md' type='text' placeholder='your email' name='email' />
                                </div>

                                <div className='flex flex-col w-full col-span-2'>
                                    <label className='text-gray-700 text-lg font-semibold leading-10'>Message</label>
                                    <textarea value={formData.message}  onChange={onInputChange} className='bg-gray-200 py-2 px-5 h-sm rounded-md' type='text' placeholder='Message...' name='message'></textarea>
                                </div>

                                <button  onClick={submitHandler} className='bg-blue-700 px-2 py-3 text-white rounded-lg' type='button'>Submit</button>
                            </form>
                        </div>

                    </div>
                    <Subscribe/>
                </div>
            </div>

        </main>
    )
}
