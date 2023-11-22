import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({onPress, text, type = "PRIMARY"}) => {
return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[
            styles.button, 
            styles[`${type}_button`],
        ]}>
        <Text style={[
            styles.text, 
            styles[`${type}_text`],
        ]}>{text}</Text>
    </TouchableOpacity>
);
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: "50%",
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },

    PRIMARY_button: {
        backgroundColor: "#822321",
        borderWidth: 4,
        borderColor: '#8E3837',
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
