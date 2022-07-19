import React, {useEffect, useRef, useState, forwardRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
  ScrollView,
  Screen,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import CardStyle from '../../component/CardStyle';
import {COLORS, globalStyles} from '../../constants/index';

import CardElement from './index';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import {responsiveWidth, responsiveHeight} from '../../styles/index';
const images = [
  {
    BGElement: require('../../assets/image/Element/BGMetal.png'),
    IconElement: require('../../assets/image/Element/Metal.png'),
    borderColor: '#B07E0E',
    backgroundColor: ' rgba(48, 18, 9, 0.32)',
    style: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(74),
      position: 'absolute',
      left: responsiveWidth(30),
      top: responsiveWidth(160),
      zIndex: 20,
    },
  },
  {
    BGElement: require('../../assets/image/Element/BGWood.png'),
    IconElement: require('../../assets/image/Element/Wood.png'),
    borderColor: '#267231',
    backgroundColor: 'rgba(25, 25, 25, 0.32)',
    style: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(74),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(160),
      zIndex: 20,
    },
  },
  {
    BGElement: require('../../assets/image/Element/BGWater.png'),
    IconElement: require('../../assets/image/Element/Water.png'),
    borderColor: '#1886A4',
    backgroundColor: 'rgba(186, 186, 186, 0.32)',
    style: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(85),
      position: 'absolute',
      left: responsiveWidth(24),
      top: responsiveWidth(155),
      zIndex: 20,
    },
  },
  {
    BGElement: require('../../assets/image/Element/BGFire.png'),
    IconElement: require('../../assets/image/Element/Fire.png'),
    borderColor: '#853110',
    backgroundColor: 'rgba(51, 51, 51, 0.32)',
    style: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(148),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(95),
      zIndex: 20,
    },
  },
  {
    BGElement: require('../../assets/image/Element/BGEarth.png'),
    IconElement: require('../../assets/image/Element/Earth.png'),
    borderColor: '#9B7443',
    backgroundColor: 'rgba(51, 51, 51, 0.32)',
    style: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(74),
      position: 'absolute',
      left: responsiveWidth(24),
      top: responsiveWidth(165),
      zIndex: 20,
    },
  },
];

const dataPagination = [
  {imageAnimal: require('../../assets/image/Element/Pagination/Metal.png')},
  {imageAnimal: require('../../assets/image/Element/Pagination/Metal.png')},
  {imageAnimal: require('../../assets/image/Element/Pagination/Metal.png')},
  {imageAnimal: require('../../assets/image/Element/Pagination/Wood.png')},
  {imageAnimal: require('../../assets/image/Element/Pagination/Water.png')},
  {imageAnimal: require('../../assets/image/Element/Pagination/Fire.png')},
  {imageAnimal: require('../../assets/image/Element/Pagination/Earth.png')},
  {imageAnimal: require('../../assets/image/Element/Pagination/Earth.png')},
  {imageAnimal: require('../../assets/image/Element/Pagination/Earth.png')},
];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.container1}>
      <CardElement item={item} index={index} />
    </View>
  );
};

const isOpacity = (a, b) => {
  if (a === 0 && b === 0) return true;
  else if (a === 0 && b === 1) return true;
  else if (a === 1 && b === 2) return true;
  else if (a === 7 && b === 2) return true;
  else if (a === 8 && b === 3) return true;
  else if (a === 8 && b === 4) return true;
  return false;
};
const isOpacity1 = (a, b) => {
  if (a === 1 && b === 0) return true;
  else if (a === 1 && b === 1) return true;
  else if (a === 7 && b === 3) return true;
  else if (a === 7 && b === 4) return true;
  return false;
};

function ElementCard({type, setType}, ref) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide1, setActiveSlide1] = useState(0);
  const [imageCap, setImageCap] = useState([]);

  const carouselRef = useRef();
  const flatlistRef = useRef();

  const handleOnSnap = index => {
    carouselRef?.current?.snapToItem(index - 2);
    setActiveSlide(index - 2);
  };
  const getStyle = (index, activeSlide) => {
    if (index === activeSlide + 2) {
      return styles.select;
    }
    if (index === activeSlide + 3) {
      return styles.nextSelect;
    }
    if (index === activeSlide + 1) {
      return styles.nextSelect;
    }
    if (isOpacity(index, activeSlide)) {
      return styles.opacity0;
    }
  };
  const getStyle1 = (index, activeSlide) => {
    if (isOpacity1(index, activeSlide)) {
      return styles.opacity0;
    }
  };
  const getStyle2 = (index, activeSlide) => {
    // if (index === 5 && activeSlide === 2) {
    //   return styles.opacity0;
    // }
  };
  const RenderImage1 = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => handleOnSnap(index)}>
        <Image
          style={[
            styles.imagePagination,
            getStyle(index, activeSlide),
            getStyle1(index, activeSlide),
            getStyle2(index, activeSlide),
          ]}
          source={item.imageAnimal}
        />
      </TouchableOpacity>
    );
  };
  const scrollToIndex = index => {
    flatlistRef?.current?.scrollToIndex({animated: true, index: index});
  };
  useEffect(() => {
    scrollToIndex(activeSlide);
  }, [activeSlide]);

  const handleIndex = index => {
    setActiveSlide(index);
  };
  return (
    <ScrollView style={styles.crollView}>
      <View style={[styles.container, globalStyles.flexCenter]}>
        <ViewShot
          style={{flex: 1}}
          ref={ref}
          options={{
            fileName: 'rn_image_picker_lib_temp_',
            format: 'jpg',
            quality: 0.9,
          }}>
          <Carousel
            layout="default"
            sliderWidth={responsiveWidth(370)}
            itemWidth={responsiveWidth(370)}
            data={images}
            onSnapToItem={handleIndex}
            renderItem={renderItem}
            ref={carouselRef}
          />
        </ViewShot>
        <CardStyle type={type} setType={setType} />
      </View>
      <View style={[styles.boxView1]}>
        <FlatList
          data={dataPagination}
          renderItem={RenderImage1}
          ref={flatlistRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}

export default forwardRef(ElementCard);

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveWidth(8),
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  container1: {
    width: '100%',
    alignItems: 'center',
  },
  boxSelect: {
    marginTop: responsiveWidth(23),

    marginBottom: responsiveWidth(8),

    marginLeft: '30%',
    flexDirection: 'row',
    width: '100%',
  },
  select: {
    marginLeft: responsiveWidth(16),
  },

  crollView: {
    marginBottom: responsiveWidth(70),
  },
  active: {
    borderWidth: 2,
    borderColor: 'green',
  },
  boxView: {
    marginLeft: responsiveWidth(6),
  },

  imagePagination: {
    margin: responsiveWidth(6),
    width: responsiveWidth(40),
    height: responsiveWidth(40),
  },
  boxView1: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(50),
    marginRight: responsiveWidth(40),
  },
  select: {
    borderWidth: 2,
    borderColor: 'green',
    width: responsiveWidth(50),
    height: responsiveWidth(50),
  },
  nextSelect: {
    width: responsiveWidth(50),
    height: responsiveWidth(50),
  },
  opacity0: {
    opacity: 0,
  },
});
