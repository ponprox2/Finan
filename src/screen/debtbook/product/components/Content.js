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

function Content({
  name,
  setName,
  price,
  setPrice,
  costPrice,
  setCostPrice,
  description,
  setDescription,
  statusName,
  statusPrice,
}) {
  const [focus, setFocus] = useState('');

  const handleFocus = value => {
    setFocus(value);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.boxNameProduct]}>
        <Text
          style={[
            styles.text,
            {color: focus === 'name' ? COLORS.greenLighter : COLORS.blackLight},
          ]}>
          Tên sản phẩm <Text style={styles.textRed}>*</Text>
        </Text>
        <TextInput
          style={[
            styles.inputNameProduct,
            {borderColor: focus === 'name' ? COLORS.greenLighter : '#DDE1E5'},
          ]}
          placeholder="Ví dụ: Mì Hảo Hảo"
          placeholderTextColor="#8F9BA8"
          onChangeText={setName}
          value={name}
          onFocus={() => handleFocus('name')}
        />
        {statusName && (
          <Text style={styles.textWarning}>Thông tin bắt buộc</Text>
        )}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.boxPrice}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    focus === 'price' ? COLORS.greenLighter : COLORS.blackLight,
                },
              ]}>
              Giá bán <Text style={styles.textRed}>*</Text>
            </Text>
            <TextInput
              style={styles.inputNameProduct}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#8F9BA8"
              onChangeText={setPrice}
              value={price}
              onFocus={() => handleFocus('price')}
            />
            {statusPrice && (
              <Text style={styles.textWarning}>Thông tin bắt buộc</Text>
            )}
          </View>
          <View style={styles.boxPrice}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    focus === 'costPrice'
                      ? COLORS.greenLighter
                      : COLORS.blackLight,
                },
              ]}>
              Giá vốn
            </Text>
            <TextInput
              style={styles.inputNameProduct}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#8F9BA8"
              onChangeText={setCostPrice}
              value={costPrice}
              onFocus={() => handleFocus('costPrice')}
            />
          </View>
        </View>
        <View style={styles.boxDescription}>
          <Text
            style={[
              styles.text,
              {
                color:
                  focus === 'description'
                    ? COLORS.greenLighter
                    : COLORS.blackLight,
              },
            ]}>
            Mô tả
          </Text>
          <TextInput
            style={styles.inputNameProduct}
            placeholder="Ví dụ: Mì ly hảo hảo chua cay"
            placeholderTextColor="#8F9BA8"
            onChangeText={setDescription}
            value={description}
            onFocus={() => handleFocus('description')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 168,
    backgroundColor: COLORS.primaryWhite2,
  },
  boxNameProduct: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
  },
  inputNameProduct: {
    borderBottomWidth: 2,
    borderColor: '#DDE1E5',
  },
  boxPrice: {
    width: 164,
    marginTop: 16,
  },
  boxDescription: {
    marginTop: 12,
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
  textRed: {
    color: '#F23030',
  },
  textWarning: {
    color: '#F23030',
    fontSize: 12,
    lineHeight: 18,
  },
});
export default Content;
