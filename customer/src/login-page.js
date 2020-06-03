import React, { useState } from 'react'
import Constant from 'expo-constants'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setPoliceNumber, setPassword, postRegister, dummyLogin, postLogin } from '../store/actions'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function LoginPage({ navigation: { goBack } }) {
    console.disableYellowBox = true

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
            <View style={styles.header}>
                <Text style={[styles.headerText, { color: '#30384d' }]}>Let's go in</Text>
                <Text style={[styles.headerText, , { color: '#636a7c' }]}>sign in to continue</Text>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.inputBox}
                    autoCapitalize='characters'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Police Number"
                    placeholderTextColor="#888"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onChangeText={text => dispatch(setPoliceNumber(text))}
                // onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#888"
                    onChangeText={text => dispatch(setPassword(text))}
                // ref={(input) => this.password = input}
                />
            </View>

            <View style={styles.loginGroup}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#30384d' }}>Sign In</Text>
                <TouchableOpacity
                    style={styles.loginbtn}
                    onPress={login}
                >
                    <FontAwesomeIcon
                        style={{ color: '#e9eaef' }}
                        icon={faArrowRight}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.register}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerbtn}>Register</Text>
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
        backgroundColor: '#e3e4e8',
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
        borderBottomColor: '#636a7c',
        color: '#2a2a2a'
    },
    loginGroup: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loginbtn: {
        width: 75,
        height: 75,
        backgroundColor: '#30384d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75
    },
    register: {
        width: '100%',
        height: 'auto'
    },
    registerbtn: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#30384d',
        textDecorationLine: 'underline'
    }
});