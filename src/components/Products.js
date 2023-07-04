import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    Button,
    View,
    TouchableOpacity,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  
  const Products = () => {
    const [products, setProducts] = useState([]);
  
    const {width, height} = Dimensions.get('window');
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = () => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          setProducts(json);
          // console.log(json)
        });
    };
  
    return (
      <View>
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            fontWeight: '700',
            borderColor: 'black',
            borderWidth: 2,
            width: 140,
            borderRadius: 15,
            textAlign: 'center',
            marginBottom:10,
            marginLeft:5
          }}>
          Products
        </Text>
  
        <View>
          <FlatList
          scrollEnabled={false}
            data={products}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <View style={styles.itemView}>
                  <Image source={{uri: item.image}} style={styles.productImage} />
                  <View style={styles.nameView}>
                    <Text>
                      {item.title.length > 15
                        ? item.title.substring(0, 8) + '...'
                        : item.title}
                    </Text>
                    {/* <Text> 
                      {item.description.length > 30
                        ? item.description.substring(0, 10) + '...'
                        : item.description}
                    </Text> */}
                    <Text style={styles.price}>$ {item.price}</Text>
                    <TouchableOpacity style={{backgroundColor:"purple", width:60, borderRadius:10, elevation:8, marginTop:5}}>
                      <Text style={{color:"white", padding:4 , fontSize:16, textAlign:"center"}} >
                          Cart
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  };
  
  export default Products;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor:"red"
    },
    itemView: {
      width: '38%',
      height: 130,
      backgroundColor: '#fff',
      alignSelf: 'center',
      marginTop: 10,
      flexDirection: 'row',
      flex: 1,
      borderWidth: 1,
      borderColor: 'grey',
      padding: 10,
      gap:5
  , margin:5,
  borderRadius:15
    },
    card: {
      flex: 1,
    },
    productImage: {
      width: '30%',
      resizeMode: 'contain',
      padding: 10,
    },
    nameView: {
      paddingLeft: 20,
      paddingRight: 10,
    },
    price: {
      fontSize: 20,
      fontWeight: '600',
      color: 'green',
      marginTop: 2,
    },
  });