import React , { useEffect, useState } from 'react';
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { XStack } from 'tamagui';
import './styles.css';

import DrumPad from './DrumPad';
import Display from './Display';

const tamaguiConfig = createTamagui(config)

const App = () => {

  const [ playing , setPlaying ] = useState('');

  const updatePlaying = (input : string) => {
    setPlaying(input);  
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <div id='drum-machine' className='h-screen bg-neutral-900 flex flex-col gap-8 justify-center items-center p-32'>
        <Display playing={playing}></Display>
        <div className='grid grid-cols-3 gap-x-8 gap-y-8'>
          <DrumPad txt='Q' update={updatePlaying}></DrumPad>
          <DrumPad txt='W' update={updatePlaying}></DrumPad>
          <DrumPad txt='E' update={updatePlaying}></DrumPad>
          <DrumPad txt='A' update={updatePlaying}></DrumPad>
          <DrumPad txt='S' update={updatePlaying}></DrumPad>
          <DrumPad txt='D' update={updatePlaying}></DrumPad>
          <DrumPad txt='Z' update={updatePlaying}></DrumPad>
          <DrumPad txt='X' update={updatePlaying}></DrumPad>
          <DrumPad txt='C' update={updatePlaying}></DrumPad>
        </div>
        <h1 className='text-white font-bold text-md md:text-l text-center'>Developed by Emeryx</h1>
      </div>
    </TamaguiProvider>
  )
}

export default App
