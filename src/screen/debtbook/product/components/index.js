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
import Content from './Content';
import Bottom from './Bottom';
import ChevronLeft from '../../../../assets/icon/ChevronLeft.svg';
import ImageFill from '../../../../assets/icon/ImageFill.svg';
import CameraFill from '../../../../assets/icon/CameraFill.svg';

export default function AddNewProduct() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ChevronLeft />
        <Text style={styles.textCreateProduct}>Tạo sản phẩm</Text>
      </View>
      <View style={styles.boxAddImage}>
        <View>
          <TouchableOpacity style={styles.addImage}>
            <ImageFill />
            <Text style={styles.textAddImage}>Thêm ảnh</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.shootImage}>
            <ImageFill />
            <Text style={styles.textAddImage}>Chụp ảnh</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Content />
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.textAdd}>Tạo thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCreate}>
          <Text style={styles.textCreate}>Hoàn tất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'relative',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    height: 56,
    backgroundColor: COLORS.primaryWhite2,
    paddingTop: 20,
    paddingLeft: 24,
  },
  textCreateProduct: {
    textAlign: 'center',
    width: '80%',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: '#161C24',
  },
  boxAddImage: {
    marginLeft: 16,
  },
  addImage: {
    ...globalStyles.rowCenter,
    height: 38,
    backgroundColor: COLORS.primaryWhite2,
    marginTop: 8,
    width: 120,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primaryBlue,
  },
  shootImage: {
    ...globalStyles.rowCenter,
    height: 38,
    backgroundColor: COLORS.primaryWhite2,
    marginTop: 8,
    width: 115,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primaryBlue,
    marginBottom: 8,
  },
  textAddImage: {
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.primaryBlue,
    marginLeft: 6,
  },
  bottom: {
    backgroundColor: COLORS.primaryWhite2,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  buttonAdd: {
    width: 167,
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.greenLighter,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAdd: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.greenLighter,
  },
  buttonCreate: {
    width: 167,
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.greenLighter,
  },
  textCreate: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.primaryWhite2,
  },
});
