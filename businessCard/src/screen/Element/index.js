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
import Right from '../../assets/icon/iconAnimal/Right.svg';
import Left from '../../assets/icon/iconAnimal/Left.svg';
import Icon4 from '../../assets/icon/IconCardBasic1/icon4.svg';
import Phone from '../../assets/icon/Phone.svg';
import Web from '../../assets/icon/Web.svg';
import Location from '../../assets/icon/Location.svg';
import Bank from '../../assets/icon/Bank.svg';

function ElementCard({item, index}) {
  return (
    <ImageBackground source={item.BGElement} style={styles.cardBackground}>
      <View style={[styles.CardAnimal, {borderColor: item.borderColor}]}>
        <Image
          source={require('../../assets/image/Logo.png')}
          // resizeMode={'center'}
          style={styles.CardAnimal1}
        />
      </View>

      <Image
        source={item.IconElement}
        style={item.style}
        resizeMode={'center'}
      />
      {/* <Right /> */}
      {/* <View style={styles.Right}>{item.right}</View> */}

      <View style={styles.CardView}>
        <View style={styles.boxTemp}></View>
        <View
          style={[
            styles.viewInfoShop,
            {backgroundColor: item.backgroundColor},
          ]}>
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
          {/* <Left style={styles.LeftStyle} /> */}
        </View>
      </View>
    </ImageBackground>
  );
}

export default React.memo(ElementCard);

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
    marginTop: '10%',
  },
  TextNameShop: {
    color: '#FEFEFE',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 12,
  },
  viewInfoShop: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 20,
    // backgroundColor: 'rgba(25, 25, 25, 0.32)',
    // marginTop: 16,
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
  logo: {
    position: 'absolute',
    top: 24,
    right: 15,
    width: 163,
    height: 142,
  },
  images: {
    borderRadius: 15,
    backgroundColor: COLORS.primaryGrey,
    width: 370,
    height: 370,
  },
  CardAnimal: {
    height: 152,
    width: 152,

    borderRadius: 150,
    borderWidth: 10,
    borderColor: '#267231',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 16,
  },
  CardAnimal1: {
    height: 139,
    width: 139,

    borderRadius: 150,
    zIndex: 21,
  },
  TextAnimal: {
    minWidth: '30%',
    maxWidth: '40%',
    height: 74,
    position: 'absolute',
    left: 16,
    top: 165,
    zIndex: 20,
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
