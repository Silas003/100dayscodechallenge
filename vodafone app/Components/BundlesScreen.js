import { View, Text,StyleSheet, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import {useNavigation} from '@react-navigation/native'
import { packages } from '../constants/packages'
import { Service } from '../constants/bundles'

const {width,height}=Dimensions.get('screen')
const BundlesScreen = () => {
  const navigation=useNavigation()
  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity style={{marginLeft:10}} onPress={()=>{navigation.goBack()}}>
                <Icon.ArrowLeft  stroke={'white'}/>
            </TouchableOpacity>
            <Text style={{color:'white'}}>All Offers</Text>
            <TouchableOpacity style={{marginRight:10}} onPress={()=>{navigation.goBack()}}>
                <Icon.X stroke={'white'}/>
            </TouchableOpacity>  
        </View>
      </View>
      <View>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={Service}
            renderItem={({item})=>{
              return(
                <TouchableOpacity style={styles.package}>
                  <View style={{marginLeft:10,marginTop:10}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View>{item.icon}</View>
                      
                    </View>  
                      <Text style={{fontWeight:'bold',fontSize:20,marginTop:12}}>{item.name}</Text>
                  </View>  
                </TouchableOpacity>
              )
            }}
            keyExtractor={item=>item.id}/>
      </View> 
    </View>
  )
}
const styles=StyleSheet.create({
  header:{
    
    height:height*0.1,
    backgroundColor:'red',
  },
  package:{
    alignItems:'center',
    height:height*0.13,
    width:width*0.4,
    backgroundColor:'white',
    marginLeft:20,
    marginRight:5,
    marginTop:25,
    borderRadius:6
  },
})

export default BundlesScreen