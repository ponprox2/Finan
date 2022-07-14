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
import {COLORS, globalStyles} from '../../constants/index';
import Circle1 from '../../assets/icon/IconCardBasic1/Circle1.svg';
import Circle2 from '../../assets/icon/IconCardBasic1/Circle2.svg';
import Circle3 from '../../assets/icon/IconCardBasic1/Circle3.svg';
import Icon4 from '../../assets/icon/IconCardBasic1/icon4.svg';
import Phone from '../../assets/icon/Phone.svg';
import Web from '../../assets/icon/Web.svg';
import Location from '../../assets/icon/Location.svg';
import Bank from '../../assets/icon/Bank.svg';

export default function BasicCard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/imageCardBasic2/imageBasic.png')}
        style={styles.cardBackground}>
        <Image
          style={styles.logo}
          source={require('../../assets/image/Logo.png')}
        />
        <ImageBackground
          style={styles.CardView}
          source={require('../../assets/image/imageCardBasic2/BGContent.png')}>
          <View style={styles.boxTemp}></View>
          <View style={styles.viewInfoShop}>
            <Text style={styles.TextNameShop}>Julido shop</Text>
            <Image
              style={styles.Image}
              source={require('../../assets/image/QRCode.png')}
            />
            <View style={styles.BoxText}>
              <Phone fill="#FEFEFE" />
              <Text style={styles.TextStyle}>090 909 900</Text>
            </View>
            <View style={styles.BoxText}>
              <Web fill="#FEFEFE" />
              <Text style={styles.TextStyle}>julido.buynow.shop</Text>
            </View>
            <View style={styles.BoxText}>
              <Location fill="#FEFEFE" />
              <Text style={styles.TextStyle}>
                195/10E Điện Biên Phủ, Phường 22, Quận Bình Thạnh, TP. HCM
              </Text>
            </View>
            <View style={styles.BoxText1}>
              <Bank fill="#FEFEFE" />
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
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  cardBackground: {
    width: 302,
    minHeight: '56%',
    marginTop: 12,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  CirCle1: {
    position: 'absolute',
    right: 13,
    top: 24,
  },
  CirCle2: {
    position: 'absolute',
    left: 34,
    top: 157,
  },
  CirCle3: {
    position: 'absolute',
    right: 25,
    bottom: 8,
  },
  Icon4: {
    position: 'absolute',
    top: 97,
    left: 0,
  },
  Icon5: {
    position: 'absolute',
    top: 104,
    left: 0,
  },
  Icon6: {
    position: 'absolute',
    top: 111,
    left: 0,
  },
  CardView: {
    minHeight: '34%',
    width: 270,
    backgroundColor:
      'radial-gradient(53.86% 73.39% at 35.69% 18.72%, #B63CD4 0%, #702AC5 100%)',
    // backgroundColor: 'red',
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: '66%',
  },
  TextNameShop: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'bold',
    marginBottom: 30,
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
    right: 16,
  },
  BoxText1: {
    flexDirection: 'row',
  },
  logo: {
    position: 'absolute',
    top: 24,
    right: 15,
    width: 163,
    height: 142,
  },
});
