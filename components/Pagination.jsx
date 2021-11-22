import React from 'react'

export default function Pagination({postsPerPage, totalPosts, paginate}) {

    const PageNumber = [];

    for(let x = 1; x <= Math.ceil(totalPosts / postsPerPage); x++){
        PageNumber.push(x);
    }

    return (
        <nav className='flex w-full justify-center'>
            <ul className='flex gap-5 items-center'>
                {
                    PageNumber.map(number => (
                        <li key={number} className=''>
                            <button onClick={() => paginate(number)} type='button' className='shadow-lg overflow-hidden cursor-pointer bg-blue-100 py-2 px-3 rounded-lg hover:bg-blue-200 transition-all transform duration-300'>{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
