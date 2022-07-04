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
  BackHandler,
  ScrollView,
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuTrigger,
  MenuOptions,
} from 'react-native-popup-menu';
import {COLORS, globalStyles} from '../../../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import ChevronLeft from '../../../../assets/icon/ChevronLeft.svg';
import SearchIcon from '../../../../assets/icon/SearchIcon.svg';
import UpcScan from '../../../../assets/icon/UpcScan.svg';
import MoreVertical from '../../../../assets/icon/MoreVertical.svg';
import SortDown from '../../../../assets/icon/SortDown.svg';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {useDispatch, useSelector} from 'react-redux';

var radio_props = [
  {label: 'Mới nhất', value: 0},
  {label: 'Giá cao đến thấp', value: 1},
  {label: 'Giá thấp đến cao', value: 2},
  {label: 'Từ A -> Z', value: 3},
];
export default function HeaderProduct({navigation, setSelection, isSelected}) {
  const [typeSelect, setTypeSelect] = useState('');
  const items = useSelector(state => state.personalInfo.items);
  // const statusSort = useSelector(state => state.personalInfo.statusSort);
  const dispatch = useDispatch();
  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch({type: 'SORT_PRODUCT', statusSort: isSelected, items: items});
  }, [isSelected, items.length]);

  const onSearch = () => {
    setTypeSelect('search');
  };
  const onScan = () => {
    setTypeSelect('scan');
  };
  const onSort = () => {
    setTypeSelect('sort');
  };
  const onMoreVertical = () => {
    setTypeSelect('moreVertical');
  };
  return (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        <TouchableOpacity onPress={handleBack}>
          <ChevronLeft />
        </TouchableOpacity>
        <Text style={styles.textProduct}>Sản phẩm</Text>
      </View>
      <View style={styles.rightHeader}>
        <TouchableOpacity style={styles.iconHeader} onPress={onSearch}>
          <SearchIcon fill={typeSelect === 'search' ? '#00A64C' : '#30373D'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconHeader} onPress={onScan}>
          <UpcScan fill={typeSelect === 'scan' ? '#00A64C' : '#30373D'} />
        </TouchableOpacity>

        <Menu>
          <MenuTrigger style={[styles.button]} onPress={onSort}>
            <SortDown fill={typeSelect === 'sort' ? '#00A64C' : '#30373D'} />
          </MenuTrigger>
          <MenuOptions style={styles.menu}>
            <ScrollView
              contentContainerStyle={{
                maxHeight: 200,
              }}
              showsVerticalScrollIndicator={false}>
              <RadioForm
                style={styles.radio}
                radio_props={radio_props}
                buttonColor={'#DDE1E5'}
                initial={0}
                onPress={value => {
                  setSelection(value);
                }}
              />
            </ScrollView>
          </MenuOptions>
        </Menu>

        <TouchableOpacity style={styles.iconOther} onPress={onMoreVertical}>
          <MoreVertical
            fill={typeSelect === 'moreVertical' ? '#00A64C' : '#30373D'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    height: 56,
    backgroundColor: COLORS.primaryWhite2,
    paddingTop: 20,
    paddingLeft: 24,
    justifyContent: 'space-between',
  },
  textProduct: {
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: '#161C24',
    marginLeft: 12,
  },
  leftHeader: {
    flexDirection: 'row',
  },
  rightHeader: {
    flexDirection: 'row',
    marginRight: 20,
  },
  iconHeader: {
    marginRight: 20,
  },
  iconOther: {
    marginLeft: 8,
  },
  checkbox: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    marginTop: 41,
    backgroundColor: COLORS.primaryWhite2,
    width: 226,
    height: 192,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  radio: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 18,
  },
});
