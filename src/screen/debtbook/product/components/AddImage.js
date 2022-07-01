import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {COLORS, globalStyles} from '../../../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import Content from './Content';
import Bottom from './Bottom';
import Delete from '../../../../assets/icon/Delete.svg';
import ChevronLeft from '../../../../assets/icon/ChevronLeft.svg';
import ImageFill from '../../../../assets/icon/ImageFill.svg';
import CameraFill from '../../../../assets/icon/CameraFill.svg';
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';

export default function AddImage({image, setImage}) {
  const options = {
    title: 'Pick an image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const openPicker = () => {
    // console.log(ImagePicker.launchImageLibrary);
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        const arrImage = [...image, source];
        console.log(arrImage);
        setImage(arrImage);
      }
    });
  };
  const openCamera = () => {
    console.log(ImagePicker.launchCamera);
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        const arrImage = [...image, source];
        console.log(arrImage);
        console.log(arrImage[0]);
        setImage(arrImage);
      }
    });
  };

  const removeItem = index => {
    const a1 = image.slice(0, index);
    const a2 = image.slice(index + 1, image.length);
    const new_arr = a1.concat(a2);
    setImage(new_arr);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.superBoxImage}>
        <Image source={item} style={styles.image} />
        <View style={styles.boxImage}>
          <Text style={styles.textIndexImage}>{index + 1}</Text>
          <TouchableOpacity onPress={() => removeItem(index)}>
            <Delete />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.boxAddImage}>
      <View style={styles.boxButtonAcctionImage}>
        <View>
          {image.length !== 0 ? (
            <TouchableOpacity
              style={styles.addImageNoText}
              onPress={openPicker}>
              <ImageFill />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.addImage} onPress={openPicker}>
              <ImageFill />
              <Text style={styles.textAddImage}>Thêm ảnh</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.boxShootImage}>
          {image.length !== 0 ? (
            <TouchableOpacity
              style={styles.addImageNoText}
              onPress={openPicker}>
              <CameraFill />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.shootImage} onPress={openCamera}>
              <CameraFill />
              <Text style={styles.textAddImage}>Chụp ảnh</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {image.length !== 0 && (
        <FlatList
          data={image}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  boxAddImage: {
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  textAddImage: {
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.primaryBlue,
    marginLeft: 6,
  },

  textIndexImage: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderColor: COLORS.primaryGreen,
    borderWidth: 1,
    backgroundColor: COLORS.primaryWhite2,
    textAlign: 'center',
    color: COLORS.primaryGreen,
  },
  boxButtonAcctionImage: {
    marginRight: 14,
  },
  boxImage: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 82,
    marginTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
  },
  superBoxImage: {
    marginRight: 8,
  },
  addImageNoText: {
    ...globalStyles.rowCenter,
    height: 38,
    backgroundColor: COLORS.primaryWhite2,
    marginTop: 8,
    width: 44,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primaryBlue,
  },
  boxShootImage: {
    marginBottom: 10,
  },
  image: {
    width: 82,
    height: 82,
    borderRadius: 6,
  },
});
