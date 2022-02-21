import { View, Text } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ListProtfolio() {
  return (
    <View
        style={{
            flex:0.37,
            marginBottom:7,
            marginTop:20
        }}
    >
      <Text
        style={{
            fontSize:16,
            paddingHorizontal:10,
            margin:5,
            fontWeight:"bold",
            color:"burlywood"
        }}
      >List Protfolio</Text>
      <View
            style={{
                flex:1,
                marginHorizontal:20,
                backgroundColor:"cadetblue",
                borderRadius:20,
                padding:10,
                justifyContent:"space-between"
            }}
      >
        <Top/>
        <Bottom/>
      </View>
    </View>
  )
}

function Top(){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center"
               
            }}
        >
            <View
                style={{
                    flexDirection:"row",
                    alignItems:"center",
                }}
            >
                <View
                    style={{
                        backgroundColor:"#fff8dc",
                        padding:10,
                        borderRadius:10,
                    }}
                >
                    <FontAwesome name="home" size={25} color="black"/>
                </View>
                <Text
                    style={{
                        fontSize:18,
                        fontWeight:"bold",
                        paddingHorizontal:10
                    }}
                >Dream House</Text>
            </View>
            <Text style={{color:"indigo"}}>5 products</Text>
        </View>
    )
}

function Bottom(){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                paddingHorizontal:10
            }}
        >
            <View>
                <Text style={{color:"indigo"}}>My portfolio</Text>
                <Text 
                    style={{
                        fontSize:20,
                        fontWeight:"bold"
                    }}
                >$ 12,345</Text>
            </View>
            <View>
                <Text style={{color:"indigo"}}>Profit</Text>
                <View
                    style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}
                >
                    <AntDesign name="caretup" color="black" />
                    <Text
                        style={{
                            fontSize:20,
                            fontWeight:"bold",
                            marginLeft:2
                        }}
                    >6.7%</Text>
                </View>
            </View>
        </View>
    )
}