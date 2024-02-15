import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme';
import { categoryBG } from '../theme';

export default function ExpenseCart({item}) {
  return (
    <View style={
        {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            padding: 10,
            backgroundColor: categoryBG[item.category],
            borderRadius: 10,
        }
    }>
        <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{fontSize: 10, fontWeight: '220'}}>{item.category}</Text>
        </View>
        <View>
            <Text>${item.amount}</Text>
        </View>
    </View>
  )
}
