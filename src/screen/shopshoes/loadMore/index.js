import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {fakeServer} from './fakeData';
import axios from 'axios';

let stopFetchMore = true;

export default function LoadMore() {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const fetchUser = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchData = async arr => {
    const response = await fakeServer(8, arr);
    setPosts([...response]);
  };

  useEffect(() => {
    if (data.length > 0) {
      fetchData(data);
    }
  }, [data]);

  const handleOnEndReached = async () => {
    setLoadingMore(true);
    if (!stopFetchMore) {
      const response = await fakeServer(8, data);
      if (response === 'done') return setLoadingMore(false);
      setPosts([...posts, ...response]);
      stopFetchMore = true;
    }
    setLoadingMore(false);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.proudct, {marginRight: index % 2 === 0 ? 8 : 0}]}>
        <View style={styles.boxDetailProduct}>
          <Text style={styles.nameProduct} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.price}>{item.body}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={1}
        onScrollBeginDrag={() => {
          stopFetchMore = false;
        }}
        // showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listProudct: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    margin: 8,
    marginLeft: 8,
    marginBottom: 60,
  },
  proudct: {
    height: 201,
    // width: 167,
    // backgroundColor: COLORS.whiteLight,
    borderRadius: 6,
    borderWidth: 1,
    // borderColor: COLORS.greyBoder,
    marginBottom: 8,
  },
});
