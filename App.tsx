import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
var link_api = 'https://65bb0aa5b4d53c066553e2b7.mockapi.io/BaiViet'

const App = () => {
  // khai báo state để lưu dữ liệu
  const [dsBaiViet, setdsBaiViet] = useState([])

  const lay_ds_bai_viet = async () => {
    try {
      let res = await fetch(link_api);
      let arr = await res.json();
      console.log(arr);
      setdsBaiViet(arr); // đưa dữ liệu vào state

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    lay_ds_bai_viet();
  }, []);

  const ItemFlatList = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#ccc', margin: 10 }}>
        <Text>Title: {item.id}</Text>
        <Text>Title: {item.title}</Text>
        <Text>Title: {item.content}</Text>
        <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Text>Danh sách bài viết</Text>
      <SafeAreaView>
      <FlatList
        data={dsBaiViet}
        renderItem={({ item }) => {

          return <ItemFlatList item={item} />
        }}
        keyExtractor={(item) => item.id} />
        </SafeAreaView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})