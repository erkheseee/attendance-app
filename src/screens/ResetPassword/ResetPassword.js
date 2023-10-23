import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import MyInputField from '../../components/Input/Input';
import MyButton from '../../components/Button/Button';
import { useNavigation } from "@react-navigation/native";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleClickResetPassword = () => {
        console.warn("Password Reset!");
        //add popup dialogue or navigate to dialogue page
    }
    const handleClickSignIn = () => {
        console.warm("Handle Click Sign In");
        navigation.navigate("SignIn");
    }

    const navigation = useNavigation();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={styles.resetPassword}>
                    <Text>Нууц үгээ солих</Text>

                    <MyInputField 
                        placeholder="Шинэ нууц үг" 
                        value={newPassword} 
                        setValue={setNewPassword}
                        secureTextEntry={true}/>

                    <MyInputField 
                        placeholder="Шинэ нууц үг дахин оруулах" 
                        value={confirmNewPassword} 
                        setValue={setConfirmNewPassword} 
                        secureTextEntry={true}/>

                    <MyButton 
                        onPress={handleClickResetPassword} 
                        text="Нууц үг солих"/>
                        
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
    resetPassword: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
})

export default ResetPassword;