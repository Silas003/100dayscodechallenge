import { View, Text,Image, Pressable, FlatList} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native'
import { packages } from '../constants/packages'
import { Service } from '../constants/service'
import {useNavigation} from '@react-navigation/native'
const {width,height}=Dimensions.get('screen')
import * as Icon from 'react-native-feather'
import { TouchableOpacity } from 'react-native'
const ServicesScreen = () => {
  const navigation=useNavigation()
  return (
    
    <ScrollView style={styles.container}>  
      <View style={styles.header}>
        <Image source={require('../assets/Images/voda1.png')}
        style={{backgroundColor:'red',width:44,height:44,borderRadius:60}}/>
        <Text style={{color:'white',fontSize:15,fontWeight:'500'}}>Good Day,Silas</Text>
      </View>
      <View style={styles.data}>
        <FlatList
        horizontal
        data={packages}
        renderItem={()=>{
          return(
            <View style={styles.card}>
            </View> 
          )
        }}/>
               
         
       
           
          <View style={styles.number}>
            <View style={styles.r1}>
              <View style={{flexDirection:'row',marginLeft:3}}>
                <Icon.FileText stroke={'red'} width={30} height={30}/>
                <Text style={{fontWeight:'600',marginLeft:2,fontSize:16}}>Airtime Balance</Text>
              </View>
              <Text style={{marginTop:30,marginLeft:3}}>0509123000</Text>
              <View style={{flexDirection:'row',alignItems:'center',marginTop:30,marginLeft:3}}>
                <Image source={require('../assets/Images/image.png')} style={{width:20,height:20}}/>
                <Text  style={{fontWeight:'600',marginLeft:2,fontSize:16}}>12.89</Text>
              </View>
              
              <View style={{flexDirection:'row',marginTop:6,marginLeft:3,alignItems:'center',}}>
               <Icon.RefreshCcw width={12} stroke={'black'}/>
               <Text style={{fontSize:9}}>Last Update 30 August 12:53pm</Text>
              </View>
            </View>
            <View  style={styles.r2}>
                <View style={{backgroundColor:'white',height:'45%',borderRadius:6}}>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:14,marginLeft:10}}>
                  <Icon.CreditCard stroke={'red'}/>
                  <Text  style={{fontWeight:'bold'}}>Paybill</Text>
                  </View>
                  <Text  style={{fontSize:10}}>Make payment for your postpaid bills and Broadband service</Text> 
                </View>
                <View style={{backgroundColor:'white',height:'45%',marginTop:14,borderRadius:6}}>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:14,marginLeft:10}}>
                    <Icon.Smartphone stroke={'red'}/>
                    <Text style={{fontWeight:'bold'}}>Top Up</Text>
                  </View>
                <Text  style={{fontSize:10}}>Top up for yourself and others</Text>
                </View>
            </View>
          </View>
          <Text style={{fontSize:24,fontWeight:'700',marginTop:3,marginLeft:10}}>Manage</Text>
          {
            Service.map((item)=>{
              return(
                <TouchableOpacity 
                key={(item)=>{item.id}}
                onPress={()=>{
                  navigation.navigate(`${item.screen}`)
                }}
                style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:30,borderBottomWidth:0.2,borderColor:'lightgray'}}>
                  
                  <Text style={{marginBottom:10,fontSize:16}}>{item.name}</Text>
                  <Icon.ChevronRight stroke={'red'}/>
                </TouchableOpacity>
              )
            })
          }
      </View>
    </ScrollView>
    
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red'
  },
  header:{
    paddingTop:40,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  data:{ 
    height:height,
    backgroundColor:'whitesmoke',
    marginTop:'10%',
    borderTopRightRadius:16,
    borderTopLeftRadius:16,
  },
  card:{
    backgroundColor:'black',
    marginTop:30,
    height:10,
    marginLeft:10,
    width:width*.93,
    borderRadius:12
  },
  packages:{
    height:100,
    width:'82%',
    backgroundColor:'black',
    marginLeft:12,
    marginRight:5,
    marginTop:25,
    borderRadius:6
    
  },
  number:{
    backgroundColor:'black',
    height:'30%',
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
    justifyContent:'space-around'
  },
  r1:{
    backgroundColor:'white',
    height:'90%',
    width:'40%',
    borderRadius:6,
    marginLeft:5
    
  },
  r2:{
    
    height:'90%',
    width:'45%',
    borderRadius:6
  }

 
}
)

export default ServicesScreen