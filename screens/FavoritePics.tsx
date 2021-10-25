import React from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../components/Header';
import {resizePicture} from '../utils/resizePicture';
import {useSelector} from 'react-redux';
import HeartRed from '../components/icons/HeartRed';

export const FavoritePics = ({navigation}) => {
  const favorite = useSelector(store => store.favorite);

  return (
    <SafeAreaView>
      <Header title={'Избранное'} />
      <ScrollView>
        <View style={styles.list}>
          {favorite.map(pic => (
            <TouchableOpacity
              key={pic.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate('Picture', {
                  pic: pic,
                  url: pic.download_url,
                  author: pic.author,
                  id: pic.id,
                })
              }>
              <Image
                style={styles.picture}
                source={{uri: resizePicture(pic.id, 100, 100)}}
              />
              {favorite.includes(pic) && <HeartRed style={styles.icon} />}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: -22,
    marginLeft: 5,
    paddingRight: 6,
  },
  card: {
    width: 81,
    height: 81,
    margin: 7,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
  },
  picture: {
    width: 81,
    height: 81,
    borderRadius: 10,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 15,
    marginBottom: 70,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 15,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
