import React from 'react';
const Display = ( {playing} : {playing : string} ) => {

    return (
        <h1 id='display' className='text-white font-bold text-4xl md:text-5xl text-center'>{playing}</h1>
    )
}

export default Display;