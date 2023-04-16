import React from "react";

import { Game, Scene } from "react-phaser-fiber";
import MyScene from "@scenes/MyScene";

import { getScreenDimensions } from "@utils/layoutUtils";

function App() {
  const { width, height } = getScreenDimensions();

  // TODO: When window is resized, update the width and height of the game
  // TODO: Use global state to track window dimensions

  const preload = (scene) => {
    scene.load.image("logo", "https://assets.codepen.io/388466/logo.png");
  };

  return (
    <Game
      width={width}
      height={height}
      backgroundColor={0x1099bb}
      onPreload={preload}
    >
      {/* Our custom-implemented scenes get wrapped with a Scene to establish their `key` and `active-states` */}
      <Scene sceneKey="main" active>
        <MyScene />
      </Scene>
    </Game>
  );
}

export default App;
