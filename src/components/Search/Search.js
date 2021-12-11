import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import styles from '../Search/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const axios = require('axios');

const BASE_URL = 'https://www.breakingbadapi.com';
const getsearchcharacter = '/api/characters?name=';
const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredContent, setFilteredContent] = useState(null);
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    if (searchText.length === 0) {
    } else {
      axios
        .get(`${BASE_URL + getsearchcharacter}${searchText}`)
        .then(function (response) {
          // handle success
          console.log(
            'API===',
            `${BASE_URL + getsearchcharacter}${searchText}`,
          );
          if (response.data) {
            setSearchText('');
            setNoMatch(false);
            console.log('reeeeeee', response.data);
            setFilteredContent(response.data);
            if (response.data.length === 0) {
              setNoMatch(true);
              console.log('no match');
            }
          } else {
            setFilteredContent(null);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [searchText, filteredContent, noMatch]);

  const renderListItem = listData => {
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
        <View style={{flexDirection: 'row', marginBottom: 50, marginTop: 10}}>
          <View style={{marginStart: 5, flex: 0.8}}>
            <Text style={{color: 'white'}}>{listData.item.name}</Text>
            <Text style={{color: 'white'}}>{listData.item.nickname}</Text>
          </View>
          <View style={{flex: 0.2}}>
            <Icon name="heart" color="white" size={20} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View>
        <View style={styles.headerView}>
          <TextInput
            placeholder="Search"
            style={styles.txtTitle}
            onChangeText={text => {
              setSearchText(text);
            }}
          />
          <View style={styles.viewIcon}>
            <Icon
              name="remove"
              size={20}
              color="white"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
        <View>
          {filteredContent !== null ? (
            <FlatList
              style={{margin: 10}}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-evenly'}}
              horizontal={false}
              data={filteredContent}
              renderItem={renderListItem}
              keyExtractor={item => item.char_id}
            />
          ) : (
            <Text style={{color: 'white', fontSize:16}}>Search your favourite char</Text>
          )}
          {noMatch ? (
            <View>
              <Text style={{color: '#18CA75', fontSize:20}}>No character found</Text>
              <Text style={{color: 'white', fontSize:16}}>Try again</Text>
            </View>
          ) : (
            <View />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
