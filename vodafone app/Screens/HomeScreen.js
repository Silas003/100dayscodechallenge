import { View, Tex,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BundlesScreen from '../Components/BundlesScreen'
import ServicesScreen from '../Components/ServicesScreen'
import CashScreen from '../Components/CashScreen'
import TobiScreen from '../Components/TobiScreen'
import SupportScreen from '../Components/SupportScreen'
import * as Icon from 'react-native-feather'
import Icons from 'react-native-vector-icons/FontAwesome5'

const HomeScreen = () => {
  const label=16;
    const Tab=createBottomTabNavigator()
  return (
    
   <Tab.Navigator 
   screenOptions={{headerShown:false,tabBarStyle:{height:60}}}>
    <Tab.Screen name='Services' component={ServicesScreen} 
    options={{tabBarIcon:({color})=>(<Icon.Smartphone  color={color}/>),tabBarLabelStyle:{fontSize:label}}}/>
    <Tab.Screen name='Cash' component={CashScreen}
    options={{tabBarIcon:({color})=>(<Icons name='coins' size={22}/>),tabBarLabelStyle:{fontSize:label}}}/>
    <Tab.Screen name='Tobi' component={TobiScreen}
    options={{tabBarIcon:({color})=>(<Image source={require('../assets/Images/voda1.png')}
    style={{width:50,height:50,borderRadius:60,marginBottom:25}}/>),tabBarLabelStyle:{fontSize:label},presentation:'modal',}}/>
    <Tab.Screen name='Bundles' component={BundlesScreen}
    options={{tabBarIcon:({color})=>(<Icon.Gift  color={color}/>),tabBarLabelStyle:{fontSize:label}}}/>
    <Tab.Screen name='Support' component={SupportScreen}
    options={{
      tabBarIcon:({color})=>(<Icon.Settings  color={color}/>),tabBarLabelStyle:{fontSize:label}}}/>
   </Tab.Navigator>
  )
}

export default HomeScreen