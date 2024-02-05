import { Alert, Image, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './components/Bai1';
import Bai2 from './components/Bai2';
import Bai3 from './components/Bai3';
import AddSP from './components/addSP/addSP';


const DrawerDEMO = createDrawerNavigator();
const Drawer = createDrawerNavigator();
const StackDemo = createNativeStackNavigator();

const MyDrawer = () => {
  return (
    <DrawerDEMO.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />} >
      <DrawerDEMO.Screen name="Home" component={Index} />
      <DrawerDEMO.Screen name="Giới Thiệu" component={Bai2} />
    </DrawerDEMO.Navigator>
  );
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <MyHeader />
      <DrawerItemList {...props} />
      {/* <DrawerItem label="Phần tử thêm" onPress={() => {
        Alert.alert('Bạn click vào phần tử thêm')
        props.navigation.closeDrawer();
      }} /> */}
    </DrawerContentScrollView>
  );
}

const MyHeader = () => {
  return (
    <View style={{ height: 180, width: '100%', backgroundColor: '#FBFADA', alignItems: 'center', paddingTop: 20 }}>
      <Image style={st.anhHeader} source={{ uri: 'https://i.pinimg.com/564x/a7/ac/f3/a7acf3b7eda70db233c6418cc37fc7fe.jpg' }} />
      <Text style={{ color: 'black', padding: 10, fontSize: 21 }}>Họ tên Sv: <Text style={{ color: 'red', fontWeight: 'bold' }}>Đỗ Văn Tuấn</Text></Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StackDemo.Navigator initialRouteName="Login" >
      <StackDemo.Screen name="Login" component={Bai3} options={{ headerShown: false }}/>
      <StackDemo.Screen name="HomeNav" component={MyDrawer} options={{ headerShown: false }} />
      <StackDemo.Screen name='Thêm Danh Bạ' component={AddSP} options={ {title:"Thông tin ứng dụng"} } />
    </StackDemo.Navigator>
    </NavigationContainer>
  )
}

const st = StyleSheet.create({
  anhHeader: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default App;