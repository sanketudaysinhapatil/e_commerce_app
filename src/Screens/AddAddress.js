import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useState, Keyboard} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addAddress} from '../redux/Actions';
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png';

function AddAddres() {
  const [name, setName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [pin, setPin] = useState('');
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
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
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../Images/bac.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
        <Image source={{uri: imageUrl}} style={styles.logo} />
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Add a new address
        </Text>
      </View>
      <View style={styles.login}>
        <View style={styles.loginContainer}>
          <Text style={styles.label}>Enter Your Full Name</Text>

          <View style={styles.input}>
            <Image
              source={require('../Images/n.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your Name"
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '100%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
              value={name}
              onChangeText={e => setName(e)}
            />
          </View>

          <Text style={styles.label}>Contact No</Text>

          <View style={styles.input}>
            <Image
              source={require('../Images/mob.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your Contact No"
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '100%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
              value={contactNo}
              onChangeText={e => setContactNo(e)}
              keyboardType="numeric"
            />
          </View>

          <Text style={styles.label}>City</Text>

          <View style={styles.input}>
            <Image
              source={require('../Images/city.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your City"
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '100%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
              value={city}
              onChangeText={e => {
                setCity(e);
              }}
            />
          </View>

          <Text style={styles.label}>Buiding Name</Text>

          <View style={styles.input}>
            <Image
              source={require('../Images/bulding.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your Building Name"
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '100%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
              value={building}
              onChangeText={e => {
                setBuilding(e);
              }}
            />
          </View>

          <Text style={styles.label}>Pin Code</Text>

          <View style={styles.input}>
            <Image
              source={require('../Images/pincode.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your Pincode"
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '100%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
              keyboardType="numeric"
              value={pin}
              onChangeText={e => {
                setPin(e);
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            if (city !== '' && name !== '' && building !== '' && pin !== '') {
              dispatch(
                addAddress({
                  city: city,
                  name: name,
                  pin: pin,
                  building: building,
                  contactNo: contactNo,
                }),
              );
              navigation.goBack();
            }
          }}>
          <Text style={styles.btnEl}>Save Address</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btnEl: {
    textAlign: 'center',
    backgroundColor: '#f0c14b',
    borderRadius: 2,
    width: 200,
    height: 40,
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    borderRadius: 12,
    marginTop: 20,
    textAlignVertical: 'center',

    borderColor: 'grey',
    marginTop: 10,
  },
  login: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    // flexDirection: 'column',

    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    resizeMode: 'contain',

    width: '100%',
    height: 30,

    margin: 'auto',
  },
  loginContainer: {
    width: '90%',
    // height: 300,
  },
  inputStyle: {
    width: '98%',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
    fontWeight: '600',
  },
  buttons: {
    backgroundColor: 'black',
    fontSize: 39,
    color: 'white',
    padding: 20,
    marginTop: 5,
    borderRadius: 15,
    width: '100%',

    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  regBtn: {
    marginTop: 15,
    borderWidth: 0.7,
    borderColor: 'black',
    borderStyle: 'solid',
    height: 45,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: 'transparent',
    marginBottom: 50,
  },
  regText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 17,
  },

  input: {
    borderWidth: 0.5,
    borderStyle: 'solid',
    // height:50,
    borderRadius: 15,
    display: 'flex',
    // justifyContent:"center",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    marginBottom: 10,
  },
});

export default AddAddres;
