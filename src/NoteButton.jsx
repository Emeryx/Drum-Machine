import React from 'react';
import { Button } from 'tamagui';

const NoteButton = ({txt}) => {
    return(
        <Button className='bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-bold' size='$7'>{txt}</Button>
    )
}

export default NoteButton;