import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Headerss from '../components/Headerss';
import HomeBanner from '../components/HomeBanner';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import ScrollImages from '../components/ScrollImages';
import Products from '../components/Products';

const Main = () => {
  const [phone, setPhones] = useState([]);
  const [datas, setDatas] = useState([]);
  const [laptop, setLaptop] = useState([]);
  // console.log(datas)

  useEffect(() => {
    getData();
  });

  const getData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setDatas(json));

    // .then(console.log);
  };

  return (
    <ScrollView style={{height: '100%', paddingBottom: 100}}>
      <Headerss />
      <HomeBanner />

      <ScrollImages />
      <View>
        <Text
          style={{
            marginBottom: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          
          }}>
          jewelery
        </Text>

        <FlatList
          data={datas}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            if (item.category === 'jewelery') {
              return (
                <View style={{}}>
                  <Products item={item} />
                </View>
              );
            }
          }}
        />
      </View>

      <View >
        <Text
          style={{
            marginBottom: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
            
          }}>
          men's clothing
        </Text>

        <FlatList
          data={datas}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            if (item.category === "men's clothing") {
              return (
                <View style={{}}>
                  <Products item={item} />
                </View>
              );
            }
          }}
        />
      </View>

      <View style={{marginBottom:60}}>
        <Text
          style={{
            marginBottom: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
            
          }}>
          electronics
        </Text>

        <FlatList
          data={datas}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            if (item.category === "electronics") {
              return (
                <View style={{}}>
                  <Products item={item} />
                </View>
              );
            }
          }}
        />
      </View>

      <View style={{marginBottom:60}}>
        <Text
          style={{
            marginBottom: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
            
          }}>
          "women's clothing"
        </Text>

        <FlatList
          data={datas}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            if (item.category === "women's clothing") {
              return (
                <View style={{}}>
                  <Products item={item} />
                </View>
              );
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({});
