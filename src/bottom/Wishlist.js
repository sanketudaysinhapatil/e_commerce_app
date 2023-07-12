import {StyleSheet, Text, View, Image} from 'react-native';
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
      {cartData.length >0?(<FlatList
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
      />):(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
          <Image source={require("../Images/wishlist.png")} style={{width:170, height:170}}/>
          <Text style={{color:"black", padding:15, fontWeight:"bold"}}>No Items Added In Wishlist</Text>
        </View>
      )}

      
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
