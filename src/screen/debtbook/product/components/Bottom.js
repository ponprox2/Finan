import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, globalStyles} from '../../../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Bottom() {
  return (
    <View style={styles.container}>
      <TouchableOpacity></TouchableOpacity>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: 'red',
    // position: 'absolute',

    // bottom: 0,
  },
});
