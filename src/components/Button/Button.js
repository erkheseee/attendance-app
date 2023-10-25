import { View, Text, StyleSheet, Pressable } from 'react-native';

const Button = ({onPress, text, type = "PRIMARY"}) => {
return (
    <Pressable 
        onPress={onPress} 
        style={[
            styles.button, 
            styles[`${type}_button`],
        ]}>
        <Text style={[
            styles.text, 
            styles[`${type}_text`],
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
        backgroundColor: "#822321",
    },

    SECONDARY_button: {
        borderWidth: 2,
        borderColor: '#822321',
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
        color: 'black',
    },
    
})

export default Button;
