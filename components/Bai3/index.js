import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Modal,
    Alert,
} from 'react-native';

const Bai3 = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSignIn = () => {
        if (username === 'admin' && password === 'admin') {
            navigation.navigate('HomeNav');
        } else {
            setIsModalVisible(true);
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <View style={st.container}>
                    <View style={st.topText}>
                        <Text style={st.hi}>Hello DVT! 🚀</Text>
                        <Text>Hello again you have been missed! ✅</Text>
                    </View>

                    <View style={st.bodyPage}>
                        <Image
                            style={st.image}
                            source={{ uri: 'https://www.perkins.org/wp-content/uploads/2022/05/Presenter-scaled.jpg' }}
                        />

                        <View style={st.input}>
                            <Text style={st.emailText}>Username</Text>
                            <TextInput
                                placeholder='Enter your username'
                                style={st.emailInput}
                                onChangeText={(text) => setUsername(text)}
                            />
                            <Text style={st.emailText}>Password</Text>

                            <TextInput
                                secureTextEntry
                                placeholder='Enter your password'
                                style={st.emailInput}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </View>

                        <Pressable
                            style={{
                                width: '50%',
                                height: 50,
                                backgroundColor: 'red',
                                marginTop: 50,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={handleSignIn}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sign In</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>

            <Modal transparent visible={isModalVisible} animationType='slide'>
                <View style={st.modalContainer}>
                    <View style={st.modalContent}>
                        <Text style={st.modalText}>Sai username hoặc password!</Text>
                        <Pressable style={st.closeButton} onPress={closeModal}>
                            <Text style={{ color: 'white' }}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
};

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

    topText: {
        marginLeft: 20,
        marginTop: 40,
    },

    hi: {
        fontWeight: 'bold',
        fontSize: 25,
    },

    bodyPage: {
        alignItems: 'center',
        marginTop: 30,
    },

    image: {
        width: 250,
        height: 250,
        borderRadius: 50,
    },

    input: {
        marginTop: 50,
        width: '90%',
    },

    emailText: {
        fontWeight: 'bold',
        marginTop: 15,
    },

    emailInput: {
        width: '100%',
        borderColor: '#a6a6a6',
        borderWidth: 1,
        height: 50,
        borderRadius: 20,
        marginTop: 10,
        paddingLeft: 20,
    },

    // Modal styles
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },

    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },

    closeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default Bai3;
