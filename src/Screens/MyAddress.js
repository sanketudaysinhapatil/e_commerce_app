import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import CoustomTextInput from '../components/CoustomTextInput';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

import {deletAddress} from '../redux/Actions';

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png';
let addressList = [];
const MyAddress = () => {
  const addressList = useSelector(state => state.AddressReducer);
  console.log(addressList);

  const dispatch = useDispatch();
  const isFoused = useIsFocused();

  const navigation = useNavigation();
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
          }}
          onPress={() => {
            navigation.navigate('AddAddress');
          }}>
          <Image
            source={require('../Images/add.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
      <Image source={{uri: imageUrl}} style={styles.logo} />

      <FlatList
        data={addressList}
        renderItem={({item, index}) => {
          return (
            <ScrollView style={{flex: 1}}>
              <View style={{alignItems: 'center', marginBottom: 19}}>
                <View
                  style={{
                    elevation: 5,
                    width: '90%',
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: 'white',
                  }}>
                  <View style={{height: 5, width: '100%'}}></View>
                  <Text style={styles.desription}>
                    {'Name :  ' + item.name}
                  </Text>
                  <Text style={styles.desription}>
                    {'Mobile No. :  ' + item.contactNo}
                  </Text>
                  <Text style={styles.desription}>
                    {'Building Name :  ' + item.building}
                  </Text>
                  <Text style={styles.desription}>
                    {'City :  ' + item.city}
                  </Text>
                  <Text style={styles.desription}>
                    {'Pin Code :  ' + item.pin}
                  </Text>
                  <Text style={styles.desription}>
                    {'State :  Maharashtra'}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#f0c14b',
                      borderWidth: 0,
                      padding: 10,
                      borderRadius: 10,
                      width: 130,
                      marginTop: 15,
                    }}
                    onPress={() => {
                      dispatch(deletAddress(index));
                    }}>
                    <Text style={{color: 'white'}}>Remove Address</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    marginBottom: 20,
    resizeMode: 'contain',
    width: '100%',
    height: 20,
    margin: 'auto',
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    resizeMode: 'contain',
    width: '100%',
    height: 20,
    margin: 'auto',
  },
  desription: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
});
