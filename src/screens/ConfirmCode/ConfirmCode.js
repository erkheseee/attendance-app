import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import MyInputField from '../../components/Input/Input';
import MyButton from '../../components/Button/Button';
import { useNavigation } from "@react-navigation/native";

const ConfirmCode = () => {
    const [code, setCode] = useState('');

    const handleClickConfirm = () => {
        console.warn("Confirming Verification Code!");
        navigation.navigate("ResetPassword");
    }
    const handleClickResend = () => {
        console.warn("Verification Code Resent!");
    }
    const handleClickSignIn = () => {
        navigation.navigate("SignIn");
    }

    const navigation = useNavigation();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={styles.confirmCode}>
                    <Text>Нууц үгээ солих</Text>

                    <MyInputField 
                        placeholder="И-мейл дээр авсан кодоо оруулна уу" 
                        value={code} 
                        setValue={setCode}/>

                    <MyButton 
                        onPress={handleClickConfirm} 
                        text="Баталгаажуулах"/>

                    <MyButton 
                        onPress={handleClickResend} 
                        text="Дахиж илгээх"
                        type="SECONDARY"/>

                    <MyButton
                        onPress={handleClickSignIn}
                        text="Нэврэх нүүр рүү буцах"
                        type="TERTIARY"/>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    confirmCode: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
})

export default ConfirmCode;