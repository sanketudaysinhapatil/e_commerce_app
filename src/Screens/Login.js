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

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [validSignIn, setVaildSignIn] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigation = useNavigation();
  const [verifyUser, setVerifyUser] =useState(false)
  const [securityCheck , setSecurityCheck] = useState(false)

  const gotoSignup = () => {
    navigation.navigate('Signup');
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(email);
    setBadEmail(!isValid);
    if (isValid) {
      setEmail('');
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
      setPassword('');
    }
  };
  const getData = async ()=>{
    const mEmail = await AsyncStorage.getItem("EMAILS")
    const mPassword = await AsyncStorage.getItem("PASSWORD")
    console.log(mEmail, mPassword)
    if (mEmail===email){
      if (mEmail === email && mPassword === password){
        console.log(true)
      
        navigation.navigate("Home")
      }else{
        setVerifyUser(false)
        alert("Wrong Inputs")
      }
    }

  }

  const validate = () => {
    validateEmail();
    validatePassword();
    getData()
  };

  const handleSecurity =()=>{
    if (securityCheck == true){
      setSecurityCheck(false)
    }else{
      setSecurityCheck(true)
    }
  }

 

  return (
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
          Log In
        </Text>
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
              opacity: 0.5,
              fontSize: 15,
              width: '100%',
              color: 'black',
            }}
            value={email}
            onChangeText={e => {
              setEmail(e);
              // setValidEmail(true);
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
            secureTextEntry={securityCheck}
            placeholderTextColor={'black'}
            style={{
              height: 50,
              paddingLeft: 15,
              fontSize: 15,
              width: '85%',
              opacity: 0.5,
              color: 'black',
            }}
            onPress={handleSecurity}
            value={password}
            onChangeText={e => {
              setPassword(e);
              // setValidEmail(true);
              // console.log(e);
            }}
          />
           <TouchableOpacity onPress={handleSecurity}>
              {securityCheck == true ? (
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
        <TouchableOpacity
          onPress={() => {
            validate();
          }}>
          <Text style={styles.btnEl}>Continue</Text>
        </TouchableOpacity>
        {verifyUser=== true && (
          <Text style={styles.errorText}>
            Enterd wrong Email and Password
          </Text>
        )}

        
      </View>
      <Text style={{color: 'black', marginTop: 15, fontSize: 16}}>
        --- New to Amazon? ---
      </Text>
      <TouchableOpacity style={styles.regBtn} onPress={gotoSignup}>
        <Text style={styles.regText}>Create Your Amazon Account</Text>
      </TouchableOpacity>
      

    </View>
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
    fontSize: 22,
    textShadowColor: 'black',
  },
  label: {
    fontSize: 20,
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
  },
});

export default Login;
