import React, { useState } from 'react'
import Constant from 'expo-constants'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setPoliceNumber, setPassword, postRegister, dummyLogin, postLogin } from '../store/actions'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function RegisterPage() {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const policeNumber = useSelector(state => state.customer.policeNumber)
    const password = useSelector(state => state.customer.password)
    const customer = useSelector(state => state.customer)
    const register = () => {
        dispatch(postRegister(customer))
            .then(_ => navigation.navigate('Home'))
            .catch(console.log)
    }
    // const login = () => {
    //     dispatch(postLogin(customer))
    //         .then(_ => navigation.navigate('Home'))
    //         .catch(console.log)
    // }
    const login = () => navigation.navigate('Login')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.headerText, { color: '#1a1a1a' }]}>Welcome,</Text>
                <Text style={[styles.headerText, , { color: '#b9bfcb' }]}>sign up to join us</Text>
            </View>

            <View style={styles.form}>
                    <TextInput style={styles.inputBox}
                        autoCapitalize='characters'
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
            </View>

            <View style={styles.registerGroup}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#e9eaef' }}>Sign Up</Text>
                <TouchableOpacity
                    style={styles.registerbtn}
                    onPress={register}
                >
                    <FontAwesomeIcon
                        style={{ color: '#30384d' }}
                        icon={faArrowRight}
                        />
                </TouchableOpacity>
            </View>

            <View style={styles.login}>
                <TouchableOpacity onPress={login}>
                    <Text style={styles.loginbtn}>Sign in</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: Constant.statusBarHeight,
        padding: 35,
        backgroundColor: '#3d4558',
        justifyContent: 'space-between'
    },
    header: {
        width: '100%',
        height: '45%',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 45,
        fontWeight: 'bold'
    },
    form: {
        width: '100%',
        height: '25%'
    },
    inputBox: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e9eaef',
        color: '#ffffff'
    },
    registerGroup: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    registerbtn: {
        width: 75,
        height: 75,
        backgroundColor: '#e9eaef',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75
    },
    login: {
        width: '100%',
        height: 'auto'
    },
    loginbtn: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#e9eaef',
        textDecorationLine: 'underline'
    }
});