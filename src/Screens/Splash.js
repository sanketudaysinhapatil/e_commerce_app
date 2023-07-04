import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
 
  const handleEvent = ()=>{
    navigation.navigate("Login")
  }

  return (
    <View style={styles.bgContainer}>
      
      <Image 
      source={require("../Images/playstore.png")} style={styles.image}
       />
       <Text onPress={handleEvent}>Log in </Text>
      
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
  image:{
    borderRadius:75,width: 125, height: 125
  }
});
