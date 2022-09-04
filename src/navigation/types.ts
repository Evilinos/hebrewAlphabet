export type RootStackParamList = {
  Home: undefined
  Letters: undefined
}

// ---

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
