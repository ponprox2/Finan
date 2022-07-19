/* eslint-disable curly */
import {Dimensions, Platform, TextStyle} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';

const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;
const {width, height} = Dimensions.get('window');

export function responsiveWidth(value = 0) {
  return (width * value) / DESIGN_WIDTH;
}

export function responsiveHeight(value = 0) {
  return (height * value) / DESIGN_HEIGHT;
}

export function responsiveFont(value = 0) {
  return (width * value) / DESIGN_WIDTH;
}
