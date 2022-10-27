import React, { useState, useEffect, useFocusEffect, useCallback } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { storeHistories } from './services/histories_service';
import { getHistories } from './services/histories_service';


const Item = ({ title }) => (
    <View style={styles.item} >
        <Text
            onPress={ async() => {
                let arr = title.split(" ");
                await storeHistories("state", arr[4])
                console.log(arr[4])
            }
            }
            style={styles.value}
        >
            {title}
        </Text>
    </View>
);
const Histories = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Item title={item} />
    );
    const [history, setHistory] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let tmp = await getHistories('@storage_Key');
            setHistory(tmp);
        }
        const unsubscribe = navigation.addListener('tabPress', (e) => {
            fetchData();
        });

        return unsubscribe;
    },
        [navigation]  // useEffect chay lai khi co su thay doi trong cac bien nay
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={history}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#202020",
        justifyContent: "flex-end",
        flex: 1,
    },
    item: {
        backgroundColor: '#a6a6a6',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 32,

    },
    value: {
        color: "#000",
        fontSize: 25,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10,
    },
});

export default Histories;