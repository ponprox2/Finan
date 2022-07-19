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
  PermissionsAndroid,
  Platform,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import CardStyle from '../../component/CardStyle';
import {COLORS, globalStyles} from '../../constants/index';
import CardAnimal from './CardAnimal';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import RightRat from '../../assets/icon/iconAnimal/RightRat.svg';
import RightOX from '../../assets/icon/iconAnimal/RightOX.svg';
import RightTiger from '../../assets/icon/iconAnimal/RightTiger.svg';
import RightCat from '../../assets/icon/iconAnimal/RightCat.svg';
import RightDragon from '../../assets/icon/iconAnimal/RightDragon.svg';
import RightSnake from '../../assets/icon/iconAnimal/RightSnake.svg';
import RightHorse from '../../assets/icon/iconAnimal/RightHorse.svg';
import RightMonkey from '../../assets/icon/iconAnimal/RightMonkey.svg';
import RightRooster from '../../assets/icon/iconAnimal/RightRooster.svg';
import RightPig from '../../assets/icon/iconAnimal/RightPig.svg';
import RightGoat from '../../assets/icon/iconAnimal/RightGoat.svg';
import {responsiveWidth} from '../../styles/index';
const images = [
  {
    imageAnimal: require('../../assets/image/Animal/TheRat.png'),
    textAnimal: require('../../assets/image/Animal/TextTheRat.png'),
    right: <RightRat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(100),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(115),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(-20),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheOX.png'),
    textAnimal: require('../../assets/image/Animal/TextTheOX.png'),
    right: <RightOX />,
    heightTextAnimal: '90',
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(90),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(125),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-3),
      top: responsiveWidth(-10),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheTiger.png'),
    textAnimal: require('../../assets/image/Animal/TextTheTiger.png'),
    right: <RightTiger />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(81),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(135),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(-10),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheCat.png'),
    textAnimal: require('../../assets/image/Animal/TextTheCat.png'),
    right: <RightCat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(100),
      position: 'absolute',
      left: responsiveWidth(14),
      top: responsiveWidth(133),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(-13),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheDragon.png'),
    textAnimal: require('../../assets/image/Animal/TextTheDragon.png'),
    right: <RightDragon />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(87),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(130),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(-6),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheSnake.png'),
    textAnimal: require('../../assets/image/Animal/TextTheSnake.png'),
    right: <RightSnake />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(100),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(115),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(-6),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheHorse.png'),
    textAnimal: require('../../assets/image/Animal/TextTheHorse.png'),
    right: <RightHorse />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(100),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(120),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(0),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheGoat.png'),
    textAnimal: require('../../assets/image/Animal/TextTheGoat.png'),
    right: <RightGoat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(100),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(120),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(-3),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheMonkey.png'),
    textAnimal: require('../../assets/image/Animal/TextTheMonkey.png'),
    right: <RightMonkey />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(100),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(115),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-3),
      top: responsiveWidth(3),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheRooster.png'),
    textAnimal: require('../../assets/image/Animal/TextTheRooster.png'),
    right: <RightRooster />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(86),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(130),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(0),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheDog.png'),
    textAnimal: require('../../assets/image/Animal/TextTheDog.png'),
    right: <RightGoat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(100),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(115),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(-10),
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/ThePig.png'),
    textAnimal: require('../../assets/image/Animal/TextThePig.png'),
    right: <RightGoat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(110),
      position: 'absolute',
      left: responsiveWidth(16),
      top: responsiveWidth(115),
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: responsiveWidth(150),
      position: 'absolute',
      right: responsiveWidth(-6),
      top: responsiveWidth(0),
    },
  },
];

const dataPagination = [
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheRat.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheRat.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheRat.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheOX.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheTiger.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheCat.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheDragon.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheSnake.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheHorse.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheGoat.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheMonkey.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheRooster.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/TheDog.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/ThePig.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/ThePig.png')},
  {imageAnimal: require('../../assets/image/Animal/Pagination/ThePig.png')},
];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.container1}>
      <CardAnimal item={item} index={index} />
    </View>
  );
};

const isOpacity = (a, b) => {
  if (a === 0 && b === 0) return true;
  else if (a === 1 && b === 0) return true;
  else if (a === 0 && b === 1) return true;
  else if (a === 1 && b === 2) return true;
  else if (a === 14 && b === 9) return true;
  else if (a === 14 && b === 10) return true;
  return false;
};
const isOpacity1 = (a, b) => {
  if (a === 1 && b === 0) return true;
  else if (a === 1 && b === 1) return true;
  else if (a === 15 && b === 11) return true;
  else if (a === 15 && b === 10) return true;
  return false;
};

function Card({type, setType}, ref) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [indexActive, setIndexActive] = useState(2);
  const [imageCap, setImageCap] = useState([]);

  const flatlistRef = useRef();
  const carouselRef = useRef();

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
    if (index === 14 && activeSlide === 11) {
      return styles.opacity0;
    }
  };
  //
  const RenderImage1 = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleOnSnap(index)}
        disabled={isOpacity(index, activeSlide)}>
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
export default forwardRef(Card);

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

    justifyContent: 'center',
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
  cardAnimal: {
    minWidth: '30%',
    maxWidth: '40%',
    height: responsiveWidth(150),
    position: 'absolute',
    right: responsiveWidth(0),
    top: responsiveWidth(5),
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
