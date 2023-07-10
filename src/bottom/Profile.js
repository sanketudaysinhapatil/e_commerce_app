import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';



const Profile = () => {
  const navigation = useNavigation()

  const gotoLogin = () => {
    navigation.navigate('Login');
  }
  useEffect(() => {
    // Delete the item from AsyncStorage
    deleteItem('EMAILS');
  }, []);

  const deleteItem = async (key) => {
    try {
      await AsyncStorage.removeItem("EMAILS");
      console.log('Item deleted successfully');
    } catch (error) {
      console.log('Error deleting item from AsyncStorage:', error);
    }
  };
  return (
    <View>
       <TouchableOpacity onPress={deleteItem} style={{display:"flex", justifyContent:"center", marginTop:50 , alignItems:"center", borderRadius:10, borderColor:"black", borderWidth:2, width:120}} >
      <Text>LOG OUT</Text>
      
      
    </TouchableOpacity>

    <TouchableOpacity onPress={gotoLogin} style={{display:"flex", justifyContent:"center", marginTop:50 , alignItems:"center", borderRadius:10, borderColor:"black", borderWidth:2, width:120}} >
      <Text>LOG IN</Text>
      
      
    </TouchableOpacity>
    </View>
   
  )
}

export default Profile

const styles = StyleSheet.create({})