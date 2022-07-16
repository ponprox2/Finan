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
import BasicCard from '../BasicCard/index';
import CardAnimal from '../Animal/CardAnimal';
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

const images = [
  {
    imageAnimal: require('../../assets/image/Animal/TheRat.png'),
    textAnimal: require('../../assets/image/Animal/TextTheRat.png'),
    right: <RightRat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 100,
      position: 'absolute',
      left: 16,
      top: 115,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: -20,
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
      height: 90,
      position: 'absolute',
      left: 16,
      top: 125,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -3,
      top: -10,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheTiger.png'),
    textAnimal: require('../../assets/image/Animal/TextTheTiger.png'),
    right: <RightTiger />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 81,
      position: 'absolute',
      left: 16,
      top: 135,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: -10,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheCat.png'),
    textAnimal: require('../../assets/image/Animal/TextTheCat.png'),
    right: <RightCat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 100,
      position: 'absolute',
      left: 14,
      top: 133,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: -13,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheDragon.png'),
    textAnimal: require('../../assets/image/Animal/TextTheDragon.png'),
    right: <RightDragon />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 87,
      position: 'absolute',
      left: 16,
      top: 130,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: -6,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheSnake.png'),
    textAnimal: require('../../assets/image/Animal/TextTheSnake.png'),
    right: <RightSnake />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 100,
      position: 'absolute',
      left: 16,
      top: 115,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: -6,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheHorse.png'),
    textAnimal: require('../../assets/image/Animal/TextTheHorse.png'),
    right: <RightHorse />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 100,
      position: 'absolute',
      left: 16,
      top: 120,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: 0,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheGoat.png'),
    textAnimal: require('../../assets/image/Animal/TextTheGoat.png'),
    right: <RightGoat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 100,
      position: 'absolute',
      left: 16,
      top: 120,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: -3,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheMonkey.png'),
    textAnimal: require('../../assets/image/Animal/TextTheMonkey.png'),
    right: <RightMonkey />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 100,
      position: 'absolute',
      left: 16,
      top: 115,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -3,
      top: 3,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheRooster.png'),
    textAnimal: require('../../assets/image/Animal/TextTheRooster.png'),
    right: <RightRooster />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 86,
      position: 'absolute',
      left: 16,
      top: 130,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: 0,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheDog.png'),
    textAnimal: require('../../assets/image/Animal/TextTheDog.png'),
    right: <RightGoat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 100,
      position: 'absolute',
      left: 16,
      top: 115,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: -10,
    },
  },
  {
    imageAnimal: require('../../assets/image/Animal/ThePig.png'),
    textAnimal: require('../../assets/image/Animal/TextThePig.png'),
    right: <RightGoat />,
    styleText: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 110,
      position: 'absolute',
      left: 16,
      top: 115,
    },
    styleImage: {
      minWidth: '30%',
      maxWidth: '40%',
      height: 150,
      position: 'absolute',
      right: -6,
      top: 0,
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
  else if (a === 0 && b === 1) return true;
  else if (a === 1 && b === 2) return true;
  else if (a === 14 && b === 9) return true;
  else if (a === 14 && b === 11) return true;
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
    // console.log(index);
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
            // onSnapToItem={handleIndex}
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
export default forwardRef(Card);

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

    justifyContent: 'center',
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
