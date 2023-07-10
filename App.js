import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'


const App = () => {
  return (
    <>    
    <StatusBar
        animated={true}
        backgroundColor="#98e1d6"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false}
      />
      <AppNavigator/>
    </>

  )
}

export default App

const styles = StyleSheet.create({})