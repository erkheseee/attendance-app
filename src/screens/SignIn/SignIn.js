import React, {useState} from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import Logo from '../../../assets/images/logo.png';
import MyInputField from '../../components/Input/Input';
import MyButton from '../../components/Button/Button';
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const handleClickSignIn = () => {
        console.warn("Sign in");
        //validate user

        navigation.navigate('Home');
    };
    const handleClickForgotPassword = () => {
        console.warn("Forgot password");
        navigation.navigate('ForgotPassword');
    }

    const navigation = useNavigation();
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
                        placeholder="Хэрэглэгчийн ID" 
                        value={userID} 
                        setValue={setUserID}/>

                    <MyInputField 
                        placeholder="Нууц үг" 
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