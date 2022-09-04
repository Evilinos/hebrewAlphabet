import {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {LetterProp} from 'modules/letters/types'

export const LetterDescription: FC<LetterProp & {visible?: boolean}> = ({letter: {name, pronunciation}, visible}) => (
  <View style={styles.wrapper}>
    {visible && <Text style={styles.text}>{name}</Text>}
    {visible && <Text style={styles.text}>{pronunciation}</Text>}
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
})
