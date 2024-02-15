import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme';
import BackButton from '../components/backButton';
import { useNavigation } from '@react-navigation/core';
import { categories } from '../constants';


export default function AddExpenceScreen() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [categoty, setCategory] = useState('');
    const navigation = useNavigation();
    const handleAddExpense = () => {
        if(title && amount && categoty){
            navigation.goBack();
        }else{

        }
    };

  return (
    <ScreenWrapper>
      <View style={styles.titleStyle}>
        <View style={styles.backButtonStyle}>
            <BackButton></BackButton>
        </View>
        <Text style={styles.titleStyle}>Add Expense</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={require('../assets/images/expenseBanner.png')}></Image>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textForInput}>For what?</Text>
        <TextInput placeholder='Title' onChange={(value) => setTitle(value)} style={styles.inputFeild}></TextInput>
        <Text style={styles.textForInput}>How much?</Text>
        <TextInput placeholder='Amount'  onChange={(value) => setAmount(value)} style={styles.inputFeild}></TextInput>
        <View>
          <Text style={styles.textForInput}>Category:</Text>
          <View style={styles.categoryStyle}>
            {
              categories.map((cat) =>{
                let color1;
                if(cat.value === categoty)
                  color1 = 'skyblue';
                else
                  color1 = 'white';
                return(
                  <TouchableOpacity onPress={() => {setCategory(cat.value)}} style={{
                    backgroundColor: color1,
                    margin: 10,
                    padding: 10,
                    borderRadius: 10,
                  }} key={cat.value}>
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.submit} onPress={handleAddExpense}>
            <Text style={{color: 'white', fontSize: 20}}>Add Expense</Text>
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