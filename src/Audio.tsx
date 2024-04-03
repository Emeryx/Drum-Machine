import React from 'react';

interface inputSourceType { [key : string] : string };

const inputSource : inputSourceType [] = [
    {'Q' : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {'W' : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {'E' : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {'A' : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {'S' : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {'D' : 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {'Z' : 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {'X' : 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {'C' : 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
];

const Audio = ({txt} : {txt : string}) => {

    const matchSource : inputSourceType | undefined = inputSource.find((item) => item.hasOwnProperty(txt));
    const matchSourceStr : string = matchSource?matchSource[txt]:'0';
    const audioId = txt

    if(matchSourceStr){
        return (
            <audio className='hidden clip' id={audioId} controls src={matchSourceStr}>
            </audio>
        )
    }

    return null;
}

export default Audio;