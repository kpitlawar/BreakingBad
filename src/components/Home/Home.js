import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import styles from '../Home/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const axios = require('axios');
import {connect} from 'react-redux';
var _ = require('lodash');

const BASE_URL = 'https://www.breakingbadapi.com';
const getallcharacter = '/api/characters';

const Home = props => {
  const [characters, setCharacters] = useState([]);

  const getAllCharacter = () => {
    axios
      .get(BASE_URL + getallcharacter)
      .then(function (response) {
        // handle success
        setCharacters(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getAllCharacter();
  }, []);

  const addFavChar = item => {
    let checkFav = _.find(props.FavItem, function (o) {
      return o.char_id === item.char_id;
    });
    if (checkFav) {
      props.removeFavChar(item);
      console.log('Removed from fav');
    } else {
      props.addFavCharacter(item);
      console.log('char added as fav');
    }
  };

  const renderListItem = listData => {
    let isYourFav = _.find(props.FavItem, function (o) {
      return o.char_id === listData.item.char_id;
    });
    return (
      <View>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: listData.item.img,
            }}
          />
        </View>
        <View style={styles.viewStyle}>
          <View style={{marginStart: 5, flex: 0.8}}>
            <Text style={{color: 'white'}}>{listData.item.name}</Text>
            <Text style={{color: 'white'}}>{listData.item.nickname}</Text>
          </View>
          <View style={{flex: 0.2}}>
            <Icon
              name="heart"
              color={isYourFav ? '#18CA75' : 'white'}
              size={20}
              onPress={() => {
                addFavChar(listData.item);
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#242424'}}>
      <View style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Text style={styles.txtTitle}>The Breaking bad</Text>
          <View style={styles.viewIcon}>
            <Icon
              name="search"
              size={20}
              color="white"
              onPress={() => props.navigation.navigate('Serach')}
            />
            <Icon
              name="heart"
              size={20}
              color="#18CA75"
              onPress={() => props.navigation.navigate('Favourite')}
            />
          </View>
        </View>
        <FlatList
          style={{margin: 10}}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          horizontal={false}
          data={characters}
          renderItem={renderListItem}
          keyExtractor={item => item.char_id}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    FavItem: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavCharacter: char => dispatch({type: 'ADD_FAV', payload: char}),
    removeFavChar: char => dispatch({type: 'REMOVE_FAV', payload: char}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
