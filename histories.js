import React, { useState, useEffect, useFocusEffect, useCallback } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { storeHistories } from './services/histories_service';
import { getHistories } from './services/histories_service';


const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Histories = ({navigation}) => {

    const renderItem = ({ item }) => (
        <Item title={item} />
    );
    const [history, setHistory] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let tmp = await getHistories();
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
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default Histories;