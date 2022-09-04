import {FC} from 'react'
import {StyleSheet, Switch, Text, View} from 'react-native'
import {useAtomValue} from 'jotai'

import {indexAtom, lettersAtom} from 'modules/letters/atoms'

export const LetterHeader: FC<{fontSerif: boolean; setFontSerif: (newValue: boolean) => void}> = ({
  fontSerif,
  setFontSerif,
}) => {
  const index = useAtomValue(indexAtom)
  const letters = useAtomValue(lettersAtom)

  return (
    <View style={styles.header}>
      <View style={styles.switchContainer}>
        <Switch value={fontSerif} onValueChange={setFontSerif} style={{height: 22}} />
        <Text style={styles.switchLabel}>Шрифт с засечками</Text>
      </View>
      <Text style={styles.indexOf}>
        {index + 1}/{letters.length}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 14,
  },
  indexOf: {
    fontSize: 14,
    alignSelf: 'flex-end',
  },
})
