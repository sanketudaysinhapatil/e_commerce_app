import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Products from '../components/Products';
import AppHeader from '../components/Headers';






const HomeBanner = () => { 
  return (
    <ScrollView style={{backgroundColor:"#134554"}}>
        <AppHeader/>
      <View style={styles.backdropImage}>
        <Image style={styles.img} source={require("../Images/1.jpg")} />
      </View>
       
    <View style={styles.herobanner}>
      

      <View style={styles.herobannerContent}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: '600',
            marginBottom: 10,
            fontSize: 30,
          }}>
          Welcome
        </Text>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: '400',
            marginBottom: 10,
            fontSize: 21,
          }}>
          Discover the Best Deals and Exclusive Offers...
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
          <View style={{width: '60%'}}>
            <TextInput
              placeholder="Search Products..."
              style={{
                paddingLeft: 10,
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                width:"100%"
              }}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Click Me</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
    <Products/>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  herobanner: {
    width: '100%',
    height: 220,
    backgroundColor: ' #1c4b91',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

  },
  mainBannercontent: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    margin: 0,
    maxWidth: '80%',
  },
  img:{
    width:"100%",
    // height:"100%"
    zIndex:-1,
    height:400



  },

  backdropImage: {
    flex:1,

    height: "100%",
    // width:"100%",
    opacity: 0.5,
    // overflow: 'hidden',
    // objectFit:"contain",
    position: 'absolute',
    resizeMode: 'contain',
    // resizeMode: 'cover',
    objectFit:"fill",
    right:0,
    bottom:0,
    top: 0,
    left: 0,

  },
  mainBannercontent: {
    display: 'flex',
    alignItems: 'center',
    color: 'red',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    // backgroundColor: "#e7622e",
    borderColor: '#fcfdfb',
    borderWidth: 0,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#cd5c5c',
    width:"20%",

    height: 50,
  },
});

export default HomeBanner;