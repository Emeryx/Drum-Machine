import React, { useEffect } from 'react';
import Audio from './Audio'

interface soundName { [sound : string] : string };

const DrumPad = ({txt} : {txt : string}) => {

    const soundNames : soundName[] = [
        { 'Q' : 'Heater 1' },
        { 'W' : 'Heater 2' },
        { 'E' : 'Heater 3' },
        { 'A' : 'Heater 4' },
        { 'S' : 'Clap' },
        { 'D' : 'Open-HH' },
        { 'Z' : `Kick-n'-Hat` },
        { 'X' : 'Kick' },
        { 'C' : 'Closed-HH' },
    ]

    const playAudio = () => {
        const audio = document.getElementById(txt) as HTMLAudioElement;
        const displayEl = document.getElementById('display') as HTMLHeadingElement;
        const displaySound : soundName | undefined = soundNames.find((item) => item.hasOwnProperty(txt))

        console.log(displayEl)
        console.log(displaySound)
        if(audio) audio.play();
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if(e.key === txt.toLowerCase()){
                playAudio();
            }
        })
    })

    const drumPadId = `${txt}-btn`

    return(
        <button id={drumPadId} onClick={playAudio} className='drum-pad bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-900 text-white font-bold text-4xl p-2 w-16 h-16 md:p-4 md:w-24 md:h-24 rounded-full'>
            {txt}
            <Audio txt={txt}></Audio>
        </button>
    )

}

export default DrumPad;