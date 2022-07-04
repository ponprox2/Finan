import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, globalStyles} from '../../../../constants';

import RightArow from '../../../../assets/icon/RightArow.svg';
import ColumnCharLeft from '../../../../assets/icon/ColumnCharLeft.svg';
import Order from '../../../../assets/icon/Order.svg';
import Dola from '../../../../assets/icon/Dola.svg';

const arr = [
  {
    icon: <Order />,
    text: 'Đơn hàng',
    quality: 6,
  },
  {
    icon: <Order />,
    text: 'Đơn hàng',
    quality: 6,
  },
  {
    icon: <Dola />,
    text: 'Lợi nhuận',
    quality: 56,
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={[styles.containerBox, {paddingRight: index === 2 ? 8 : 0}]}>
      <View style={styles.BoxDetailOverView}>
        <View style={styles.BoxHeadertext}>
          {item.icon}
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <Text style={styles.textQuantity}>{item.quality}</Text>
      </View>
    </View>
  );
};
function OverView() {
  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Text style={styles.textOverView}>Tổng quan hôm nay</Text>
        <View style={styles.headerRight}>
          <ColumnCharLeft style={styles.columnCharLeft} />
          <Text style={styles.textReport}>Báo cáo lãi lỗ</Text>
          <RightArow style={styles.rightArow} fill={COLORS.primaryBlue} />
        </View>
      </View>
      <FlatList
        data={arr}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: COLORS.primaryWhite2,
    width: '100%',
    height: 120,
  },
  boxHeader: {
    ...globalStyles.rowSpacebeetween,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  headerRight: {
    ...globalStyles.rowAlignItemCenter,
  },
  textOverView: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    color: '#606F7D',
  },

  textReport: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    color: COLORS.primaryBlue,
    marginRight: 12,
    marginLeft: 6,
  },
  BoxDetailOverView: {
    marginTop: 12,
    width: 155,
    height: 64,
    backgroundColor: '#F1F3F5',
    borderRadius: 6,
    paddingLeft: 10,
    marginLeft: 8,
  },
  BoxHeadertext: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {},
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    color: '#637381',
    marginLeft: 10,
  },
  textQuantity: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22,
    color: '#30373D',
    marginLeft: 30,
  },
  containerBox: {
    flexDirection: 'row',
    // paddingRight: 16,
  },
});

export default OverView;
