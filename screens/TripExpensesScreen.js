import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/emptyList';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/backButton';
import ExpenseCart from '../components/ExpenseCart';

const items = [
    {
        id: 1,
        title: 'ate sandwitch',
        amount: 4,
        category: 'food'
      },
      {
        id: 2,
        title: 'bought a jacket',
        amount: 50,
        category: 'shopping'
      },
      {
        id: 3,
        title: 'watched a movie',
        amount: 100,
        category: 'entertainment'
      }
  ]

export default function TripExpensesScreen(props) {
    const navigation = useNavigation();
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    const {id, place, country} = props.route.params;

  return (
<ScreenWrapper style={styles.container}>
    <View>
        <View style={styles.titleStyle}>
            <View style={styles.backButtonStyle}>
            <BackButton></BackButton>
            </View>
            <Text style={styles.titleStyle}>{place}</Text>
            <Text style={styles.titleStyle1}>{country}</Text>
        </View>

        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/7.png')} style={styles.imageStyle}></Image>
        </View>

        <View style={{ padding: 10 }}>
            <View style={styles.recentStyle}>
            <Text style={{ fontSize: 0 }}>Recent Expenses</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('AddExpense') }} style={styles.touchable}>
                <Text style={styles.buttonText}>Add Expense</Text>
            </TouchableOpacity>
            </View>

            <View style={{ height: 430 }}>
            <FlatList
                data={items}
                numColumns={1}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<EmptyList message={'You have not recorded any Expenses yet'}></EmptyList>}
                renderItem={({ item }) => {
                    return (
                        <ExpenseCart item={item}></ExpenseCart>
                )
                }}
                >
            </FlatList>
            </View>
        </View>
    </View>
</ScreenWrapper>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    textColor: {
        color: colors.heading,
        fontSize: 30,
    },
    place:{
        color: colors.heading,
        fontSize: 20,
    },
    country:{
        color: colors.heading,
        fontSize: 16,
    },
    touchable: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',

    },
    buttonText:{
        color: colors.heading,
        padding: 10,
    },
    loginContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    imageStyle: {
        width: 200,
        height: 200,
    },
    imageContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        borderRadius: 20,
        margin: 10,
    },
    recentStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartContainer:{
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 10,
        margin: 10,

    },
    backButtonStyle:{
        position: 'absolute',
        titleStyle:{
            color: colors.heading,
            fontSize: 20,
            textAlign: 'center',
            justifyContent: 'flex-start',
            margin: 5,
        },
    },
    titleStyle:{
        color: colors.heading,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'flex-start',
        margin: 5,
    },
    titleStyle1:{
        color: colors.heading,
        fontSize: 10,
        textAlign: 'center',
        justifyContent: 'flex-start',
        margin: 5,
    },
  });
