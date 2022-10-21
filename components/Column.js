import { StyleSheet, View } from "react-native";

const Column = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

// create styles of Column
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

export default Column;