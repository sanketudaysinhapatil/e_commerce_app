import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddAddress = () => {
    const navigation = useNavigation()
  return (
    <View>
       <View
        style={{
          width: '100%',
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
             <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={()=>{
            navigation.goBack()
          }}
      >
          <Image
            source={require('../Images/bac.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            color: 'black',
            marginLeft: 15,
          }}>
        
        </Text>
        
      </View>
    </View>
  )
}

export default AddAddress

const styles = StyleSheet.create({})