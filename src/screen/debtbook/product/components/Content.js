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

export default function Content() {
  return (
    <View style={styles.container}>
      <View style={styles.boxNameProduct}>
        <Text>Tên sản phẩm *</Text>
        <TextInput
          style={styles.inputNameProduct}
          placeholder="Ví dụ: Mì Hảo Hảo"
          placeholderTextColor="#8F9BA8"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.boxPrice}>
            <Text>Giá bán *</Text>
            <TextInput
              style={styles.inputNameProduct}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#8F9BA8"
            />
          </View>
          <View style={styles.boxPrice}>
            <Text>Giá vốn</Text>
            <TextInput
              style={styles.inputNameProduct}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#8F9BA8"
            />
          </View>
        </View>
        <View style={styles.boxDescription}>
          <Text>Mô tả</Text>
          <TextInput
            style={styles.inputNameProduct}
            placeholder="Ví dụ: Mì ly hảo hảo chua cay"
            placeholderTextColor="#8F9BA8"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 168,
    backgroundColor: COLORS.primaryWhite2,
  },
  boxNameProduct: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
  },
  inputNameProduct: {
    borderBottomWidth: 2,
    borderColor: '#DDE1E5',
  },
  boxPrice: {
    width: 164,
    marginTop: 16,
  },
  boxDescription: {
    marginTop: 12,
    marginBottom: 12,
  },
});
