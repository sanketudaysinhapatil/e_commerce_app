import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Data = () => {
    
    useEffect(() => {
        getData();
      });
    
      const getData = () => {
        fetch('https://dummyjson.com/products').then(res => res.json());
        // .then(console.log);
      };
 
  
}

export default Data

const styles = StyleSheet.create({})