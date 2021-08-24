import React, { Component } from "react";
import { View } from "react-native";

class Game extends Component {
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
        <Text>This is the game</Text>
      </View>
    );
  }
}

export default Game;
