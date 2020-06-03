import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setPoliceNumber, setPassword, postRegister, dummyLogin, postLogin } from '../store/actions'
import { useNavigation } from '@react-navigation/native'

export default function LoginPage({ navigation: { goBack } }) {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const policeNumber = useSelector(state => state.customer.policeNumber)
    const password = useSelector(state => state.customer.password)
    const customer = useSelector(state => state.customer)
    const login = () => {
        dispatch(postLogin(customer))
            .then(_ => navigation.navigate('Home'))
            .catch(console.log)
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Police Number"
                placeholderTextColor="#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                onChangeText={text => dispatch(setPoliceNumber(text))}
            // onSubmitEditing={() => this.password.focus()}
            />
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                onChangeText={text => dispatch(setPassword(text))}
            // ref={(input) => this.password = input}
            />
            <TouchableOpacity style={styles.button} onPress={() => goBack()}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3d4558',
    },



    inputBox: {

        width: 300,

        backgroundColor: 'rgba(255, 255,255,0.2)',

        borderRadius: 25,

        paddingHorizontal: 16,

        fontSize: 16,

        color: '#ffffff',

        marginVertical: 10

    },

    button: {

        width: 300,

        backgroundColor: '#1c313a',

        borderRadius: 25,

        marginVertical: 10,

        paddingVertical: 13

    },

    buttonText: {

        fontSize: 16,

        fontWeight: '500',

        color: '#ffffff',

        textAlign: 'center'

    }



});