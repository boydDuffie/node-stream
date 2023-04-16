import { useScene, useGame, Sprite } from "react-phaser-fiber";

const MyScene = () => {
  const scene = useScene();
  const game = useGame();

  React.useEffect(() => {
    // You can access the Phaser scene and game instances here
  }, [scene, game]);

  return (
    <Sprite
      x={100}
      y={100}
      texture="logo"
      onClick={() => {
        console.log("Sprite clicked");
      }}
    />
  );
};

export default MyScene;
