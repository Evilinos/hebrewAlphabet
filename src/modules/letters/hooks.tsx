import {useCallback, useRef} from 'react'
import {Audio} from 'expo-av'

import {LetterType} from 'modules/letters/constants'

export const usePlayLetterSound = (letter: LetterType) => {
  const sound = useRef(new Audio.Sound()).current

  return useCallback(async () => {
    try {
      const status = await sound.loadAsync(letter.sound)
      if (!status.isLoaded) return null
      await sound.playAsync()
      setTimeout(() => sound.unloadAsync(), status.durationMillis)
    } catch (error) {
      await sound.unloadAsync()
    }
  }, [letter])
}
