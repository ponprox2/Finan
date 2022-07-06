import OTPInput from 'react-native-otp';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../../../../assets/image/svg/logo.svg';
import {COLORS, globalStyles} from '../../../../constants';
import formatPhoneNumber from '../../../../utilities/formatPhoneNumber';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../../../assets/string/i18n';

function OTPScreen({navigation}) {
  const {t} = i18n;
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [OTP, setOTP] = useState('');
  const [statusOTP, setStatusOTP] = useState(false);
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(0);
  const [countdown, setCountdown] = useState(30);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const phoneNumber = useSelector(state => state.personalInfo.phone);
  const listPhoneBanned = useSelector(
    state => state.personalInfo.listPhoneBanned,
  );

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('Phone', phoneNumber);
    } catch (error) {}
  };

  useEffect(() => {
    const checkBan = listPhoneBanned.some(x => x === phoneNumber);

    if (checkBan) {
      console.log(checkBan);
      setStatus(true);
    }
  }, []);
  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });
  useEffect(() => {
    if (count !== 5) {
      if (OTP.length === 4) {
        if (OTP === '1234' && status === false) {
          storeData();
          navigation.navigate('BottomTabNav');
        } else {
          setStatusOTP(true);
          setCount(pre => pre + 1);
          setOTP('');
        }
      }
    } else {
      setStatusOTP(false);
      setStatus(true);
      setOTP('');
      dispatch({type: 'UPDATE_PHONENUMBER_BAN', phoneBan: phoneNumber});
    }
  }, [OTP]);
  const decrementClock = () => {
    if (countdown === 0) {
      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };
  const handleReEnterPhone = () => {
    navigation.navigate('Login');
  };
  const handleChangeOTP = value => {
    setOTP(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.img, {width: windowWidth}]}>
        <Image
          style={{width: windowWidth}}
          source={require('../../../../assets/image/png/Frame.png')}
        />
      </View>

      <View
        style={[styles.content, {width: windowWidth, height: windowHeight}]}>
        <Text style={styles.title}>{t(`enterCode`)}</Text>
        <Text style={styles.text}>{t(`codeSendPhoneNumber`)}</Text>
        <View style={styles.boxPhone}>
          <Text style={styles.phone}>{phoneNumber} </Text>
          <Text style={styles.text}>{t(`custome`)}</Text>
        </View>
        <OTPInput
          otpLength={4}
          tintColor={COLORS.green}
          autoFocus={true}
          keyboardType="numeric"
          cellStyle={styles.otpInput}
          onChange={handleChangeOTP}
          value={OTP}
        />
        {statusOTP && (
          <Text style={styles.textWarning}>
            {t(`verificationCodeIsIncorrect`)}
          </Text>
        )}
        {status && <Text style={styles.textWarning}>{t(`bannedAccount`)}</Text>}
        <View style={[styles.sendOTP, {width: windowWidth}]}>
          <View style={styles.send}>
            {countdown === 0 ? (
              <TouchableOpacity onPress={() => setCountdown(30)}>
                <Text>{t(`reSendCode`)}</Text>
              </TouchableOpacity>
            ) : (
              <>
                <Text style={styles.resendOTP}>{t(`reSendCodeTime`)} </Text>
                <Text style={styles.second}>{countdown}s</Text>
              </>
            )}
          </View>
          <TouchableOpacity onPress={handleReEnterPhone}>
            <Text style={styles.readdPhone}>{t(`reEnterPhoneNumber`)}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.bottom, {bottom: windowHeight - 490}]}>
          <Logo />
          <Text>{t(`safe`)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    zIndex: 1,
  },
  content: {
    alignItems: 'center',
    backgroundColor: COLORS.trueWhite,
    zIndex: 2,
    position: 'absolute',
    marginTop: 210,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title: {
    // fontFamily: 'SF Pro Text',
    marginTop: 23,
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: COLORS.primaryDark,
  },
  boxPhone: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    marginTop: 5,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: COLORS.black,
  },
  phone: {
    marginTop: 4,
    fontWeight: '500',
    color: COLORS.primaryDark,
  },

  otpInput: {
    marginRight: 20,
    width: 50,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 4,
    textAlign: 'center',
  },
  bottom: {
    position: 'absolute',
    ...globalStyles.flexCenter,
  },
  send: {
    flexDirection: 'row',
  },
  second: {
    color: COLORS.blue,
  },
  sendOTP: {
    paddingLeft: '10%',
    paddingRight: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  resendOTP: {
    marginTop: 3,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: COLORS.lightGrey,
  },
  readdPhone: {
    marginTop: 3,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: COLORS.blue,
  },
  textWarning: {
    marginTop: 3,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: COLORS.primaryRed,
  },
});
export default OTPScreen;
