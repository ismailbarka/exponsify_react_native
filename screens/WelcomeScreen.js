import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme';
import BackButton from '../components/backButton';
import { useNavigation } from '@react-navigation/core';
import { categories } from '../constants';


export default function WelcomeScreen() {
    const navigation = useNavigation()
  return (
    <ScreenWrapper>
      
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={require('../assets/images/welcome.gif')}></Image>
      </View>
      <View >
        <Text style={styles.titleStyle}>Expensify</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() =>{navigation.navigate('SignIn')}} style={styles.submit}>
            <Text style={{color: 'white', fontSize: 20}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{navigation.navigate('SignUp')}} style={styles.submit}>
            <Text style={{color: 'white', fontSize: 20}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    titleStyle:{
        color: colors.heading,
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'flex-start',
        margin: 5,
    },

    imageStyle:{
        width: 400,
        height: 400,
        marginTop: 4,
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    submit:{
        backgroundColor: colors.button,
        margin: 10,
        width: '70%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryStyle:{
      flexDirection: 'row',
      flexWrap: 1,
    },
    choices:{
      backgroundColor: 'white',
      margin: 10,
      padding: 10,
      borderRadius: 10,
    },
});