import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BundlesScreen from '../Components/BundlesScreen'
import ServicesScreen from '../Components/ServicesScreen'
import CashScreen from '../Components/CashScreen'
import TobiScreen from '../Components/TobiScreen'
import SupportScreen from '../Components/SupportScreen'
import * as Icon from 'react-native-feather'


const HomeScreen = () => {
    const Tab=createBottomTabNavigator()
  return (
    
   <Tab.Navigator 
   screenOptions={{headerShown:false}}
   initialRouteName='Services'
   
   >
    <Tab.Screen name='Services' component={ServicesScreen} 
    options={{tabBarIcon:({color})=>(<Icon.Smartphone  color={color}/>)}}/>
    <Tab.Screen name='Cash' component={CashScreen}
    options={{tabBarIcon:({color})=>(<Icon.Smartphone  color={color}/>)}}/>
    <Tab.Screen name='Tobi' component={TobiScreen}
    options={{tabBarIcon:({color})=>(<Icon.Smartphone  color={color}/>)}}/>
    <Tab.Screen name='Bundles' component={BundlesScreen}
    options={{tabBarIcon:({color})=>(<Icon.Gift  color={color}/>)}}/>
    <Tab.Screen name='Support' component={SupportScreen}
    options={{tabBarIcon:({color})=>(<Icon.Settings  color={color}/>)}}/>
   </Tab.Navigator>
  )
}

export default HomeScreen