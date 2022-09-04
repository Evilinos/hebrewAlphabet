import {createNativeStackNavigator} from 'react-native-screens/native-stack'

import {RootStackParamList} from 'src/navigation'
import {LettersScreen} from 'modules/letters'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigation = () => (
  <RootStack.Navigator initialRouteName="Letters">
    <RootStack.Screen name="Letters" component={LettersScreen} />
  </RootStack.Navigator>
)
