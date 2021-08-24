import React, { Component } from "react";
import { View } from "react-native";

class DevNotes extends Component {
  state = {
    grid: [[]],
  };
  render() {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Made by Kysan</Text>
      </View>
    );
  }
}

export default DevNotes;
