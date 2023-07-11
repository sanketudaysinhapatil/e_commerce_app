import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import Cart from '../bottom/Cart';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  console.log(selectedTab);
  const data = useSelector(state => state);
  console.log(data);

  return (
    <View style={{flex: 1}}>
      {selectedTab === 0 ? (
        <Main />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Cart />
      ) : selectedTab === 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            // width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // flex:1,
            borderColor: selectedTab == 0 ? '#77bfea' : 'white',
            borderWidth: 15,
            borderStyle: 'solid',
            borderTopWidth: 5,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 6,
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../Images/home.png')}
            style={{
              width: 24,
              height: 24,
              objectFit: 'contain',
              tintColor: selectedTab == 0 ? '#77bfea' : 'black',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab(1);
          }}
          style={{
            // width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            borderColor: selectedTab == 1 ? '#77bfea' : 'white',
            borderWidth: 15,
            borderStyle: 'solid',
            borderTopWidth: 5,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 6,
          }}>
          <Image
            source={require('../Images/search.png')}
            style={{
              width: 24,
              height: 24,
              objectFit: 'contain',
              tintColor: selectedTab == 1 ? '#77bfea' : 'black',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: selectedTab == 2 ? '#77bfea' : 'white',
            borderWidth: 15,
            borderStyle: 'solid',
            borderTopWidth: 5,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 6,
          }}>
          <View
            style={{
              width: '30',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedTab(2);
              }}
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#000',
                borderRadius: 25,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Images/bag.png')}
                style={{
                  width: 18,
                  height: 18,
                  objectFit: 'contain',
                  tintColor: selectedTab == 2 ? '#77bfea' : 'white',
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'red',
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 2,
                  right: 5,
                }}>
                <Text style={{color: '#fff', fontWeight: '600'}}>
                  {data.Reducers.length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}
          style={{
            // width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            borderColor: selectedTab == 3 ? '#77bfea' : 'white',
            borderWidth: 15,
            borderStyle: 'solid',
            borderTopWidth: 5,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 6,
          }}>
          <Image
            source={require('../Images/heart.png')}
            style={{
              width: 24,
              height: 24,
              objectFit: 'contain',
              tintColor: selectedTab == 3 ? '#77bfea' : 'black',
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 12,
              right: -1,
            }}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              {data.Reducers2.length}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab(4);
          }}
          style={{
            // width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            borderColor: selectedTab == 4 ? '#77bfea' : 'white',
            borderWidth: 15,
            borderStyle: 'solid',
            borderTopWidth: 5,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 6,
          }}>
          <Image
            source={require('../Images/us.png')}
            style={{
              width: 24,
              height: 24,
              objectFit: 'contain',
              tintColor: selectedTab == 4 ? '#77bfea' : 'black',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
