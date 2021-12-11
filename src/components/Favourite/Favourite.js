import React from 'react';
import {SafeAreaView, Text, View, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Favourite/styles';

const Favourite = props => {
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
            <Icon
              name="heart"
              color={'#18CA75'}
              size={20}
              onPress={() => {
                props.removeFavChar(listData.item);
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#242424'}}>
      <View style={styles.headerView}>
        <Text style={styles.txtTitle}>Favourite</Text>
        <View style={styles.viewIcon}>
          <Icon
            name="close"
            size={20}
            color="white"
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
      </View>
      <FlatList
        style={{margin: 10}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        horizontal={false}
        data={props.FavItem}
        renderItem={renderListItem}
        keyExtractor={item => item.char_id}
      />
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
    removeFavChar: char => dispatch({type: 'REMOVE_FAV', payload: char}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
