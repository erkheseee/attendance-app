import { View, Text, StyleSheet, Pressable } from 'react-native';

const Button = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
return (
    <Pressable 
        onPress={onPress} 
        style={[
            styles.button, 
            styles[`${type}_button`],
            bgColor ? {backgroundColor: bgColor} : {},
        ]}>
        <Text style={[
            styles.text, 
            styles[`${type}_text`],
            fgColor ? {color: fgColor} : {},
        ]}>{text}</Text>
    </Pressable>
);
};

const styles = StyleSheet.create({
    button: {
        width: "50%",
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 30,
    },

    PRIMARY_button: {
        backgroundColor: "lightblue",
    },

    SECONDARY_button: {

    },

    TERTIARY_button: {

    },

    text: {
        fontWeight: 'bold',
    },

    PRIMARY_text: {
        color: 'white',
    },
    
    SECONDARY_text: {

    },
    
    TERTIARY_text: {
        color: 'grey',
    },
    
})

export default Button;
