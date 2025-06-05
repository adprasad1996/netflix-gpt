
import React from 'react';


const VedioTitle = ({original_title,overview })=> {
    return (
        <div className='w-screen aspect-video bg-gradient-to-r from-black text-white pt-60 px-12 absolute'>
            <h1 className='text-3xl font-bold'>{original_title}</h1>
            <p className='w-1/4 py-4'>{overview}</p>
            <div className='flex py-4'>
                <button className='bg-gray-700 text-white rounded p-2 w-20 mr-3 hover:bg-opacity-50'>Play</button>
                <button className='bg-gray-500 rounded p-2 text-white w-30 hover:bg-opacity-50 '>More info</button>
            </div>


        </div>
    )
}
export default VedioTitle;