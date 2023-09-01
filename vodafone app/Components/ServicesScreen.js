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
import * as Progress from 'react-native-progress';

const ServicesScreen = () => {
  const navigation=useNavigation()
  return (
    <ScrollView style={{backgroundColor:'red',flex:1}}>
      <View style={styles.header}>
        <View style={styles.headerCon}>
          <Image source={require('../assets/Images/voda1.png')}
          style={{height:30,width:30,borderRadius:60}}/>
          <Text style={{fontWeight:'600',fontSize:16,marginRight:10,color:'white'}}>Good morning,Silas</Text>
        </View>  
      </View>
      <View style={styles.body}>
        <View>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={packages}
        renderItem={({item})=>{
          return(
            <View style={styles.package}>
              <View style={{marginLeft:10,marginTop:10}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <View>{item.icon}</View>
                  <Text style={{fontWeight:'bold',marginTop:8}}>{item.name}</Text>
                </View>  
                  <Text style={{fontWeight:'bold',fontSize:20,marginTop:8}}>{item.total-item.value}{item.meter} left</Text>
                  <Progress.Bar progress={(item.total-item.value)/100} width={200} style={{marginTop:10}} color='green' />
              </View>  
            </View>
          )
        }}
        keyExtractor={item=>item.id}/>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={styles.secPac0}>
              <View style={{flexDirection:'row',marginLeft:3}}>
                    <Icon.FileText stroke={'red'} width={30} height={30}/>
                    <Text style={{fontWeight:'600',marginLeft:2,fontSize:16}}>Airtime Balance</Text>
                  </View>
                  <Text style={{marginTop:10,marginLeft:3}}>0509123000</Text>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginLeft:3}}>
                    <Image source={require('../assets/Images/image.png')} style={{width:20,height:20}}/>
                    <Text  style={{fontWeight:'600',marginLeft:2,fontSize:16}}>12.89</Text>
                  </View>
                  
                  <View style={{flexDirection:'row',marginTop:6,marginLeft:3,alignItems:'center',}}>
                  <Icon.RefreshCcw width={12} stroke={'black'}/>
                  <Text style={{fontSize:9}}>Last Update 30 August 12:53pm</Text>
                  </View>
            
            </View>
           <View style={styles.secPac1}>
              <View style={styles.secPac2}>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:3,marginLeft:10}}>
                        <Icon.CreditCard stroke={'red'}/>
                        <Text  style={{fontWeight:'bold'}}>Paybill</Text>
                        </View>
                        <Text  style={{fontSize:10,marginLeft:10}}>Make payment for your postpaid bills and Broadband service</Text>
              </View>
              <View style={styles.secPac2}>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:14,marginLeft:10}}>
                          <Icon.Smartphone stroke={'red'}/>
                          <Text style={{fontWeight:'bold'}}>Top Up</Text>
                        </View>
                      <Text  style={{fontSize:10}}>Top up for yourself and others</Text>
              </View>
           </View>
        </View>
        <Text style={{fontSize:28,fontWeight:'700',marginTop:15,marginLeft:10}}>Manage</Text>
        <View>
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
      </View>
    </ScrollView>
  )}
const styles=StyleSheet.create({
  header:{
    flex:1,
    height:height*0.16,
    backgroundColor:'red',

  },
  headerCon:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:50,
  },
  body:{
    flex:1,
    height:"100%",
    backgroundColor:'whitesmoke',
    borderTopLeftRadius:14,
    borderTopRightRadius:14
    
  },
  package:{
    height:height*0.16,
    width:width*0.8,
    backgroundColor:'white',
    marginLeft:20,
    marginRight:5,
    marginTop:25,
    borderRadius:6},
  secPac:{
    height:height*0.16,
    width:width*0.5,
    backgroundColor:'white',
    marginLeft:12,
    marginRight:5,
    marginTop:25,
    borderRadius:6 

  },
  secPac0:{
    height:height*0.16,
    width:width*0.39,
    backgroundColor:'white',
    marginLeft:16,
    marginRight:5,
    marginTop:25,
    borderRadius:6 

  },
  secPac1:{
    height:height*0.16,
    width:width*0.5,
    flexDirection:'column',
    justifyContent:'space-between',
    marginLeft:24,
    marginRight:5,
    marginTop:25,
    borderRadius:12

  },
  secPac2:{
    backgroundColor:'white',
    shadowColor:'gray',
    height:'48%',
    borderRadius:12
    
  }
})
export default ServicesScreen