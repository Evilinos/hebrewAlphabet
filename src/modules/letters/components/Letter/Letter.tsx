import {FC} from 'react'
import {Dimensions, Text} from 'react-native'
import {LetterProp} from 'modules/letters/types'

export const Letter: FC<LetterProp & {fontSerif?: boolean}> = ({letter: {value, color}, fontSerif}) => {
  const {height} = Dimensions.get('screen')

  return (
    <Text
      style={{
        fontSize: height / 2,
        lineHeight: height / 1.65,
        height: height / 1.6,
        color: color,
        fontFamily: fontSerif ? 'serif' : 'sans-serif',
        textAlign: 'center',
        textAlignVertical: 'center',
      }}
    >
      {value}
    </Text>
  )
}
