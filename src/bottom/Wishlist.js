import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CartItem from '../components/CartItem';
import {useSelector, useDispatch} from 'react-redux';
import Headerss from '../components/Headerss';
import {removeFromWishlist} from '../redux/Actions';
import WishItem from '../components/WishlistItem';
import {addItemToCart, addToWishlist} from '../redux/Actions';

const Wishlist = () => {
  const cartData = useSelector(state => state.Reducers2);
  const disapatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <Headerss />
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <WishItem
              key={item.id}
              item={item}
              
              onRemoveItem={() => {
                disapatch(removeFromWishlist(index));
              }}
              onAddToCart={x => {
                disapatch(addItemToCart(item));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
