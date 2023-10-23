import React, {useState} from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import Logo from '../../assets/images/logo.png';
import MyInputField from '../components/Input/Input';
import MyButton from '../components/Button/Button';

const SignIn = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const handleClickSignIn = () => {
        console.warn("Sign in");
    };
    const handleClickForgotPassword = () => {
        console.warn("Forgot password");
    }

    const handleClickSignUp = () => {
        console.warn("Sign up");
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={styles.login}>
                    <Image 
                        source={Logo} 
                        style={styles.logo} 
                        resizeMode="contain"/>

                    <Text>Sign-In Here</Text>

                    <MyInputField 
                        placeholder="User ID" 
                        value={userID} 
                        setValue={setUserID}/>

                    <MyInputField 
                        placeholder="Password" 
                        value={password} 
                        setValue={setPassword} 
                        secureTextEntry={true}/>

                    <MyButton 
                        onPress={handleClickSignIn} 
                        text="Нэвтрэх"/>

                    <MyButton 
                        onPress={handleClickForgotPassword} 
                        text="Нууц үгээ мартсан уу?"
                        type="TERTIARY"/>
                        
                    <MyButton 
                        onPress={handleClickSignUp} 
                        text="Бүртгэл байхгүй юу?"
                        type="TERTIARY"/>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    login: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },

    logo: {
        width: 300,
        height: 300,
        alignContent: "center",
    },
})

export default SignIn;