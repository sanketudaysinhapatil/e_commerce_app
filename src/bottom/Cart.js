import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CartItem from '../components/CartItem';
import {useSelector, useDispatch} from 'react-redux';
import Headerss from '../components/Headerss';
import {addToWishlist, removeFromCart} from '../redux/Actions';
const Cart = () => {
 
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <Headerss />
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
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
