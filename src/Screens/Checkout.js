import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import RazorpayCheckout from 'react-native-razorpay';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { addOrder } from '../redux/Actions';
let addressList = [];
const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const cartData = useSelector(state => state.Reducers);
  console.log(cartData)
  addressList = useSelector(state => state.AddressReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getTotal = () => {
    
    let tempTotal = 0;
    cartData.map(item => {
      tempTotal += item.price;
    });
    return tempTotal;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <View>
          <FlatList
            data={cartData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    marginTop: 10,
                    width: '100',
                    height: 70,
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: 70,
                      height: 70,
                      marginLeft: 10,
                      objectFit: 'contain',
                    }}
                  />
                  <View style={{padding: 10}}>
                    <Text style={{color: 'black'}}>
                      {item.title.length > 15
                        ? item.title.substring(0, 15) + '...'
                        : item.title}
                    </Text>
                    <Text style={{color: 'black', marginTop: 10}}>
                      {item.price}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            margin: 30,
            borderTopColor: '#8e8e8e',
            borderTopWidth: 0.5,
            height: 50,
          }}>
          <Text style={{color: 'black'}}>Total : </Text>
          <Text style={{color: 'black', marginTop: 10}}>{getTotal()}</Text>
        </View>
        <View>
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
                          setSelectedAddress(
                            'City: ' +
                              item.city +
                              ' ' +
                              ',Building: ' +
                              item.building +
                              ' ' +
                              ',Pincode: ' +
                              item.pin,
                          );
                        }}>
                        <Text style={{color: 'white'}}>Select Address</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              );
            }}
          />
        </View>
        <Text
          style={{
            margin: 20,
            color: 'black',
            fontWeight: '600',
            fontSize: 16,
          }}>
          Selected Address
        </Text>
        <Text
          style={{
            marginLeft: 20,
            color: 'black',
           
            fontSize: 14,
          }}>
          {selectedAddress == ''
            ? 'Please Selected Address From Above List'
            : selectedAddress}
        </Text>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#f0c14b',
              borderWidth: 0,
              padding: 10,
              borderRadius: 10,
              width: 170,
              marginTop: 15,
            }}
            onPress={() => {
              var options = {
                description: 'Credits towards consultation',
                image:
                  'https://economictimes.indiatimes.com/thumb/msid-59738992,width-640,height-480,resizemode-75,imgsize-25499/amazon.jpg',
                currency: 'INR',
                key: 'rzp_test_1DP5mmOlF5G5ag', // Your api key
                amount:   parseInt(getTotal()*100),
                name: 'Amazon',
                prefill: {
                  email: 'sanketpatil@nimapinfotech.com',
                  contact: '8530880988',
                  name: 'Razorpay Software',
                },
                theme: {color: '#F37254'},
              };
              RazorpayCheckout.open(options)
                .then(data => {
                  // handle success
                  dispatch(addOrder({
                    items:cartData,
                    total:getTotal(),
                    address:selectedAddress
                  }))
                  alert(`Success: ${data.razorpay_payment_id}`);
                  navigation.navigate("OrderSuccess", {
                    status:"success"
                  })
                })
                .catch(error => {
                  // handle failure
                  alert(`Error: ${error.code} | ${error.description}`);
                  navigation.navigate("OrderFailure", {
                    status:"falied"
                  })

                });
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  desription: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
});
