import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import CreateOrder from '../../../../assets/icon/CreateOrder.svg';
import {COLORS, globalStyles} from '../../../../constants/index';

function FloatingButton({navigation}) {
  const actions = [
    {
      text: 'Tạo sản phẩm',
      icon: <CreateOrder />,
      name: 'Tạo sản phẩm',
      position: 2,
      color: COLORS.primaryWhite2,
    },
  ];
  const openCreateProduct = () => {
    navigation.navigate('AddNewProduct');
  };
  const open = () => {
    console.log('123123');
  };
  return (
    <View style={styles.container}>
      <FloatingAction actions={actions} onPressItem={openCreateProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 310},
  example: {},
});

export default FloatingButton;
