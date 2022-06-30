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
import CreateOrder from '../../../../assets/icon/CreateOrder.svg';
import OrderIcon from '../../../../assets/icon/OrderIcon.svg';
import ReportIcon from '../../../../assets/icon/ReportIcon.svg';
import ProductIcon from '../../../../assets/icon/ProductIcon.svg';
import VoucherIcon from '../../../../assets/icon/VoucherIcon.svg';
import GiftIcon from '../../../../assets/icon/GiftIcon.svg';
import CustomerIcon from '../../../../assets/icon/CustomerIcon.svg';
import Orther from '../../../../assets/icon/orther.svg';

const arrData = [
  {
    icon: <CreateOrder />,
    text: 'Tạo đơn',
  },
  {
    icon: <OrderIcon />,
    text: 'Đơn hàng',
  },
  {
    icon: <ReportIcon />,
    text: 'Báo cáo',
  },
  {
    icon: <ProductIcon />,
    text: 'Sản phẩm',
  },
  {
    icon: <VoucherIcon />,
    text: 'Khuyến mãi',
  },
  {
    icon: <GiftIcon />,
    text: 'Tạo đơn',
  },
  {
    icon: <CustomerIcon />,
    text: 'Quà tặng',
  },
  {
    icon: <Orther />,
    text: 'Khác',
  },
];

export default function Content() {
  return (
    <View style={styles.container}>
      {arrData.map((value, index) => (
        <View style={styles.boxContent} key={index}>
          {value.icon}
          <Text style={styles.text}>{value.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxContent: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.primaryWhite2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 8,
    marginTop: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    marginTop: 3,
  },
});
