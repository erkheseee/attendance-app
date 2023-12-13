import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MyInputField from "../../components/Input/Input";
import MyButton from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleClickSend = () => {
    console.warn("Verification Code Sent!");
    navigation.navigate("ConfirmCode");
  };
  const handleClickSignIn = () => {
    navigation.navigate("SignIn");
  };

  const navigation = useNavigation();
  return (
    // <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View style={styles.forgotPassword}>
        <MyInputField placeholder="И-мейл" value={email} setValue={setEmail} />

        <MyButton onPress={handleClickSend} text="Илгээх" />

        <MyButton
          onPress={handleClickSignIn}
          text="Нэврэх нүүр рүү буцах"
          type="TERTIARY"
        />
      </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});

export default ForgotPassword;
