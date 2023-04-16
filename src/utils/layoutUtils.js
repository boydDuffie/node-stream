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
