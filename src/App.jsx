import React from "react";

import { getScreenDimensions, getCenterOfScreen } from "@utils/layoutUtils";

function App() {
  const { width, height } = getScreenDimensions();
  const { x: centerX, y: centerY } = getCenterOfScreen();

  // TODO: When window is resized, update the width and height of the game
  // TODO: Use global state to track window dimensions

  return <div>Help me</div>;
}

export default App;
