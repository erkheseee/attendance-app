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
        width: '95%',
        borderWidth: 2,
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 15,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 3.5,
        elevation: 5,
    },
    input: {
        fontWeight: '900',
        // fontFamily: 'aril',
    },
})

export default Input;