import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Header() {
  return (
    <View
        style={{
            flexDirection:"row",
            justifyContent:'space-around',
            alignItems:'center',
            paddingVertical:20,
            flex:0.1
        }}
    >
        <Image 
            source={require("../assets/pp.png")} 
            style={{
                height:60,
                width:60,
                borderRadius:50
            }}
        />
      <View>
        <Text 
          style={{
              textAlign:'center',
              fontWeight:"bold",
              fontSize:18
          }}>Hi Rhea</Text>
        <Text style={{textAlign:'center',color:"blanchedalmond"}}>You have 5 portfolios</Text>
      </View>

      <TouchableOpacity>
        <AntDesign name="bells" size={30}/>
      </TouchableOpacity>
      
    </View>
  )
}