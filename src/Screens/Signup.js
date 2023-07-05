import {useNavigation} from '@react-navigation/native';
import React, {useState, Keyboard} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png';

function Login() {
  const navigation = useNavigation();

  const appendToSignUp = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.login}>
        <Image source={{uri: imageUrl}} style={styles.logo} />
        <View style={styles.loginContainer}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: '700  ',
              marginBottom: 10,
            }}>
            Create New Account
          </Text>
          <Text style={styles.label}>Name</Text>

          <View style={styles.input}>
            <Image
              source={require('../Images/n.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your Name"
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '100%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.label}>Contact No</Text>

          <View style={styles.input}>
            <Image
              source={require('../Images/mob.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your Contact No"
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '100%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
            />
          </View>
          <Text style={styles.label}>Mail Id</Text>

          <View style={styles.input}>
            <Image
              source={require('../Images/e.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your Mail"
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '100%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.label}>Password</Text>
          <View style={styles.input}>
            <Image
              source={require('../Images/p.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry={true}
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '100%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.btnEl}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'black', marginTop: 15, fontSize: 16}}>
          --- Already have an account? ---
        </Text>
        <TouchableOpacity style={styles.regBtn} onPress={appendToSignUp}>
          <Text style={styles.regText}>Sign In to Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btnEl: {
    textAlign: 'center',
    backgroundColor: '#f0c14b',
    borderRadius: 2,
    width: '100%',
    height: 40,
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    borderRadius: 12,
    marginTop: 20,
    textAlignVertical: 'center',

    borderColor: 'grey',
    marginTop: 10,
  },
  login: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30,
    backgroundColor: 'white',
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    resizeMode: 'contain',

    width: '100%',
    height: 30,

    margin: 'auto',
  },
  loginContainer: {
    width: '90%',
    // height: 300,
    borderWidth: 2,
    borderColor: 'darkgrey',
    borderRadius: 15,
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  inputStyle: {
    width: '98%',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  buttons: {
    backgroundColor: 'black',
    fontSize: 39,
    color: 'white',
    padding: 20,
    marginTop: 5,
    borderRadius: 15,
    width: '100%',

    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  regBtn: {
    marginTop: 15,
    borderWidth: 0.7,
    borderColor: 'black',
    borderStyle: 'solid',
    height: 45,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: 'transparent',
    marginBottom:50 
  },
  regText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 17,
  },

  input: {
    borderWidth: 0.5,
    borderStyle: 'solid',
    // height:50,
    borderRadius: 15,
    display: 'flex',
    // justifyContent:"center",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    marginBottom: 10,
  },
});

export default Login;
