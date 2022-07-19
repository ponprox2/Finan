import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  BackHandler,
} from 'react-native';
import ChevronLeft from '../assets/icon/ChevronLeft.svg';
import {responsiveWidth} from '../styles/index';
export default function HeaderComponent() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <ChevronLeft />
      </TouchableOpacity>

      <Text style={styles.textCreateProduct}>Danh thiếp cửa hàng</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    height: responsiveWidth(56),
    backgroundColor: '#FEFEFE',
    paddingTop: responsiveWidth(20),
    paddingLeft: responsiveWidth(24),
  },
  textCreateProduct: {
    textAlign: 'center',
    width: '80%',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: '#161C24',
  },
});
