import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ScrollImages = () => {
  return (
    <ScrollView
      horizontal
      style={{width: '100%', flexDirection: 'row', }}>
      <TouchableOpacity
        style={{
          // width: '0%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          marginLeft:10, 
          marginRight:10

          
        }}>
        <Image
          source={require('../Images/categories/phone.jpg')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 25,
            objectFit: 'contain',
          }}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            padding: 20,
            fontWeight: '700',
            fontSize: 12,
            width: '100%',
          }}>
          Phones
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          // width: '0%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          marginLeft:10, 
          marginRight:10
        }}>
        <Image
          source={require('../Images/categories/laptop.jpg')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 25,
            objectFit: 'contain',
          }}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            padding: 20,
            fontWeight: '700',
            fontSize: 12,
            width: '100%',
          }}>
          Laptop
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          // width: '0%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          marginLeft:10, 
          marginRight:10
        }}>
        <Image
          source={require('../Images/categories/fragrence.jpg')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 25,
            objectFit: 'contain',
          }}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            padding: 20,
            fontWeight: '700',
            fontSize: 12,
            width: '100%',
          }}>
          Frageranc
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          // width: '0%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          marginLeft:10, 
          marginRight:10
        }}>
        <Image
          source={require('../Images/categories/skin.jpg')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 25,
            objectFit: 'contain',
          }}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            padding: 20,
            fontWeight: '700',
            fontSize: 12,
            width: '100%',
          }}>
          Skin Care
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          // width: '0%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          marginLeft:10, 
          marginRight:10
        }}>
        <Image
          source={require('../Images/categories/grocery.jpg')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 25,
            objectFit: 'contain',
          }}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            padding: 20,
            fontWeight: '700',
            fontSize: 12,
            width: '100%',
          }}>
          Groceries
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          // width: '0%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          marginLeft:10, 
          marginRight:10
        }}>
        <Image
          source={require('../Images/categories/homedec.jpg')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 25,
            objectFit: 'contain',
          }}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            padding: 20,
            fontWeight: '700',
            fontSize: 12,
            width: '100%',
          }}>
          Homedec
        </Text>
      </TouchableOpacity>
    </ScrollView>
    //   </View>
  );
};

export default ScrollImages;

const styles = StyleSheet.create({});
