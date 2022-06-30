import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import CreateOrder from '../../../../assets/icon/CreateOrder.svg';
import {COLORS, globalStyles} from '../../../../constants/index';

function FloatingButton() {
  const actions = [
    {
      text: 'Tạo đơn hàng',
      icon: <CreateOrder />,
      name: 'Tạo đơn hàng',
      position: 2,
      color: COLORS.primaryWhite2,
    },
  ];

  const open = () => {
    console.log('123123');
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.example}>Floating Action example</Text> */}
      <FloatingAction actions={actions} onPressItem={open} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 310},
  example: {},
});

export default FloatingButton;
