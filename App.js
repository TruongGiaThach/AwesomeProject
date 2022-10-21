// In App.js in a new project
//UI source: https://towardsdev.com/how-to-build-a-calculator-app-using-react-native-a-step-by-step-tutorial-40ae327fae5f
import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabButton from "./components/Tab-Button";
import Row from "./components/Row";
import Column from "./components/Column";
import Main from './main';


const Stack = createNativeStackNavigator();
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Column>
          <Row style={styles.react_tab_list}>
            <TabButton
              style={styles.react_tab_item}
              text="Calculator"
              />
            <TabButton
              style={styles.react_tab_item}
              text="Histories"
              />
          </Row>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Computer" component={Main} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Column>
      </SafeAreaView>
    </View>
  );
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flexDirection: "column",
    display: "flex",
  },
  react_tab_list: {
    justifyContent: "flex-start",
  },
  react_tab_item: {
    
  },
  react_navigator: {
  }
});

export default App;