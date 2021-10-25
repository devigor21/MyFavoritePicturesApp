import React from 'react';
import type {Node} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../components/Header';
import GoBack from '../components/icons/GoBack';
import Heart from '../components/icons/Heart';
import Rubbish from '../components/icons/Rubbish';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavoritePicture,
  removeFavoritePicture,
} from '../store/reducers/picturesReducer';
import HeartRed from '../components/icons/HeartRed';

export const Picture = ({route, navigation}) => {
  const dispatch = useDispatch();
  const favorite = useSelector(store => store.favorite);

  const {url, author, id, pic} = route.params;

  const contain = favorite.includes(pic);

  const addFavorite = () => {
    dispatch(addFavoritePicture(pic));
  };

  const removeFavorite = () => {
    dispatch(removeFavoritePicture(id));
  };

  return (
    <View style={styles.bg}>
      <Header title={author} />
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.navigate('Home')}>
        <GoBack />
      </TouchableOpacity>
      <Image style={styles.picture} source={{uri: url}} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.actionButtonContainer}
          onPress={contain ? removeFavorite : addFavorite}>
          <View style={styles.actionButton}>
            {contain ? (
              <HeartRed style={styles.icon} />
            ) : (
              <Heart style={styles.icon} />
            )}
            <Text style={styles.buttonText}>
              {contain ? 'Убрать из избранного' : 'Добавить в избранное'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBottomButtonContainer}>
          <View style={styles.actionBottomButton}>
            <Rubbish style={styles.icon} />
            <Text style={styles.buttonBottomText}>Удалить изображение</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: -150,
    marginBottom: 8,
  },
  actionButtonContainer: {
    alignItems: 'center',
    height: 42,
    marginHorizontal: 15,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFF',
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 7,
    paddingLeft: '25%',
    paddingRight: '25%',
  },
  actionBottomButtonContainer: {
    alignItems: 'center',
    height: 42,
    marginHorizontal: 15,
    borderTopColor: '#C4C4C4',
    borderTopWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FFF',
  },
  actionBottomButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 9,
    paddingLeft: '25%',
    paddingRight: '25%',
  },
  icon: {
    paddingRight: 8,
  },
  bg: {
    backgroundColor: '#000',
  },
  goBack: {
    marginTop: -60,
    padding: 35,
    paddingLeft: 15,
    paddingTop: 23,
    width: 70,
    height: 50,
  },
  picture: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonText: {
    paddingTop: 15,
    marginLeft: 7,
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
  },
  buttonBottomText: {
    paddingTop: 7,
    marginLeft: 7,
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
});
