import React from "react";
import { Game, Scene } from "react-phaser-fiber";
import MyScene from "@scenes/MyScene";

function App() {
  const preload = (scene) => {
    scene.load.image("logo", "https://assets.codepen.io/388466/logo.png");
  };

  return (
    <Game
      width={800}
      height={600}
      backgroundColor={0x1099bb}
      onPreload={preload}
    >
      <Scene sceneKey="main" active>
        <MyScene />
      </Scene>
    </Game>
  );
}

export default App;
