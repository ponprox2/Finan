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
import BasicCard from '../BasicCard/index';
import CardElement from '../Element/index';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';

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
      height: 74,
      position: 'absolute',
      left: 30,
      top: 165,
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
      height: 74,
      position: 'absolute',
      left: 30,
      top: 165,
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
      height: 74,
      position: 'absolute',
      left: 30,
      top: 165,
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

  const flatlistRef = useRef();

  
  const RenderImage1 = ({item, index}) => {
    return (
      <Image
        style={[
          styles.ImagePagination,
          index === activeSlide + 2 && {
            borderWidth: 2,
            borderColor: 'green',
            width: 50,
            height: 50,
          },
          index === activeSlide + 3 && {
            width: 50,
            height: 50,
          },
          index === activeSlide + 1 && {
            width: 50,
            height: 50,
          },
          isOpacity(index, activeSlide) && {
            opacity: 0,
          },
          isOpacity1(index, activeSlide) && {
            opacity: 0,
          },
        ]}
        source={item.imageAnimal}
      />
    );
  };
  const scrollToIndex = index => {
    flatlistRef.current.scrollToIndex({animated: true, index: index});
  };
  useEffect(() => {
    scrollToIndex(activeSlide);
  }, [activeSlide]);

  const handleIndex = index => {
    setActiveSlide(index);
    setActiveSlide1(index + 1);
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
            sliderWidth={400}
            itemWidth={400}
            data={images}
            onSnapToItem={index => handleIndex(index)}
            renderItem={renderItem}
          />
        </ViewShot>

        <CardStyle type={type} setType={setType} />
      </View>
      <View style={[styles.BoxView1]}>
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
    marginTop: 8,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  container1: {
    width: '100%',
    alignItems: 'center',
  },
  boxSelect: {
    marginTop: 23,

    marginBottom: 8,

    justifyContent: 'flex-end',
    paddingRight: '16%',
    flexDirection: 'row',
    width: '100%',
  },
  select: {
    marginLeft: 16,
  },

  crollView: {
    marginBottom: 70,
  },
  active: {
    borderWidth: 2,
    borderColor: 'green',
    // padding: 10,
  },
  boxView: {
    marginLeft: 6,
  },
  CardAnimal: {
    minWidth: '30%',
    maxWidth: '40%',
    height: 150,
    position: 'absolute',
    right: 0,
    top: 5,
  },
  ImagePagination: {
    margin: 8,
    width: 40,
    height: 40,
  },
  BoxView1: {
    flexDirection: 'row',
    marginLeft: 50,
    marginRight: 40,
  },
});
