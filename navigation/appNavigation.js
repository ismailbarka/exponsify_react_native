import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/loginScreen';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpenceScreen from '../screens/AddExpenceScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from '../redux/slices/user';
import { auth } from '../config/faireBase'

const Stack = createNativeStackNavigator();

export default function AppNavigation() {



        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignIn" component={SignInScreen} />
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignUp" component={SignUpScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                    <Stack.Screen options={{headerShown: false}} name="AddTrip" component={AddTripScreen} />
                    <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpenceScreen} />
                    <Stack.Screen options={{headerShown: false}} name="TripExpenses" component={TripExpensesScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
  }