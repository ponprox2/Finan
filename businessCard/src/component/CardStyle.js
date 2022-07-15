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
  return (
    <View
      style={[
        styles.boxSelect,
        type === 'element' && {marginLeft: '30%', flexDirection: 'row'},
        type === 'animal' && {
          justifyContent: 'center',
          flexDirection: 'row',
        },
        type === 'basic' && {
          justifyContent: 'flex-end',
          paddingRight: '16%',
          flexDirection: 'row',
        },
      ]}>
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
