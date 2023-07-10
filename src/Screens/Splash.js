import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 2000);
  });

  // console.log("sank")
  const handleSplash = () => {
    navigation.navigate('Login');
  };

  const getData = async()=>{
    const email = await AsyncStorage.getItem("EMAILS")
    console.log(email)
    if (email === '' || email === null || email === undefined){
      navigation.navigate("Login")
    }else{
      navigation.navigate("Home")
    }
  }

  return (
    <View style={styles.bgContainer}>
      <TouchableOpacity onPress={handleSplash}>
      
        <Image
          source={require('../Images/amazon/amz.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 75,
    
    height: 350,
    objectFit:"contain"
   
  },
});
