// In App.js in a new project
//UI source: https://towardsdev.com/how-to-build-a-calculator-app-using-react-native-a-step-by-step-tutorial-40ae327fae5f
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Button from "./components/Button";
import Row from "./components/Row";
import Column from "./components/Column";
import Main from './main';

const Tab = createMaterialTopTabNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Details Screen</Text>
      <Row>
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button text="8" onPress={() => this.HandleTap("number", 8)} />
            <Button text="9" onPress={() => this.HandleTap("number", 9)} />
            <Button
              text="X"
              theme="accent"
              onPress={() => this.HandleTap("operator", "*")}
            />
          </Row>
          <Row>
            <Button text="5" onPress={() => this.HandleTap("number", 5)} />
            <Button text="6" onPress={() => this.HandleTap("number", 6)} />
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.HandleTap("operator", "-")}
              />
          </Row>
    </View>
  );
}
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
                <Tab.Screen name="Details" component={DetailsScreen} />
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