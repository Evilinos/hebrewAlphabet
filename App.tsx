import {StrictMode} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {RootNavigation, RootStackParamList} from 'src/navigation'

export default function App() {
  return (
    <StrictMode>
      <SafeAreaProvider>
        <NavigationContainer<RootStackParamList>>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </StrictMode>
  )
}
