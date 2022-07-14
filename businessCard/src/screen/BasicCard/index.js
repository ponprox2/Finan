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
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';

const images = [{}, {}, {}];

const renderItem = ({item, index}) => {
  return (
    <ImageBackground
      source={require('../../assets/image/imageCardBasic1/imageBasic1.png')}
      style={styles.cardBackground}>
      <Circle1 style={styles.CirCle1} />
      <Circle2 style={styles.CirCle2} />
      <Circle3 style={styles.CirCle3} />
      <Icon4 style={styles.Icon4} />
      <Icon4 style={styles.Icon5} />
      <Icon4 style={styles.Icon6} />
      <Image
        style={styles.logo}
        source={require('../../assets/image/Logo.png')}
      />
      <ImageBackground
        style={styles.CardView}
        source={require('../../assets/image/imageCardBasic1/backgroundBasic1.png')}>
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
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default function BasicCard() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    // <View>
    //   <View style={{maxHeight: '75%'}}>
    //     <Carousel
    //       layout="default"
    //       sliderWidth={302}
    //       itemWidth={302}
    //       data={images}
    //       onSnapToItem={index => setActiveSlide(index)}
    //       renderItem={renderItem}
    //     />
    //   </View>
    //   <Pagination
    //     dotsLength={images.length}
    //     activeDotIndex={activeSlide}
    //     animatedDuration={600}
    //     dotStyle={styles.dot}
    //     inactiveDotStyle={styles.inactiveDot}
    //     inactiveDotOpacity={0.9}
    //     inactiveDotScale={0.6}
    //   />
    // </View>
    <ImageBackground
      source={require('../../assets/image/imageCardBasic1/imageBasic1.png')}
      style={styles.cardBackground}>
      <Circle1 style={styles.CirCle1} />
      <Circle2 style={styles.CirCle2} />
      <Circle3 style={styles.CirCle3} />
      <Icon4 style={styles.Icon4} />
      <Icon4 style={styles.Icon5} />
      <Icon4 style={styles.Icon6} />
      <Image
        style={styles.logo}
        source={require('../../assets/image/Logo.png')}
      />
      <ImageBackground
        style={styles.CardView}
        source={require('../../assets/image/imageCardBasic1/backgroundBasic1.png')}>
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
        </View>
      </ImageBackground>
    </ImageBackground>
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
    backgroundColor: '#996633',
    marginBottom: 20,
    borderRadius: 20,
    marginTop: '66%',
  },
  TextNameShop: {
    color: '#FFFFFF',
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
  images: {
    borderRadius: 15,
    backgroundColor: COLORS.primaryGrey,
    width: 370,
    height: 370,
  },
});
