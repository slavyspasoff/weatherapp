export default () => {
  if (!navigator.geolocation)
    return new Error('Could not access the browser location API');
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};
