import React , { useEffect, useState } from 'react';
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { XStack } from 'tamagui';
import './styles.css';

import DrumPad from './DrumPad';
import Display from './Display';

const tamaguiConfig = createTamagui(config)

const App = () => {

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <div id='drum-machine' className='h-screen bg-neutral-900 flex flex-col gap-16 justify-center items-center p-32'>
        <div className='grid grid-cols-3 gap-x-8 gap-y-8'>
          <DrumPad txt='Q'></DrumPad>
          <DrumPad txt='W'></DrumPad>
          <DrumPad txt='E'></DrumPad>
          <DrumPad txt='A'></DrumPad>
          <DrumPad txt='S'></DrumPad>
          <DrumPad txt='D'></DrumPad>
          <DrumPad txt='Z'></DrumPad>
          <DrumPad txt='X'></DrumPad>
          <DrumPad txt='C'></DrumPad>
        </div>
        <Display playing=''></Display>
      </div>
    </TamaguiProvider>
  )
}

export default App
