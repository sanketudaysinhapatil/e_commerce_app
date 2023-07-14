import {StyleSheet, Image, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const Orders = () => {
  const orders = useSelector(state => state.OrderReducer);
 
console.log(orders)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"white"}}>
      <View style={{flex: 1}}>
        <FlatList
          data={orders}
          renderItem={({item, index}) => {
            return (
              <View style={{width: '100%', height: "100%", borderWidth:0.5, justifyContent:"center", borderColor:"#8e8e8e"}}>
                {item.items.map(item1 =>{
                  return(
                    <View style={{width:"100%", flexDirection:"row", alignItems:"center"}}>
                        <Image source={{uri:item1.image}} style={{width:50, height:50, marginTop:10, marginLeft:20, marginBottom:10, objectFit:"contain"}}/>
                        <Text style={{marginLeft:20, fontSize:18, color:"black"}}>{item1.title.length > 15
            ? item1.title.substring(0, 8) + '...'
            : item1.title}</Text>
                        

                    </View>
                  )
                })}
                <Text style={{marginLeft:20,  color:"black", fontSize:22, textAlign:"right", marginRight:29}}>{"Total: " + item.total}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({});
