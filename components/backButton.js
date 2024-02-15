import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/core';

export default function BackButton() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() =>{navigation.goBack()}} style={styles.container}>
      <ChevronLeftIcon size={30} color={colors.button}></ChevronLeftIcon>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 45,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    icon:{

    }
});