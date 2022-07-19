import React, {useEffect, useRef, useState, forwardRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  BackHandler,
  ImageBackground,
  ScrollView,
  Screen,
  Share,
  ToastAndroid,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import CardStyle from '../../component/CardStyle';
import {COLORS, globalStyles} from '../../constants/index';
import BasicCard from './index';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import {responsiveWidth} from '../../styles/index';
const images = [
  {
    BGBasic: require('../../assets/image/imageCardBasic1/Basic1.png'),
    ContentBasic: require('../../assets/image/imageCardBasic1/BGBasic1.png'),
    borderColor: '#B07E0E',
    color: '#FEFEFE',
    backgroundColor: '#702AC5',
    style: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(74),
      position: 'absolute',
      left: responsiveWidth(30),
      top: responsiveWidth(165),
      zIndex: 20,
    },
  },
  {
    BGBasic: require('../../assets/image/imageCardBasic1/Basic2.png'),
    ContentBasic: require('../../assets/image/imageCardBasic1/BGBasic2.png'),
    borderColor: '#B07E0E',
    backgroundColor: '#FFFFFF',
    color: '#161C24',

    // color:""
    style: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(74),
      position: 'absolute',
      left: responsiveWidth(30),
      top: responsiveWidth(165),
      zIndex: 20,
    },
  },
  {
    BGBasic: require('../../assets/image/imageCardBasic1/Basic3.png'),
    ContentBasic: require('../../assets/image/imageCardBasic1/BGBasic3.png'),
    borderColor: '#B07E0E',
    backgroundColor: 'rgba(76, 76, 76, 0.5)',
    color: '#FEFEFE',
    style: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(74),
      position: 'absolute',
      left: responsiveWidth(30),
      top: responsiveWidth(165),
      zIndex: 20,
    },
  },
];

const dataPagination = [
  {
    imageAnimal: require('../../assets/image/imageCardBasic1/Pagination/Basic1.png'),
  },
  {
    imageAnimal: require('../../assets/image/imageCardBasic1/Pagination/Basic1.png'),
  },
  {
    imageAnimal: require('../../assets/image/imageCardBasic1/Pagination/Basic1.png'),
  },
  {
    imageAnimal: require('../../assets/image/imageCardBasic1/Pagination/Basic2.png'),
  },
  {
    imageAnimal: require('../../assets/image/imageCardBasic1/Pagination/Basic3.png'),
  },
  {
    imageAnimal: require('../../assets/image/imageCardBasic1/Pagination/Basic3.png'),
  },
  {
    imageAnimal: require('../../assets/image/imageCardBasic1/Pagination/Basic3.png'),
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.container1}>
      <BasicCard item={item} index={index} />
    </View>
  );
};

const isOpacity = (a, b) => {
  if (a === 0 && b === 0) return true;
  else if (a === 0 && b === 1) return true;
  else if (a === 5 && b === 0) return true;
  else if (a === 6 && b === 1) return true;
  else if (a === 1 && b === 2) return true;
  else if (a === 1 && b === 2) return true;
  else if (a === 6 && b === 0) return true;
  else if (a === 5 && b === 2) return true;
  else if (a === 6 && b === 2) return true;
  else if (a === 7 && b === 2) return true;
  return false;
};
const isOpacity1 = (a, b) => {
  if (a === 1 && b === 0) return true;
  else if (a === 1 && b === 1) return true;
  else if (a === 5 && b === 1) return true;
  else if (a === 7 && b === 4) return true;
  return false;
};

function BasicCards({type, setType}, ref) {
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
    if (index === 5 && activeSlide === 2) {
      return styles.opacity0;
    }
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

export default forwardRef(BasicCards);

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

    justifyContent: 'flex-end',
    paddingRight: '16%',
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
    // padding: 10,
  },
  boxView: {
    marginLeft: responsiveWidth(6),
  },

  imagePagination: {
    margin: responsiveWidth(4),
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
