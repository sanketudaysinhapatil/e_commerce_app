import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MyAddress = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            color: 'black',
            marginLeft: 15,
          }}>
          My Address
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={()=>{
            navigation.navigate("AddAddress")
          }}>
          <Image
            source={require('../Images/add.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({});
