import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Index = ({navigation}) => {

    const Data = [
        {
            name: 'Đỗ Văn Tuấn',
            email: 'tuandvph31763@gmail.com',
            position: 'Call',
            photo: 'https://inkythuatso.com/uploads/images/2022/03/anh-spider-man-24-17-13-47-44.jpg'
        },

        {
            name: "Nguyễn Công Thưởng",
            email: "thuongcuti@gmail.com",
            position: "Marketing Manager",
            photo: "https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-hot-girl-l%C3%A0m-avt.jpg"
        },

        {
            name: "Nguyễn Vinh Tài",
            email: "vinhtai@gmail.com",
            position: "Software Engineer",
            photo: "https://th.bing.com/th/id/OIP.p7pZXmEqAdfOIpJQ9ONpxQHaLJ?rs=1&pid=ImgDetMain"
        },

        {
            name: "Vân Anh Nguyễn",
            email: "vananh@gmail.com",
            position: "Graphic Designer",
            photo: "https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-hot-girl-l%C3%A0m-avt.jpg"
        },

        {
            name: "Lê Hoàng Minh",
            email: "minhlhs@gmail.com",
            position: "Financial Analyst",
            photo: "https://i.pinimg.com/236x/0d/4d/9f/0d4d9fd5c4b55455db3c6ad8057552bd.jpg"
        },

        {
            name: "Hoàng Thị Thu Trang",
            email: "tranghtt@gmail.com",
            position: "Customer Support Specialist",
            photo: "https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-hot-girl-l%C3%A0m-avt.jpg"
        },

        {
            name: "Nguyễn Văn Hùng",
            email: "hungnv@gmail.com",
            position: "Sales Representative",
            photo: "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },

        {
            name: "Trần Thị Ngọc Mai",
            email: "maintt@gmail.com",
            position: "Human Resources Manager",
            photo: "https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-hot-girl-l%C3%A0m-avt.jpg"
        },

        {
            name: "Lê Văn Bình",
            email: "binhlv@gmail.com",
            position: "Project Manager",
            photo: "https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-hot-girl-l%C3%A0m-avt.jpg"
        },

        {
            name: "Vũ Thị Thu Thảo",
            email: "thaovtt@gmail.com",
            position: "Data Analyst",
            photo: "https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-hot-girl-l%C3%A0m-avt.jpg"
        }

    ]

    const Item = ({ contact }) => (
        <View style={styles.listItem}>
          <Image source={{ uri: contact.photo }} style={styles.avatar} />
          <View style={styles.bodyItem}>
            <Text style={styles.nameText}>{contact.name}</Text>
            <Text>{contact.position}</Text>
          </View>
          <TouchableOpacity style={styles.btnCall}>
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>
        </View>
      );
    
      return (
        <View style={styles.container}>
          <SafeAreaView>
            <FlatList
              data={Data}
              renderItem={({ item }) => <Item contact={item} />}
              keyExtractor={item => item.email}
            />
            {/* Circular "Add" button */}
            
          </SafeAreaView>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Thêm Danh Bạ')}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
      },
    
      listItem: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
        marginHorizontal: 15,
        backgroundColor: '#ffffff',
        height: 100,
      },
    
      avatar: {
        width: 80,
        height: 80,
        borderRadius: 100,
        alignSelf: 'center',
        marginLeft: 15,
      },
    
      bodyItem: {
        marginTop: 15,
      },
    
      nameText: {
        fontWeight: 'bold',
        fontSize: 16,
      },
    
      btnCall: {
        marginTop: 35,
        marginRight: 15,
      },
    
      callText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
      },
    
      addButton: {
        backgroundColor: 'green',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        elevation: 5,
      },
    
      addButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
      },
    });
    
    export default Index;