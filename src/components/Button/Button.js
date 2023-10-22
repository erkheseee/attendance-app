import { View, Text, StyleSheet } from 'react-native';

const Button = ({onPress, text}) => {
return (
    <View onPress={onPress} style={styles.button}>
        <Text>{text}</Text>
    </View>
);
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "lightblue",
        width: "50%",
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 30,
    },
})

export default Button;
