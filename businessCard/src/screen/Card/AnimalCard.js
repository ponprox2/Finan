import React, {useEffect, useRef, useState} from 'react';
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
    // style: styles.CardAnimal,
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheOX.png'),
    textAnimal: require('../../assets/image/Animal/TextTheOX.png'),
    right: <RightOX />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheTiger.png'),
    textAnimal: require('../../assets/image/Animal/TextTheTiger.png'),
    right: <RightTiger />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheCat.png'),
    textAnimal: require('../../assets/image/Animal/TextTheCat.png'),
    right: <RightCat />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheDragon.png'),
    textAnimal: require('../../assets/image/Animal/TextTheDragon.png'),
    right: <RightDragon />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheSnake.png'),
    textAnimal: require('../../assets/image/Animal/TextTheSnake.png'),
    right: <RightSnake />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheHorse.png'),
    textAnimal: require('../../assets/image/Animal/TextTheHorse.png'),
    right: <RightHorse />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheGoat.png'),
    textAnimal: require('../../assets/image/Animal/TextTheGoat.png'),
    right: <RightGoat />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheMonkey.png'),
    textAnimal: require('../../assets/image/Animal/TextTheMonkey.png'),
    right: <RightMonkey />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/TheRooster.png'),
    textAnimal: require('../../assets/image/Animal/TextTheRooster.png'),
    right: <RightRooster />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/ThePig.png'),
    textAnimal: require('../../assets/image/Animal/TextThePig.png'),
    right: <RightGoat />,
  },
  {
    imageAnimal: require('../../assets/image/Animal/ThePig.png'),
    textAnimal: require('../../assets/image/Animal/TextThePig.png'),
    right: <RightGoat />,
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
  else if (a === 14 && b === 11) return true;
  else if (a === 14 && b === 10) return true;
  return false;
};
const isOpacity1 = (a, b) => {
  // console.log(a, b);
  if (a === 1 && b === 0) return true;
  else if (a === 1 && b === 1) return true;
  else if (a === 15 && b === 11) return true;
  else if (a === 15 && b === 10) return true;
  return false;
};

export default function Card() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide1, setActiveSlide1] = useState(0);
  const [imageCap, setImageCap] = useState([]);
  const ref = useRef();
  const flatlistRef = useRef();
  const SCREENS = [
    require(`../../assets/image/Basic1.png`),
    require(`../../assets/image/Basic2.png`),
    require(`../../assets/image/Basic3.png`),
  ];

  useEffect(() => {
    console.log(isOpacity(0, activeSlide));
  }, [activeSlide]);
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
  // useEffect(() => {
  //   // on mount
  //   ref.current.capture().then(uri => {
  //     // console.log('do something with ', uri);
  //     Share.share({title: 'image', url: uri});
  //     const source = {uri: uri};
  //     setImageCap(source);
  //     // Share.share({
  //     //   message:
  //     //     'React Native | A framework for building native apps using React',
  //     // });
  //   });
  // }, []);
  // async function share() {}
  // console.log(imageCap);
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

        <View style={styles.boxSelect}>
          <TouchableOpacity>
            <Image source={require('../../assets/image/Elements.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.select}
              source={require('../../assets/image/Animal.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.select}
              source={require('../../assets/image/Basic.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.BoxView1]}>
        <FlatList
          data={dataPagination}
          renderItem={RenderImage1}
          ref={flatlistRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

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
