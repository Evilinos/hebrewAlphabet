import {useCallback, useRef} from 'react'
import {Audio} from 'expo-av'

import {LetterType} from 'modules/letters/constants'

export const usePlayLetterSound = (letter: LetterType) => {
  const sound = useRef(new Audio.Sound()).current
  const block = useRef<boolean>(false)

  return useCallback(async () => {
    try {
      if (block.current) return null
      block.current = true
      const status = await sound.loadAsync(letter.sound)
      if (!status.isLoaded) return null
      await sound.playAsync()
      setTimeout(async () => {
        await sound.unloadAsync()
        block.current = false
      }, status.durationMillis)
    } catch (error) {
      await sound.unloadAsync()
    }
  }, [letter])
}
