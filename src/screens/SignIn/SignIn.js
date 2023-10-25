import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground} from "react-native";
import Logo from '../../../assets/images/logo.png';
import MyInputField from '../../components/Input/Input';
import MyButton from '../../components/Button/Button';
import { useNavigation } from "@react-navigation/native";

const SignIn = (props) => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const handleClickSignIn = () => {
        if(userID == props.userID && password == props.userPassword){
            navigation.navigate('Home', {user: props});
        }   
        else{
            console.warn("ID or password is incorrect!");
        }
    };
    const handleClickForgotPassword = () => {
        console.warn("Forgot password");
        navigation.navigate('ForgotPassword');
    }

    const navigation = useNavigation();
    return(
        // <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.logintop}>
                    <ImageBackground 
                        source={Logo}
                        style={styles.logo} 
                        resizeMode="contain">

                    <Text style={styles.screenText}>Энд нэвтрэнэ үү!</Text>

                    </ImageBackground>
                </View>
                <View style={styles.loginbottom}>
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
        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        alignContent: 'stretch',
    },

    logintop: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#822321',
    },

    loginbottom: {
        flex: 2,
        borderRadius: 30,
        padding: 10,
        display: "flex",
        paddingTop: 50,
        alignItems: 'center',
    },

    logo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: 400,
        height: 200,
        // borderWidth: 1,
        // borderColor: 'white',
    },

    screenText: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'white',

    },
})

export default SignIn;