// In App.js in a new project
//UI source: https://towardsdev.com/how-to-build-a-calculator-app-using-react-native-a-step-by-step-tutorial-40ae327fae5f
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Column from "./components/Column";
import Main from './main';
import Histories from './histories';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Column>
          <View>
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Computer"
                screenOptions={{
                  headerMode: 'screen',
                  headerTintColor: 'white',
                  headerStyle: { backgroundColor: 'tomato' },
                }}
              >
                <Tab.Screen name="Computer" component={Main} />
                <Tab.Screen name="Details" component={Histories} />
              </Tab.Navigator>
            </NavigationContainer>
          </View>
        </Column>
      </SafeAreaView>
    </View>
  );
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    justifyContent: "flex-end",
    flex: 1,
  },
});

export default App;