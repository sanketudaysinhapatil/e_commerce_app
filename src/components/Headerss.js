import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import LinearGradient from 'react-native-linear-gradient';
// import { Svg, LinearGradient, Stop, Rect, Image } from 'react-native-svg';

const Headerss = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
              <Image
                source={require('../Images/search.png')}
                style={{width: 21, height: 21, objectFit: 'contain'}}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Search Amazon.in"
              placeholderTextColor={'black'}
              style={styles.textInput}
            />
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
              <Image
                source={require('../Images/camera.png')}
                style={{width: 21, height: 21, objectFit: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View style={{width: '9%'}}>
            <Image
              source={require('../Images/voice.png')}
              style={{
                width: 21,
                height: 21,
                paddingLeft: 5,
                objectFit: 'contain',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#c6eee3',
          padding: 7,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../Images/location.png')}
          style={{width: 19, height: 15, objectFit: 'contain'}}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 12,
            fontWeight: '500',
            opacity: 0.5,
            paddingLeft: 10,
          }}>
          Deliver to Nimap - Mumbai 40078
        </Text>
        <Image
          source={require('../Images/down-arrow.png')}
          style={{width: 19, height: 15, objectFit: 'contain', paddingLeft: 30}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#98e1d6',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a1bcc0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 5,
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    padding: 8,
    textDecorationColor: 'black',
    flex: 4,
  },
});

export default Headerss;
