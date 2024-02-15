import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

export default function ScreenWrapper({children}) {
    let statusBarHeight = StatusBar.currentHeight;
  return (
    <View style={{paddingTop: 30}}>
      {
        children
      }
    </View>
  )
}