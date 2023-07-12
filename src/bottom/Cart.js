import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
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
    <View style={{ backgroundColor:"white"}}>
      <Headerss />
      {cartData.length  > 0?(<FlatList
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
      />):(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
          <Image source={require("../Images/cart.png")} style={{width:170, height:170}}/>
          <Text style={{color:"black", padding:15, fontWeight:"bold"}}>No Items Added In Cart</Text>
        </View>
      )}
      {cartData.length  > 0 && (
        <TouchableOpacity
        style={{
          backgroundColor: '#f0c14b',
          borderWidth: 0,
          padding: 10,
          borderRadius: 10,
        }}
        >
        <Text style={{color: 'white',}}>Remove Itemsss</Text>
      </TouchableOpacity>
      )}

    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
