import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme';
import BackButton from '../components/backButton';
import { useNavigation } from '@react-navigation/core';


export default function AddTripScreen() {
    const [place, setPlace] = useState('');
    const [country, setCountry] = useState('');
    const navigation = useNavigation();
    const handleAddTrip = () => {
        if(place && country){
            navigation.navigate('Home');
        }else{

        }
    };

  return (
    <ScreenWrapper>
      <View style={styles.titleStyle}>
        <View style={styles.backButtonStyle}>
            <BackButton></BackButton>
        </View>
        <Text style={styles.titleStyle}>Add Trip</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={require('../assets/images/4.png')}></Image>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textForInput}>Where on earth?</Text>
        <TextInput placeholder='Place' onChange={(value) => setPlace(value)} style={styles.inputFeild}></TextInput>
        <Text style={styles.textForInput}>Wich country</Text>
        <TextInput placeholder='Country'  onChange={(value) => setCountry(value)} style={styles.inputFeild}></TextInput>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.submit} onPress={handleAddTrip}>
            <Text style={{color: 'white', fontSize: 20}}>Add Trip</Text>
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
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'flex-start',
        margin: 5,
    },
    backButtonStyle:{
        position: 'absolute',
    },
    imageStyle:{
        width: 200,
        height: 200,
        marginTop: 4,
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    textForInput:{
        fontSize: 18,
        color: colors.heading,
    },
    inputFeild:{
        backgroundColor: 'white',
        height: 35,
        padding: 4,
        marginBottom: 10,
    },
    inputContainer:{
        margin: 12,
    },
    submit:{
        backgroundColor: colors.button,
        margin: 10,
        width: '50%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
});