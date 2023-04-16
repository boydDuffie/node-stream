// Window dimensions
const getScreenWidth = () => {
  return window.innerWidth;
};
const getScreenHeight = () => {
  return window.innerHeight;
};
export const getScreenDimensions = () => ({
  width: getScreenWidth(),
  height: getScreenHeight(),
});

// Window locations
export const getCenterOfScreen = () => {
  return {
    x: getScreenWidth() / 2,
    y: getScreenHeight() / 2,
  };
};
