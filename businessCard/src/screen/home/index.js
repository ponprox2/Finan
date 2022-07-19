import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useRef} from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import BottomComponent from '../../component/BottomComponent';
import Card from '../Animal/AnimalCard';

import ElementCard from '../Element/ElementCard';
import BasicCard from '../BasicCard/BasicCard';
export default function HomePage() {
  const [type, setType] = useState('basic');
  const ref = useRef();

  const renderCard = () => {
    switch (type) {
      case 'animal':
        return <Card type={type} setType={setType} ref={ref} />;
      case 'element':
        return <ElementCard type={type} setType={setType} ref={ref} />;
      default:
        return <BasicCard type={type} setType={setType} ref={ref} />;
    }
  };
  return (
    <View style={styles.container}>
      <HeaderComponent />
      {renderCard()}
      <BottomComponent ref={ref} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
