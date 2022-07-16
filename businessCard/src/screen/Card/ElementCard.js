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
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import CardStyle from '../../component/CardStyle';
import {COLORS, globalStyles} from '../../constants/index';
import BasicCard from '../BasicCard/index';
import CardElement from '../Element/index';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';

const images = [
  {
    BGElement: require('../../assets/image/Element/BGMetal.png'),
    IconElement: require('../../assets/image/Element/Metal.png'),
    borderColor: '#B07E0E',
    backgroundColor: ' rgba(48, 18, 9, 0.32)',
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
    BGElement: require('../../assets/image/Element/BGWood.png'),
    IconElement: require('../../assets/image/Element/Wood.png'),
    borderColor: '#267231',
    backgroundColor: 'rgba(25, 25, 25, 0.32)',
    style: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 74,
      position: 'absolute',
      left: 16,
      top: 165,
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
      height: 85,
      position: 'absolute',
      left: 24,
      top: 155,
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
      height: 148,
      position: 'absolute',
      left: 16,
      top: 95,
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
      height: 74,
      position: 'absolute',
      left: 24,
      top: 165,
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
const RenderImage = ({activeSlide}) => {
  const data = [
    require(`../../assets/image/Basic.png`),
    require(`../../assets/image/Basic.png`),
    require(`../../assets/image/Basic.png`),
  ];

  return (
    <View>
      {data.map((screen, i) => (
        <View style={{flex: 1, alignItems: 'center'}} key={i}>
          <Text style={{color: activeSlide === i ? 'blue' : '#000'}}>{i}</Text>
        </View>
      ))}
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
  // console.log(a, b);
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
    console.log(index);
    carouselRef.current.snapToItem(index - 2);
    setActiveSlide(index - 2);
  };

  const RenderImage1 = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => handleOnSnap(index)}>
        <Image
          style={[
            styles.ImagePagination,
            index === activeSlide + 2 && {
              borderWidth: 2,
              borderColor: 'green',
              width: 50,
              height: 50,
              // padding: 10,
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
      </TouchableOpacity>
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
            ref={carouselRef}
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

export default forwardRef(ElementCard);

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

    // justifyContent: 'center',
    marginLeft: '30%',
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
