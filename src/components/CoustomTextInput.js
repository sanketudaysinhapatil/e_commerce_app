import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, { useState } from 'react';

const CoustomTextInput = ({icon, placeholder,value, label, onchangeText}) => {
    const [text, setText]= useState(value)
  return (
    <View style={{marginTop:10, marginBottom:10}}>
      <Text style={{color:"black",marginLeft:20, marginBottom:10, fontWeight:"700", fontSize:14}}>{label}</Text>
      <View style={{ alignItems: 'center'}}>
        <View style={styles.input}>
          <Image source={icon} style={{width: 20, height: 20}} />
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={'black'}
            style={styles.inputEL}
            onchangeText={(txt)=>{onchangeText(txt)
                console.log(txt);}
            }
            value={value}
          />
        </View>
      </View>
    </View>
  );
};

export default CoustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderStyle: 'solid',
    width: '90%',
    borderRadius: 15,
    display: 'flex',
    // justifyContent:"center",

    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
  },
  inputEL: {
    height: 50,
    paddingLeft: 15,
    opacity: 0.5,
    fontSize: 15,
    width: '100%',
    color: 'black',
  },
});
