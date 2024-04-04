import React from 'react';

interface DisplayProps {
    playing : string
}

const Display : React.FC<DisplayProps> = ({ playing }) => {

    return (
        <h1 id='display' className='text-white font-bold text-4xl md:text-5xl text-center'>{playing}</h1>
    )
}

export default Display;