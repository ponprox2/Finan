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

import Phone from '../../assets/icon/Phone.svg';
import Web from '../../assets/icon/Web.svg';
import Location from '../../assets/icon/Location.svg';
import Bank from '../../assets/icon/Bank.svg';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import {responsiveWidth} from '../../styles/index';
function BasicCard({item, index}) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <ImageBackground source={item.BGBasic} style={styles.cardBackground}>
      <Image
        style={styles.logo}
        source={require('../../assets/image/Logo.png')}
      />
      <View style={[styles.CardView, {backgroundColor: item.backgroundColor}]}>
        <View style={styles.boxTemp}></View>
        <View style={styles.viewInfoShop}>
          <Text style={[styles.TextNameShop, {color: item.color}]}>
            Julido shop
          </Text>
          <Image
            style={styles.Image}
            source={require('../../assets/image/QRCode.png')}
          />
          <View style={styles.BoxText}>
            <Phone fill="#EA9B3D" />
            <Text style={[styles.TextStyle, {color: item.color}]}>
              090 909 900
            </Text>
          </View>
          <View style={styles.BoxText}>
            <Web fill="#EA9B3D" />
            <Text style={[styles.TextStyle, {color: item.color}]}>
              julido.buynow.shop
            </Text>
          </View>
          <View style={styles.BoxText}>
            <Location fill="#EA9B3D" />
            <Text style={[styles.TextStyle1, {color: item.color}]}>
              195/10E Điện Biên Phủ, Phường 22, Quận Bình Thạnh, TP. HCM
            </Text>
          </View>
          <View style={styles.BoxText1}>
            <Bank fill="#EA9B3D" />
            <View>
              <Text style={[styles.TextStyle, {color: item.color}]}>
                Ngân hàng MB bank:
              </Text>
              <Text style={[styles.TextStyle, {color: item.color}]}>
                Nguyễn Đỗ Huy Quang - 9090 92039 02932
              </Text>
              <Text style={[styles.TextStyle, {color: item.color}]}>
                Nguyễn Đỗ Huy Quang - 9090 92039 02932
              </Text>
              <Text style={[styles.TextStyle, {color: item.color}]}>
                Nguyễn Đỗ Huy Quang - 9090 92039 02932
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default React.memo(BasicCard);

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveWidth(8),
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  cardBackground: {
    width: responsiveWidth(302),
    minHeight: '56%',
    marginTop: responsiveWidth(12),
    borderRadius: responsiveWidth(30),
    overflow: 'hidden',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },

  CardView: {
    minHeight: '24%',
    width: responsiveWidth(270),
    marginBottom: responsiveWidth(20),
    borderRadius: responsiveWidth(20),
    marginTop: '66%',
    borderWidth: 1,
    borderColor: 'rgba(216, 130, 7, 0.5)',
    overflow: 'hidden',
  },
  TextNameShop: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'bold',
    marginBottom: responsiveWidth(20),
  },
  viewInfoShop: {
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveWidth(16),
  },
  BoxText: {
    flexDirection: 'row',
    marginBottom: responsiveWidth(16),
  },
  TextStyle: {
    color: '#FFFFFF',
    marginLeft: responsiveWidth(6),
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 'SemiBold',
  },
  TextStyle1: {
    marginLeft: responsiveWidth(6),
    fontSize: responsiveWidth(10),
    lineHeight: 12,
    fontWeight: '600',
  },
  Image: {
    position: 'absolute',
    top: responsiveWidth(16),
    right: responsiveWidth(16),
  },
  BoxText1: {
    flexDirection: 'row',
  },
  logo: {
    position: 'absolute',
    top: responsiveWidth(24),
    right: responsiveWidth(15),
    width: responsiveWidth(163),
    height: responsiveWidth(142),
  },
  images: {
    borderRadius: responsiveWidth(15),
    backgroundColor: COLORS.primaryGrey,
    width: responsiveWidth(370),
    height: responsiveWidth(370),
  },
});
