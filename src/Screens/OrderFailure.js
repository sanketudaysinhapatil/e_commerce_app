import {StyleSheet, Text, View, Image,  TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

const OrderFailure = () => {
  const orders = useSelector(state => state.OrderReducer);
  console.log(orders);
  const navigation = useNavigation()
  const route = useRoute();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',borderColor:"white"}}>
      <Image
        source={
          route.params.status == 'falied'
            ? require('../Images/cancel.png')
            : require('../Images/success.png')
        }
        style={{width: 50, height: 50}}
      />
      <Text style={{color: 'black', fontSize: 20, marginTop: 20}}>
        {route.params.status == 'falied'
          ?'Order Failed' 
          : 'Your Order Place Successfully'}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#f0c14b',
          borderWidth: 0,
          padding: 10,
          borderRadius: 10,
          marginTop:20
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}>
        <Text style={{color: 'white'}}>GO to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderFailure;

const styles = StyleSheet.create({});
