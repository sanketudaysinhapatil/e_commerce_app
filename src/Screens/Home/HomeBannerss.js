import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { FlatList } from 'react-native-gesture-handler'
import Images from "../../Images/homeBanner/0.jpeg"
const imageData = {
  id:1,
  image:"../../Images/homeBanner/0.png"
}

const HomeBanner = () => {
  return (
    <View>
     <FlatList data = {[1,1,1,1,1,1,1,1,1]}
     renderItem={({item, index})=>{
      return(
          <View>
            <Image source={Images} style={{width:40, height:40}}/>
          </View>
      )
     }}/>
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({})