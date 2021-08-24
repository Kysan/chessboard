
import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { ThemeProvider, Button, Text } from 'react-native-elements';




const theme = {
  Button: {
    color: "#ff0000",
    backgroundColor: "#000000"
  },
  Text: {
    color: "#00ff00"
  }
}



export default function App() {
  return (
    <ThemeProvider useDark={true}>
      <View style={styles.container}>
        <Text>azererazez</Text>
        <Button title="azer" />
      </View>
    </ThemeProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
})

