import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function CardStyle({type, setType}) {
  const handleChangeElement = () => {
    setType('element');
  };
  const handleChangeAnimal = () => {
    setType('animal');
  };
  const handleChangeBasic = () => {
    setType('basic');
  };
  const getStyle = type => {
    switch (type) {
      case 'animal':
        return styles.animal;

      case 'element':
        return styles.element;

      default:
        return styles.basic;
    }
  };
  return (
    <View style={[styles.boxSelect, getStyle(type)]}>
      <TouchableOpacity onPress={handleChangeElement}>
        <Image source={require('../assets/image/Elements.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleChangeAnimal}>
        <Image
          style={styles.select}
          source={require('../assets/image/Animal.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleChangeBasic}>
        <Image
          style={styles.select}
          source={require('../assets/image/Basic.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxSelect: {
    marginTop: 23,
    marginBottom: 8,
    width: '100%',
  },
  select: {
    marginLeft: 16,
  },
  element: {
    marginLeft: '30%',
    flexDirection: 'row',
  },
  animal: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  basic: {
    justifyContent: 'flex-end',
    paddingRight: '16%',
    flexDirection: 'row',
  },
});
