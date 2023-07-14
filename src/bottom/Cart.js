import {StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CartItem from '../components/CartItem';
import {useSelector, useDispatch} from 'react-redux';
import Headerss from '../components/Headerss';
import {addToWishlist, removeFromCart} from '../redux/Actions';
import { useNavigation } from '@react-navigation/native';
const Cart = () => {
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  const navigation= useNavigation();

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Headerss />
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <CartItem
                onAddWishlist={x => {
                  dispatch(addToWishlist(item));
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../Images/cart.png')}
            style={{width: 170, height: 170}}
          />
          <Text style={{color: 'black', padding: 15, fontWeight: 'bold'}}>
            No Items Added In Cart
          </Text>
        </View>
      )}
      {cartData.length > 0 && (
        <View style={{marginBottom: 80, alignItems: 'center'}}>
          <TouchableOpacity
          
            style={{
              backgroundColor: '#f0c14b',
              borderWidth: 0,
              padding: 10,
              borderRadius: 10,
              width: '85%',
            }}
            onPress={() => {
           
            navigation.navigate("Checkout")
            }}
           
            >
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Check out
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
