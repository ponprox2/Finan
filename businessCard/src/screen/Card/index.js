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
} from 'react-native';
import {COLORS, globalStyles} from '../../constants/index';
import BasicCard from '../BasicCard/index';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';

const images = [{}, {}, {}];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.container}>
      <BasicCard />

      <View style={styles.boxSelect}>
        <TouchableOpacity>
          <Image
            style={styles.select}
            source={require('../../assets/image/Elements.png')}
          />
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
export default function Card() {
  const [activeSlide, setActiveSlide] = useState(0);
  //   const [setImage,]
  const SCREENS = [
    require(`../../assets/image/Basic1.png`),
    require(`../../assets/image/Basic2.png`),
    require(`../../assets/image/Basic3.png`),
  ];
  return (
    <ScrollView style={styles.crollView}>
      <View style={[styles.images, globalStyles.flexCenter]}>
        <Carousel
          layout="default"
          sliderWidth={400}
          itemWidth={400}
          data={images}
          onSnapToItem={index => setActiveSlide(index)}
          renderItem={renderItem}
        />
        <Pagination
          dotsLength={images.length}
          animatedDuration={400}
          inactiveDotOpacity={0.9}
          inactiveDotScale={0.6}
          activeDotIndex={activeSlide}
          renderDots={activeIndex =>
            SCREENS.map((screen, i) => (
              <View style={styles.boxView} key={i}>
                <Image
                  style={activeIndex === i && styles.active}
                  source={screen}
                />
              </View>
            ))
          }
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
  boxSelect: {
    flexDirection: 'row-reverse',
    marginTop: 23,
    marginLeft: 30,
    marginBottom: 8,
    // justifyContent: 'space-between',
    width: '70%',
  },
  select: {
    marginLeft: 16,
  },

  crollView: {
    marginBottom: 50,
  },
  active: {
    borderWidth: 2,
    borderColor: 'green',
    // padding: 10,
  },
  boxView: {
    marginLeft: 6,
  },
});
