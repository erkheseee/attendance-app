import React from "react";
import {View, StyleSheet, TextInput} from "react-native";

const Input = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View  style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        width: '100%',
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
    },
    input: {
        // fontFamily: 'aril',
    },
})

export default Input;