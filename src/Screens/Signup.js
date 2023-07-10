import AsyncStorage from '@react-native-async-storage/async-storage';
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

function Signup() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [validSignIn, setVaildSignIn] = useState(false);
  const [disable, setDisable] = useState(false);
  const [name, setName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [badname, setBadname] = useState(false);
  const [badcontact, setBadContact] = useState(false);
  const [securityText, setSecurityText] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  let signValid = true;
  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(email);
    setBadEmail(!isValid);
    if (isValid) {
      setEmail(email);
    } else {
      signValid = false;
    }
  };
  const validatePassword = e => {
    const minLength = 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    const isValid = hasUppercase && hasLowercase && hasNumber;
    setBadPassword(!isValid);
    if (isValid) {
      setPassword(password);
    } else {
      signValid = false;
    }
  };

  const validateName = () => {
    if (name == '') {
      setBadname(true);
      signValid = false;
    } else {
      setBadname(false);
    }
  };

  const validateContact = () => {
    const contactRegex = /^[0-9]{10}$/;
    const isValid = contactRegex.test(contactNo);
    if (isValid) {
      setBadContact(false);
    } else {
      setBadContact(true);
      signValid = false;
    }
  };

  const passwordConfirmation = e => {
    if (password === confirmPassword) {
      setBadConfirmPassword(true);
      // setEmail(e);
    } else {
      setBadConfirmPassword(false);
      signValid = false;
    }
  };

  const validate = () => {
    validateEmail();
    validatePassword();
    validateName();
    validateContact();
    passwordConfirmation();
    setTimeout(() => {
      saveData();
    }, 2000);
  };

  const appendToSignUp = () => {
    navigation.navigate("Login");
  };

  const securityCheck = () => {
    if (securityText == true) {
      setSecurityText(false);
    } else {
      setSecurityText(true);
    }
  };
  const saveData = async () => {
    if (signValid) {
      await AsyncStorage.setItem('NAME', name);
      await AsyncStorage.setItem('MOBILE', contactNo);
      await AsyncStorage.setItem('EMAILS', email );
      await AsyncStorage.setItem('PASSWORD', password);
      setTimeout(() => {
        navigation.goBack();
        
      }, 1000);
     
      console.log('true');
    } else {
      console.log('false');
    }
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
              fontWeight: '700',
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
              value={name}
              onChangeText={e => setName(e)}
            />
          </View>
          {badname === true && (
            <Text style={styles.errorText}>Invalid Name</Text>
          )}

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
              value={contactNo}
              onChangeText={e => setContactNo(e)}
              keyboardType="numeric"
            />
          </View>
          {badcontact === true && (
            <Text style={styles.errorText}>Invalid Contact Number</Text>
          )}
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
              value={email}
              onChangeText={e => {
                setEmail(e);
              }}
            />
          </View>
          {badEmail === true && (
            <Text style={styles.errorText}>Invalid email address</Text>
          )}

          <Text style={styles.label}>Password</Text>
          <View style={styles.input}>
            <Image
              source={require('../Images/p.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry={securityText}
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '85%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
              value={password}
              onChangeText={e => {
                setPassword(e);
              }}
            />
            <TouchableOpacity onPress={securityCheck}>
              {securityText == true ? (
                <Image
                  source={require('../Images/hide.png')}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={require('../Images/view.png')}
                  style={{width: 20, height: 20}}
                />
              )}
            </TouchableOpacity>
          </View>
          {badPassword === true && (
            <Text style={styles.errorText}>
              Password must contain at least 6 characters, including uppercase,
              lowercase, and a number
            </Text>
          )}

          <Text style={styles.label}>Confirm Your Password</Text>
          <View style={styles.input}>
            <Image
              source={require('../Images/p.png')}
              style={{width: 20, height: 20}}
            />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={securityText}
              placeholderTextColor={'black'}
              style={{
                height: 50,
                paddingLeft: 15,
                width: '85%',
                fontSize: 17,
                opacity: 0.5,
                color: 'black',
              }}
              value={confirmPassword}
              onChangeText={e => {
                setConfirmPassword(e);
              }}
            />
            {/* pass  */}
            <TouchableOpacity onPress={securityCheck}>
              {securityText == true ? (
                <Image
                  source={require('../Images/hide.png')}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={require('../Images/view.png')}
                  style={{width: 20, height: 20}}
                />
              )}
            </TouchableOpacity>
          </View>
          {badPassword === true && (
            <Text style={styles.errorText}>Password doesn't match</Text>
          )}

          <TouchableOpacity onPress={validate}>
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
    marginBottom: 50,
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

export default Signup;
