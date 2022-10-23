import React, { Component, startTransition, useEffect, useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { getHistories } from "./services/histories_service"

export default class Histories extends Component {

    histories = getHistories();

    

    render() {
        <View>
            <SafeAreaView>
            <FlatList
                data={this.histories}
                renderItem={({item}) => <Text>{item}</Text>}
            />
            </SafeAreaView>
        </View>
    }

}