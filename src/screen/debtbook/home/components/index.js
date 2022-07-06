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
import AsyncStorage from '@react-native-async-storage/async-storage';
import OverView from './overView';
import Content from './content';
import FloatingButton from './FloattingButton';

import RightArow from '../../../../assets/icon/RightArow.svg';
import QRCode from '../../../../assets/icon/QRCode.svg';
import Mess from '../../../../assets/icon/Mess.svg';
import Bell from '../../../../assets/icon/Bell.svg';
import i18n from '../../../../assets/string/i18n';

function Home({navigation}) {
  const {t} = i18n;
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Phone');
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {}
  };
  useEffect(() => {
    retrieveData();
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoShop}>
          <Image
            source={require('../../../../assets/image/png/Frame.png')}
            style={styles.avatar}
          />
          <View style={styles.boxTextHeader}>
            <Text style={styles.textName}>Bếp nhà - Thực phẩm</Text>
            <TouchableOpacity style={styles.boxDetail}>
              <Text style={styles.textDetail}>{t(`infoShop`)}</Text>
              <RightArow style={styles.rightArow} fill={'#DDE1E5'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxIconHeader}>
          <TouchableOpacity>
            <QRCode />
          </TouchableOpacity>
          <TouchableOpacity>
            <Mess />
          </TouchableOpacity>
          <TouchableOpacity>
            <Bell />
          </TouchableOpacity>
        </View>
      </View>
      <OverView />
      <Content navigation={navigation} />
      <FloatingButton navigation={navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.primaryGreen,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  infoShop: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingLeft: 16,
    // justifyContent: 'center',
  },
  boxTextHeader: {
    marginLeft: 8,
  },
  textName: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    color: COLORS.primaryWhite2,
  },
  boxDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDetail: {
    color: '#DDE1E5',
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  rightArow: {
    marginTop: 3,
  },
  boxIconHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: '30%',
    paddingRight: 16,
  },
});
export default Home;
