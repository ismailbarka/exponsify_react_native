import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/emptyList';
import { useNavigation } from '@react-navigation/native';

const items = [
    {
        id: 1, 
        place: 'Gujrat', 
        country: 'Pakistan'
    },
    {
        id: 2, 
        place: 'London Eye',
        country: 'England',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 3, 
        place: 'Washington dc',
        country: 'America',
    },
    {
        id: 4, 
        place: 'New york',
        country: 'America'
    }
    ]
export default function HomeScreen() {
    const navigation = useNavigation();

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.textColor}>test</Text>
        <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/banner.png')} style={styles.imageStyle}></Image>
      </View>
      <View style={{padding: 10}}>
        <View style={styles.recentStyle}>
            <Text style={{fontSize: 0}}>Recent Trips</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('AddTrip')}} style={styles.touchable}>
                <Text style={styles.buttonText}>Add Trips</Text>
            </TouchableOpacity>
      </View>
      <View style={{height: 430}}>
            <FlatList
                data={items}
                numColumns={2}
                keyExtractor={(item) =>{item.id}}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<EmptyList message={'you have not recorded any data yet'}></EmptyList>}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                renderItem={({item}) =>{
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('TripExpenses',{...item})} style={styles.cartContainer}>
                            <View>
                                <Image source={randomImage()} style={{width: 150, height: 150}}></Image>
                                <Text style={styles.place}>{item.place}</Text>
                                <Text >{item.country}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                >
            </FlatList>
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
  });