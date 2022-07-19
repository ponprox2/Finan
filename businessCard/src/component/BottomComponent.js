import React, {useEffect, useRef, useState, forwardRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import Share from 'react-native-share';
import {COLORS, globalStyles} from '../constants/index';
import CameraRoll from '@react-native-community/cameraroll';
import DownLoad from '../assets/icon/DownLoad.svg';
import ShareAndroid from '../assets/icon/ShareAndroid.svg';

function BottomComponent(props, ref) {
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    try {
      const hasPermission = await PermissionsAndroid.check(permission);
      if (hasPermission) {
        return true;
      }
      const status = await PermissionsAndroid.request(permission);
      return status === 'granted';
    } catch (error) {
      console.log('console error', error);
    }
  }

  async function savePicture() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    ref?.current?.capture().then(uri => {
      CameraRoll.save(uri, 'photo').then(() => {
        ToastAndroid.showWithGravityAndOffset(
          'Lưu danh thiếp thành công',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          300,
        );
      });
    });
  }
  async function sharePicture() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    ref.current.capture().then(uri => {
      Share.open({message: 'xin chao'}).catch(err => console.log(err));
    });
  }

  return (
    <View style={styles.bottom}>
      <TouchableOpacity style={styles.buttonAdd} onPress={savePicture}>
        <DownLoad />
        <Text style={styles.textAdd}>Tải về máy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCreate} onPress={sharePicture}>
        <ShareAndroid />
        <Text style={styles.textCreate}>Chia sẻ</Text>
      </TouchableOpacity>
    </View>
  );
}

export default forwardRef(BottomComponent);

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: COLORS.whiteLight,
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
    flexDirection: 'row',
  },
  textAdd: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.greenLighter,
    marginRight: 16,
    marginLeft: 4,
  },
  buttonCreate: {
    flexDirection: 'row',
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
    color: COLORS.whiteLight,
    marginRight: 16,
    marginLeft: 4,
  },
});
