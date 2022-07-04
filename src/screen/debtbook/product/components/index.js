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
} from 'react-native';
import {COLORS, globalStyles} from '../../../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import Content from './Content';
import Bottom from './Bottom';
import AddImage from './AddImage';
import DialogAdd from './Dialog';
import ChevronLeft from '../../../../assets/icon/ChevronLeft.svg';
import Delete from '../../../../assets/icon/Delete.svg';
import ImageFill from '../../../../assets/icon/ImageFill.svg';
import CameraFill from '../../../../assets/icon/CameraFill.svg';
import {useDispatch, useSelector} from 'react-redux';

export default function AddNewProduct({navigation}) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.personalInfo.items);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [description, setDescription] = useState('');
  const [statusName, setStatusName] = useState(false);
  const [statusPrice, setStatusPrice] = useState(false);
  const [image, setImage] = useState([]);

  const data = {
    name: name,
    price: price,
    costPrice: costPrice,
    description: description,
    image: image,
  };

  const updateProduct = () => {
    if (name.trim() !== '' && price !== '') {
      dispatch({
        type: 'UPDATE_PRODUCT',
        data: {...data, create_At: new Date()},
      });
      setName('');
      setPrice('');
      setCostPrice('');
      setDescription('');
    } else {
      if (name.trim() === '' && price === '') {
        setStatusName(true);
        setStatusPrice(true);
      } else if (name.trim() === '') {
        setStatusName(true);
      } else {
        setStatusPrice(true);
      }
    }
  };
  const updateProductAndBack = () => {
    if (name.trim() !== '' && price !== '') {
      dispatch({
        type: 'UPDATE_PRODUCT',
        data: {...data, create_At: new Date()},
      });
      navigation.goBack();
    } else {
      if (name.trim() === '' && price === '') {
        setStatusName(true);
        setStatusPrice(true);
      } else if (name.trim() === '') {
        setStatusName(true);
      } else {
        setStatusPrice(true);
      }
    }
  };

  useEffect(() => {
    const backAction = () => {
      setOpen(true);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  }, []);
  const onOpenDialog = () => {
    setOpen(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onOpenDialog}>
          <ChevronLeft />
        </TouchableOpacity>

        <Text style={styles.textCreateProduct}>Tạo sản phẩm</Text>
      </View>
      <AddImage image={image} setImage={setImage} />
      <Content
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        costPrice={costPrice}
        setCostPrice={setCostPrice}
        description={description}
        setDescription={setDescription}
        statusPrice={statusPrice}
        statusName={statusName}
      />
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.buttonAdd} onPress={updateProduct}>
          <Text style={styles.textAdd}>Tạo thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={updateProductAndBack}>
          <Text style={styles.textCreate}>Hoàn tất</Text>
        </TouchableOpacity>
      </View>
      <DialogAdd open={open} setOpen={setOpen} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    height: 56,
    backgroundColor: COLORS.primaryWhite2,
    paddingTop: 20,
    paddingLeft: 24,
  },
  textCreateProduct: {
    textAlign: 'center',
    width: '80%',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: '#161C24',
  },
  boxAddImage: {
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addImage: {
    ...globalStyles.rowCenter,
    height: 38,
    backgroundColor: COLORS.primaryWhite2,
    marginTop: 8,
    width: 120,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primaryBlue,
  },
  shootImage: {
    ...globalStyles.rowCenter,
    height: 38,
    backgroundColor: COLORS.primaryWhite2,
    marginTop: 8,
    width: 115,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primaryBlue,
    marginBottom: 8,
  },
  textAddImage: {
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.primaryBlue,
    marginLeft: 6,
  },
  bottom: {
    backgroundColor: COLORS.primaryWhite2,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  buttonAdd: {
    width: 167,
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.greenLighter,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAdd: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.greenLighter,
  },
  buttonCreate: {
    width: 167,
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.greenLighter,
  },
  textCreate: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.primaryWhite2,
  },
  textIndexImage: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderColor: COLORS.primaryGreen,
    borderWidth: 1,
    backgroundColor: COLORS.primaryWhite2,
    textAlign: 'center',
    color: COLORS.primaryGreen,
  },
  boxButtonAcctionImage: {
    marginRight: 14,
  },
  boxImage: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 82,
    marginTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
  },
  superBoxImage: {
    marginRight: 8,
  },
});
