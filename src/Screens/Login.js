import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validEamil, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const [validSignIn, setVaildSignIn] = useState(false);
  const navigation = useNavigation();

  const validateLoginPage = () => {
    const validateSignIn = validEamil && validPassword;
    if (validateSignIn) {
      setVaildSignIn(validateSignIn);
      navigation.navigate('Home');
    }
    setVaildSignIn(false);
  };

  const checkPass = e => {
    const minLength = 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    const isValid = hasUppercase && hasLowercase && hasNumber;
    setValidPassword(isValid);
    if (isValid) {
      setPassword('');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(email);
    setValidEmail(isValid);
    if (isValid) {
      setEmail('');
    }
  };

  const handleClick = () => {
    validateEmail();
    checkPass();
    validateLoginPage();

    // setEmail('');
    // setPassword('');
  };

  return (
    <View style={styles.login}>
      <Image source={{uri: imageUrl}} style={styles.logo} />
      <View style={styles.loginContainer}>
        <Text style={styles.label}>Mail Id</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Your Mail"
          value={email}
          onChangeText={e => {
            setEmail(e);
            setValidEmail(true);
          }}
        />

        {!validEamil && (
          <Text style={styles.errorText}>Invalid email address</Text>
        )}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.inputStyle}
          secureTextEntry={true}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={e => setPassword(e)}
        />

        {!validPassword && (
          <Text style={styles.errorText}>
            Password must contain at least 6 characters, including uppercase,
            lowercase, and a number
          </Text>
        )}
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.btnEl}>Continue</Text>
        </TouchableOpacity>

        {validSignIn && (
          <Text style={styles.errorText}>Log In Successfully</Text>
        )}
      </View>
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
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: 'darkgrey',
    borderRadius: 15,
    padding: 15,
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
    fontSize: 20,
    marginBottom: 5,
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
});

export default Login;
