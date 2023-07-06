import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login")
    }, 3000);
  });

  // console.log("sank")
  const handleSplash = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.bgContainer}>
      <TouchableOpacity onPress={handleSplash}>
      
        <Image
          source={require('../Images/playstore.png')}
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
    width: 125,
    height: 125,
  },
});
