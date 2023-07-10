import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('screen');
const HomeBanner = () => {
  
  const [data, setData] = useState([1, 1, 1, 1, 1, 1, 1]);
  return (
    <ScrollView
      style={{flex:1}}
      ScrollView={false}>
      <View style={{}}>
        <Image
          source={require(`../Images/product/main.jpg`)}
          style={{
            width: '100%',
            height: 200,
           
           alignSelf:'center'
            
          }}
        />
      </View>

     
    </ScrollView>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({});
