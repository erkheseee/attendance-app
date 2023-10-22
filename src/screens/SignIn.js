import React, {useState} from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import Logo from '../../assets/images/logo.png';
import InputField from '../components/Input/Input';
import Button from '../components/Button/Button';

const SignIn = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View>
            <View style={styles.login}>
                <Image source={Logo} style={styles.logo} resizeMode="contain"/>
                <Text>Sign-In Here</Text>
                <InputField placeholder="User ID" value={userID} setValue={setUserID}/>
                <InputField placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
                <Button></Button>
            </View>
            
        </View>
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