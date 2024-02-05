import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Bai2 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://i.pinimg.com/564x/a7/ac/f3/a7acf3b7eda70db233c6418cc37fc7fe.jpg' }}
      />
      <Text style={styles.name}>Đỗ Văn Tuấn</Text>
      <Text style={styles.role}>Software Developer</Text>
      <Text style={styles.about}>
      Xin chào! Tôi là một nhà phát triển phần mềm đam mê với sự quan tâm mạnh mẽ đến phát triển ứng dụng di động.
        Hiện đang khám phá React Native để xây dựng các ứng dụng đa nền tảng tuyệt vời.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  role: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 15,
  },
  about: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
  },
});

export default Bai2;
