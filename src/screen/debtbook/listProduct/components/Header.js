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
import {COLORS, globalStyles} from '../../../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChevronLeft from '../../../../assets/icon/ChevronLeft.svg';
import SearchIcon from '../../../../assets/icon/SearchIcon.svg';
import UpcScan from '../../../../assets/icon/UpcScan.svg';
import MoreVertical from '../../../../assets/icon/MoreVertical.svg';
import SortDown from '../../../../assets/icon/SortDown.svg';

export default function HeaderProduct({navigation}) {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        <TouchableOpacity onPress={handleBack}>
          <ChevronLeft />
        </TouchableOpacity>
        <Text style={styles.textProduct}>Sản phẩm</Text>
      </View>
      <View style={styles.rightHeader}>
        <TouchableOpacity style={styles.iconHeader}>
          <SearchIcon fill={'#30373D'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconHeader}>
          <UpcScan fill={'#30373D'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconHeader}>
          <SortDown fill={'#30373D'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconOther}>
          <MoreVertical fill={'#30373D'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    height: 56,
    backgroundColor: COLORS.primaryWhite2,
    paddingTop: 20,
    paddingLeft: 24,
    justifyContent: 'space-between',
  },
  textProduct: {
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: '#161C24',
    marginLeft: 12,
  },
  leftHeader: {
    flexDirection: 'row',
  },
  rightHeader: {
    flexDirection: 'row',
    marginRight: 20,
  },
  iconHeader: {
    marginRight: 20,
  },
  iconOther: {
    marginLeft: 8,
  },
});
