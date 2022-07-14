import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import BottomComponent from '../../component/BottomComponent';
import Card from '../Card/AnimalCard';
import CardAnimal from '../Animal/CardAnimal';
import ElementCard from '../Card/ElementCard';
export default function HomePage() {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      {/* <ElementCard /> */}
      <Card />  
      <BottomComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
