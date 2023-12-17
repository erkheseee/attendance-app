import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import Logo from "../../../assets/images/logo.png";
import MyInputField from "../../components/Input/Input";
import MyButton from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";

const SignIn = (props) => {
  const db = SQLite.openDatabase("MainDB");
  let user;
  const [userID, setUserID] = useState("se20d005");
  const [password, setPassword] = useState("0000");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS USER (USERID TEXT PRIMARY KEY NOT NULL, PASSWORD TEXT NOT NULL)",
        [],
        () => {},
        (error) => console.log(error)
      );
    });
    db.transaction((tx) => {
      tx.executeSql("INSERT INTO USER (USERID, PASSWORD) VALUES (?, ?)", [
        "se20d005",
        "0000",
      ]);
    });
    db.transaction((tx) => {
        tx.executeSql(
          "SELECT USERID, PASSWORD FROM USER",
          null,
          (txObj, resultSet) => user = resultSet.rows._array[0],
          (txObj, error) => console.log(error)
        );
      });
  }, []);

  const handleClickSignIn = () => {
    if (userID == user.USERID && password == user.PASSWORD) {
      navigation.navigate("Tabs", { user: props, alert: true });
    } else if(userID != user.USERID || password != user.PASSWORD){
      console.warn("ID эсвэл нууц үг буруу байна!");
    }
  };
  const handleClickForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const navigation = useNavigation();
  return (
    // <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.logintop}>
        <ImageBackground source={Logo} style={styles.logo} resizeMode="contain">
          <Text style={styles.screenText}></Text>
        </ImageBackground>
      </View>
      <View style={styles.loginbottom}>
        <MyInputField
          placeholder="Хэрэглэгчийн ID"
          value={userID}
          setValue={setUserID}
        />

        <MyInputField
          placeholder="Нууц үг"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <MyButton onPress={handleClickSignIn} text="Нэвтрэх" />

        <MyButton
          onPress={handleClickForgotPassword}
          text="Нууц үгээ мартсан уу?"
          type="TERTIARY"
        />
      </View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    alignContent: "stretch",
  },

  logintop: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#822321",
    zIndex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderColor: "black",
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  loginbottom: {
    position: "absolute",
    width: "100%",
    height: "69%",
    bottom: 0,
    borderRadius: 30,
    padding: 10,
    display: "flex",
    paddingTop: 30,
    alignItems: "center",
    zIndex: 10,
  },

  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 500,
    height: 300,
    paddingBottom: 50,
    // borderWidth: 1,
    // borderColor: 'black',
  },

  screenText: {
    fontSize: 20,
    color: "white",
  },
});

export default SignIn;
