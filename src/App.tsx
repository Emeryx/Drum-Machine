import React from 'react';
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { XStack } from 'tamagui';

import NoteButton from './NoteButton';

const tamaguiConfig = createTamagui(config)

const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig} className='h-full'>
      <div className='h-screen bg-gray-600 w-600'>
        <XStack alignSelf='center' justifyContent='center' gap='$3' flexWrap='wrap'>
          <NoteButton txt='Q'></NoteButton>
          <NoteButton txt='Q'></NoteButton>
          <NoteButton txt='Q'></NoteButton>
          <NoteButton txt='Q'></NoteButton>
          <NoteButton txt='Q'></NoteButton>
          <NoteButton txt='Q'></NoteButton>
          <NoteButton txt='Q'></NoteButton>
          <NoteButton txt='Q'></NoteButton>
          <NoteButton txt='Q'></NoteButton>
        </XStack>
      </div>
    </TamaguiProvider>
  )
}

export default App
