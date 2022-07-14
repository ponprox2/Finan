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
import {COLORS, globalStyles} from '../constants/index';
import DownLoad from '../assets/icon/DownLoad.svg';
import ShareAndroid from '../assets/icon/ShareAndroid.svg';

export default function BottomComponent() {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity style={styles.buttonAdd}>
        <DownLoad />
        <Text style={styles.textAdd}>Tải về máy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCreate}>
        <ShareAndroid />
        <Text style={styles.textCreate}>Chia sẻ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: COLORS.whiteLight,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  buttonAdd: {
    width: 167,
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.greenLighter,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textAdd: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.greenLighter,
    marginRight: 16,
    marginLeft: 4,
  },
  buttonCreate: {
    flexDirection: 'row',
    width: 167,
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.greenLighter,
  },
  textCreate: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.whiteLight,
    marginRight: 16,
    marginLeft: 4,
  },
});
