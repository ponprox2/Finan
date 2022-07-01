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
import {COLORS, globalStyles} from '../../../../constants/index1';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChevronLeft from '../../../../assets/icon/ChevronLeft.svg';
import SearchIcon from '../../../../assets/icon/SearchIcon.svg';
import UpcScan from '../../../../assets/icon/UpcScan.svg';
import MoreVertical from '../../../../assets/icon/MoreVertical.svg';
import SortDown from '../../../../assets/icon/SortDown.svg';
import ShareAndroid from '../../../../assets/icon/ShareAndroid.svg';
import HeaderProduct from './Header';
import {useSelector} from 'react-redux';

const arr = [
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
  {
    image: require('../../../../assets/image/png/Frame.png'),
    name: 'Túi đeo vai nữ Glow In The Dark',
    quantity: '5',
    type: '6 phân loại',
    price: '1.550.000',
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={[styles.proudct, {marginRight: index % 2 === 0 ? 8 : 0}]}>
      <View>
        <Image source={item.image[0]} style={styles.image} />
        <TouchableOpacity style={styles.buttonShare}>
          <ShareAndroid style={styles.shareAndroid} />
        </TouchableOpacity>
      </View>
      <View style={styles.boxDetailProduct}>
        <Text style={styles.nameProduct}>{item.name}</Text>
        <View style={styles.boxWarehouse}>
          {/* <Text style={styles.quantityProduct}>Kho:{item.quantity}</Text> */}
          {/* <Text style={styles.textType}>{item.type}</Text> */}
        </View>
        <Text style={styles.price}>{item.price}₫</Text>
      </View>
    </View>
  );
};

export default function ListProduct({navigation}) {
  const items = useSelector(state => state.personalInfo.items);
  console.log(items);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderProduct navigation={navigation} />
      <View style={styles.listProudct}>
        <FlatList
          data={items}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listProudct: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    marginLeft: 8,
    marginBottom: 60,
  },
  proudct: {
    height: 271,
    width: 167,
    backgroundColor: COLORS.whiteLight,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.greyBoder,
    marginBottom: 8,
  },
  image: {
    width: 167,
    height: 167,
  },
  boxDetailProduct: {
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 8,
  },
  nameProduct: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: COLORS.blackDark,
  },
  boxWarehouse: {
    flexDirection: 'row',
  },
  quantityProduct: {
    marginRight: 21,
    color: COLORS.graylighter,
  },
  textType: {
    width: 64,
    height: 18,
    fontSize: 12,
    lineHeight: 18,
    backgroundColor: '#E8EAED',
    borderRadius: 6,
    textAlign: 'center',
  },
  price: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.redBrown,
    marginTop: 4,
    fontWeight: '600',
  },
  buttonShare: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.whiteLight,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.blueLight,
    position: 'absolute',
    bottom: 12,
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
