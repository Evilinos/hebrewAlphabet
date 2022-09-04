import {StatusBar} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {RootStackParamList} from 'src/navigation'
import {LettersScreen} from 'modules/letters'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigation = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
    <RootStack.Navigator initialRouteName="Letters">
      <RootStack.Screen name="Letters" component={LettersScreen} />
    </RootStack.Navigator>
  </>
)
