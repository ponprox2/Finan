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
  ImageBackground,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
import {COLORS, globalStyles} from '../../constants/index';
import Right from '../../assets/icon/iconAnimal/Right.svg';
import Left from '../../assets/icon/iconAnimal/Left.svg';
import Icon4 from '../../assets/icon/IconCardBasic1/icon4.svg';
import Phone from '../../assets/icon/Phone.svg';
import Web from '../../assets/icon/Web.svg';
import Location from '../../assets/icon/Location.svg';
import Bank from '../../assets/icon/Bank.svg';

export default function CardAnimal({item, index}) {
  return (
    <ImageBackground
      source={require('../../assets/image/Animal/BGAnimal.png')}
      style={styles.cardBackground}>
      <Image
        source={item.imageAnimal}
        resizeMode={'center'}
        style={item.styleImage}
      />
      <Image source={item.textAnimal} style={item.styleText} />

      <View style={styles.Right}>{item.right}</View>

      <View style={styles.CardView}>
        <View style={styles.boxTemp}></View>
        <View style={styles.viewInfoShop}>
          <Text style={styles.TextNameShop}>Julido shop</Text>
          <Image
            style={styles.Image}
            source={require('../../assets/image/QRCode.png')}
          />
          <View style={styles.BoxText}>
            <Phone fill="#EA9B3D" />
            <Text style={styles.TextStyle}>090 909 900</Text>
          </View>
          <View style={styles.BoxText}>
            <Web fill="#EA9B3D" />
            <Text style={styles.TextStyle}>julido.buynow.shop</Text>
          </View>
          <View style={styles.BoxText}>
            <Location fill="#EA9B3D" />
            <Text style={styles.TextStyle}>
              195/10E Điện Biên Phủ, Phường 22, Quận Bình Thạnh, TP. HCM
            </Text>
          </View>
          <View style={styles.BoxText1}>
            <Bank fill="#EA9B3D" />
            <View>
              <Text style={styles.TextStyle}>Ngân hàng MB bank:</Text>
              <Text style={styles.TextStyle}>
                Nguyễn Đỗ Huy Quang - 9090 92039 02932
              </Text>
              <Text style={styles.TextStyle}>
                Nguyễn Đỗ Huy Quang - 9090 92039 02932
              </Text>
              <Text style={styles.TextStyle}>
                Nguyễn Đỗ Huy Quang - 9090 92039 02932
              </Text>
            </View>
          </View>
          <Left style={styles.LeftStyle} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    width: 302,
    minHeight: '56%',
    marginTop: 12,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
  },

  CardView: {
    minHeight: '34%',
    width: 270,

    marginBottom: 20,
    borderRadius: 20,
    marginTop: '70%',
  },
  TextNameShop: {
    color: '#D2A976',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  viewInfoShop: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  BoxText: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  TextStyle: {
    color: '#FFFFFF',
    marginLeft: 6,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 'SemiBold',
  },
  Image: {
    position: 'absolute',
    top: 16,
    right: 24,
  },
  BoxText1: {
    flexDirection: 'row',
  },

  images: {
    borderRadius: 15,
    backgroundColor: COLORS.primaryGrey,
    width: 370,
    height: 370,
  },
  CardAnimal: {
    minWidth: '30%',
    maxWidth: '40%',
    height: 150,
    position: 'absolute',
    right: -6,
    top: 0,
  },

  Right: {
    position: 'absolute',
    top: 200,
    right: 16,
  },
  LeftStyle: {
    position: 'absolute',
    left: -10,
    bottom: 0,
  },
});
