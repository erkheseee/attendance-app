import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

const DATA = [
    {
        id: 1,
        className: 'Мобайл Програмчлал',
        dueDate: 'Өнөөдөр',
        alert: 'LAB-10',
    },
    {
        id: 2,
        className: 'Мобайл Програмчлал',
        dueDate: 'Өнөөдөр',
        alert: 'LAB-11',
    },
    {
        id: 3,
        className: 'Мобайл Програмчлал',
        dueDate: 'Дараа долоо хоног',
        alert: 'Бие Даалт',
    },
    {
        id: 4,
        className: 'Япон хэл',
        dueDate: 'Дараа долоо хоног',
        alert: 'Улирлын Шалгалт',
    },
];

const Item = ({ dueDate, className, alert }) => (
    <View style={styles.item}>
        <Text style={[styles.text, {fontWeight: '700'}]}>{dueDate}</Text>
        <Text style={[styles.text, {fontSize: 20,}]}>{alert}</Text>
        <Text style={[styles.text, {fontWeight: '300', fontStyle: 'italic'}]}>{className}</Text>
    </View>
);

const Alerts = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                horizontal
                data={DATA}
                renderItem={({ item }) => <Item dueDate={item.dueDate} className={item.className} alert={item.alert} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{ alignItems: 'center' }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#D9BDBC',
        height: 80,
        borderRadius: 15,
        width: 154,
        padding: 10,
        margin: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
    },
    text: {
        fontWeight: "900",
        fontSize: 10,
    },
});

export default Alerts