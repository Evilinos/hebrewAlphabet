import {useCallback, useEffect, useState} from 'react'
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native'
import {useAtom} from 'jotai'
import {useUpdateAtom} from 'jotai/utils'

import {Letter, LetterDescription, LetterHeader} from '../components'
import {currentLetterAtom, incrementLettersCountsAtom} from '../atoms'
import {usePlayLetterSound} from '../hooks'

export const LettersScreen = () => {
  const [visibleName, setVisibleName] = useState(false)
  const [fontSerif, setFontSerif] = useState(false)
  const [letter, goNext] = useAtom(currentLetterAtom)
  const increment = useUpdateAtom(incrementLettersCountsAtom)
  const playSound = usePlayLetterSound(letter)

  useEffect(() => {
    setVisibleName(false)
  }, [letter])

  const onLetterPress = useCallback(async () => {
    setVisibleName(true)
    await playSound()
  }, [letter, playSound])

  return (
    <View style={styles.wrapper}>
      <LetterHeader fontSerif={fontSerif} setFontSerif={setFontSerif} />
      <TouchableOpacity activeOpacity={0.9} onPress={onLetterPress}>
        <Letter letter={letter} fontSerif={fontSerif} />
      </TouchableOpacity>
      <LetterDescription letter={letter} visible={visibleName} />
      <View style={styles.buttonsContainer}>
        <Button title="Добавить букву" onPress={increment} />
        <Button title="Следующая" onPress={goNext} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonsContainer: {flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8},
})
