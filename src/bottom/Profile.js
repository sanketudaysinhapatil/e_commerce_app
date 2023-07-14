import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
let name = '';
let email = '';
let contact = '';

const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
    contact = await AsyncStorage.getItem('CONTACT');
    email = await AsyncStorage.getItem('EMAILS');
  };
  console.log(name);
  console.log(contact);

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
          Profile
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Images/setting.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../Images/use.png')}
        style={{width: 80, height: 80, alignSelf: 'center', marginTop: 50}}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        {name}
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        {contact}
      </Text>

      <Text
        style={{
          color: 'black',
          fontSize: 18,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        {email}
      </Text>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          width: '90%',
          height: 50,
          marginTop: 20,
          borderBottomWidth: 0.3,
          borderColor: '#8e8e8e',
        }}
        onPress={() => {
          navigation.navigate('MyAddress');
        }}>
        <Text style={{color: 'black'}}>My Address</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          width: '90%',
          height: 50,
          borderBottomWidth: 0.3,
          borderColor: '#8e8e8e',
        }}
        onPress={() => {
          navigation.navigate('Orders');
        }}>
        <Text style={{color: 'black'}}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          width: '90%',
          height: 50,
          borderBottomWidth: 0.3,
          borderColor: '#8e8e8e',
        }}>
        <Text style={{color: 'black'}}>My Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
