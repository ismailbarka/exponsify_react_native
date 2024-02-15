import { View, Text, Image , StyleSheet } from 'react-native'
import React from 'react'

export default function EmptyList({message}) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/empty.png')} style={styles.image}></Image>
      <Text>{message || 'No Data to show'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image:{
        width: 150,
        height: 150,
    },
  });