import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Header = ({title}) => {
  return (
    <>
      <LinearGradient
        colors={['#790598', '#BC1399']}
        style={styles.linearGradient}>
        <Text style={styles.titleText}>{title}</Text>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 60,
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleText: {
    fontSize: 22,
    fontFamily: 'Open Sans',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
