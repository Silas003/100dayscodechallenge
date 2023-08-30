import { View, Text,Image} from 'react-native'
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
    
    <View style={styles.container}>  
      <View style={styles.header}>
        <Image source={require('../assets/Images/voda1.png')}
        style={{backgroundColor:'red',width:44,height:44,borderRadius:60}}/>
        <Text style={{color:'white',fontSize:15,fontWeight:'500'}}>Good Day,Silas</Text>
      </View>
      <View style={styles.data}>
            {/* {packages.map((item)=>{
              return(
                <ScrollView key={item.id} style={styles.packages} horizontal >
                  <View>{item.icon}</View>
                  <Text>{item.name}</Text>
                  <Text>{item.value} left</Text>
                </ScrollView>
              )
            })} */}
            <View>
            <ScrollView
         horizontal>
          {
            packages.map((item)=>{
              return(
                <View key={item.id} style={styles.packages}>
                    <View>{item.icon}</View>
                    <Text>{item.name}</Text>
                    <Text>{item.value} left</Text>
                </View>
              )
            })
          }
         </ScrollView> 

            </View>
               
          <View style={styles.number}>
            <View style={styles.r1}>
              <View style={{flexDirection:'row',marginLeft:3}}>
                <Icon.FileText stroke={'black'} width={30} height={30}/>
                <Text style={{fontWeight:'600',marginLeft:2,fontSize:16}}>Airtime Balance</Text>
              </View>
              <Text style={{marginTop:3,marginLeft:3}}>0509123000</Text>
              <View style={{flexDirection:'row',alignItems:'center',marginTop:6,marginLeft:3}}>
                <Image source={require('../assets/Images/image.png')} style={{width:20,height:20,marginTop:3}}/>
                <Text  style={{fontWeight:'600',marginLeft:2,fontSize:16}}>12.89</Text>
              </View>
              
              <View style={{flexDirection:'row',marginTop:6,marginLeft:3,alignItems:'center',justifyContent:'space-between'}}>
               <Icon.RefreshCcw width={12} stroke={'black'}/>
               <Text style={{fontSize:11}}>Last Update 30 August 12:53pm</Text>
              </View>
            </View>
            <View  style={styles.r2}>
                <View style={{backgroundColor:'white',height:'45%',borderRadius:6}}>
                  <Text>Paybill</Text>
                </View>
                <View style={{backgroundColor:'white',height:'45%',marginTop:14,borderRadius:6}}>
                <Text>Paybill</Text>
                </View>
            </View>
          </View>
          <Text style={{fontSize:24,fontWeight:'700',marginTop:3,marginLeft:10}}>Manage</Text>
          {
            Service.map((item)=>{
              return(
                <TouchableOpacity 
                key={item.id} 
                onPress={()=>{
                  navigation.navigate(`${item.screen}`)
                }}
                style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:16,borderBottomWidth:0.2,borderColor:'lightgray'}}>
                  <Text>{item.name}</Text>
                  <Icon.ChevronRight stroke={'red'}/>
                </TouchableOpacity>
              )
            })
          }
      </View>
    </View>
    
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red'
  },
  header:{
    paddingTop:'11%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  data:{
    flex:1,
    backgroundColor:'whitesmoke',
    marginTop:'12%',
    borderTopRightRadius:16,
    borderTopLeftRadius:16,
  },
  packages:{
    height:'100 %',
    width:'82%',
    backgroundColor:'white',
    marginLeft:12,
    marginRight:12,
    marginTop:25,
    borderRadius:6
    
  },
  number:{
    //backgroundColor:'black',
    height:'30%',
    flexDirection:'row',
    marginTop:12,
    alignItems:'center',
    justifyContent:'space-around'
  },
  r1:{
    backgroundColor:'white',
    height:'90%',
    width:'35%',
    borderRadius:6,
    marginLeft:12
    
  },
  r2:{
    
    height:'90%',
    width:'45%',
    borderRadius:6
  }

 
}
)

export default ServicesScreen