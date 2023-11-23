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
        marginTop: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },

    PRIMARY_button: {
        backgroundColor: "#822321",
        borderWidth: 2,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 3.5,
        elevation: 5,
        marginTop: 20,
    },

    SECONDARY_button: {
        borderWidth: 2,
        borderColor: '#822321',
    },

    TERTIARY_button: {
        width: '60%',
    },

    text: {
        fontSize: 15,
        fontWeight: '900',
    },

    PRIMARY_text: {
        color: 'white',
    },
    
    SECONDARY_text: {
        
    },
    
    TERTIARY_text: {
        color: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        shadowOffset: {height: 2, width: 3},
    },
    
})

export default Button;
