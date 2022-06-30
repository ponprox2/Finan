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

function OTPScreen({navigation}) {
  const [phone, setPhone] = useState('');
  const [countdown, setCountdown] = useState(30);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

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
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.img, {width: windowWidth}]}>
        <Image
          style={{width: windowWidth}}
          source={require('../../../../assets/image/png/Frame.png')}
        />
      </View>
      <TextInput></TextInput>
      <View
        style={[styles.content, {width: windowWidth, height: windowHeight}]}>
        <Text style={styles.title}>Nhập mã xác thực</Text>
        <Text style={styles.text}>
          Mã xác thực đã được gửi đến số điện thoại
        </Text>
        <View style={styles.boxPhone}>
          <Text style={styles.phone}>0913123123 </Text>
          <Text style={styles.text}>của quý khách</Text>
        </View>
        <OTPInput
          otpLength={4}
          tintColor={COLORS.green}
          autoFocus={true}
          keyboardType="numeric"
          cellStyle={styles.otpInput}
        />
        <Text style={styles.textWarning}>
          Mã xác thực không đúng. Vui lòng thử lại!
        </Text>
        <View style={[styles.sendOTP, {width: windowWidth}]}>
          <View style={styles.send}>
            {countdown === 0 ? (
              <TouchableOpacity onPress={() => setCountdown(30)}>
                <Text>Gửi lại mã xác thực</Text>
              </TouchableOpacity>
            ) : (
              <>
                <Text style={styles.resendOTP}>Gữi lại mã sau </Text>
                <Text style={styles.second}>{countdown}s</Text>
              </>
            )}
          </View>
          <TouchableOpacity onPress={handleReEnterPhone}>
            <Text style={styles.readdPhone}>Nhập lại số điện thoại</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.bottom, {bottom: windowHeight - 490}]}>
          <Logo />
          <Text>An toàn & bảo mật 100%</Text>
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