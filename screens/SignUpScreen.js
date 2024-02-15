import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme';
import BackButton from '../components/backButton';
import { useNavigation } from '@react-navigation/core';
// import Snackbar from 'react-native-snackbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/faireBase';


export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleSignUp = async () => {
        if(email && password){
            navigation.navigate('Home');   
            
        }
    };

  return (
    <ScreenWrapper>
      <View style={styles.titleStyle}>
        <View style={styles.backButtonStyle}>
            <BackButton></BackButton>
        </View>
        <Text style={styles.titleStyle}>Sign Up</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={require('../assets/images/signup.png')}></Image>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textForInput}>Email</Text>
        <TextInput placeholder='exemple@exemple.com' onChange={(value) => setEmail(value)} style={styles.inputFeild}></TextInput>
        <Text style={styles.textForInput}>Password</Text>
        <TextInput placeholder='Password' secureTextEntry onChange={(value) => setPassword(value)} style={styles.inputFeild}></TextInput>
        <Text style={styles.textForInput}>ReEnter Password</Text>
        <TextInput placeholder='Password' secureTextEntry onChange={(value) => setPassword(value)} style={styles.inputFeild}></TextInput>

      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.submit} onPress={handleSignUp}>
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
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'flex-start',
        margin: 5,
    },
    backButtonStyle:{
        position: 'absolute',
    },
    imageStyle:{
        width: 300,
        height: 300,
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