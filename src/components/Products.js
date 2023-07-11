import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Products = ({item, onAddToCart, onAddWishlist}) => {
 
  return (
    <View>
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 10,
          elevation: 5,
          position: 'relative',
          marginLeft: 20,
          marginBottom: 10,
          backgroundColor: '#fff',
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: '100%',
            height: '50%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            fontSize: 18,
            fontWeight: '600',
            color: 'black',
          }}>
          {item.title.length > 15
            ? item.title.substring(0, 8) + '...'
            : item.title}
        </Text>

        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            fontSize: 14,
            // fontWeight: '600',
            color: 'black',
          }}>
          {item.description.length > 15
            ? item.description.substring(0, 19) + '...'
            : item.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
          }}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
            {'$' + item.price}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#f0c14b',
              borderWidth: 0,
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => {
              onAddToCart(item);
            }}>
            <Text style={{color: 'white'}}>add to cart</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            right: 3,
            top: 2,
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'white',
              borderRadius: 20,
              elevation: 5,

              justifyContent: 'center',
              alignItems: 'center',
            }}  onPress={() => {
              onAddWishlist(item);
            }}>
            <Image
              source={require('../Images/heart.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
