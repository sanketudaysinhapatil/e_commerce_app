import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const WishlistItem = ({item, onAddToCart, onRemoveItem}) => {
  return (
    <View>
      <View
        style={{
          width: '90%',
          //   height: 200,
          borderRadius: 10,
          elevation: 5,
          position: 'relative',
          marginLeft: 20,
          marginBottom: 10,
          backgroundColor: '#fff',
          flex: 1,
          flexDirection: 'row',
          padding: 10,
          marginTop: 10,
          paddingTop: 20,
        }}>
        <View style={{flex: 1}}>
          <Image
            source={{uri: item.image}}
            style={{
              width: '70%',
              height: '50%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              objectFit: 'contain',
              marginTop: 14,
            }}
          />
        </View>
        <View style={{flex: 3}}>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              marginTop: 14,
            }}>
            {item.title.length > 15
              ? item.title.substring(0, 27) + '...'
              : item.title}
          </Text>

          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              fontSize: 12,
              // fontWeight: '600',
              color: 'black',
            }}>
            {item.description.length > 15
              ? item.description.substring(0, 70) + '...'
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

                  borderRadius: 20,
                  elevation: 5,
                  top: -5,
                  left: 5,
                  backgroundColor: 'white',
                

                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  onRemoveItem();
                }}>
                <Image
                  source={require('../Images/heartf.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            </View>
          
        </View>
      </View>
    </View>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({});
