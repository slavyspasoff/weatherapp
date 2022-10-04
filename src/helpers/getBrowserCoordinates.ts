export default () => {
  const _g = navigator.geolocation;
  if (!_g) return new Error('Could not access the browser location API');
  _g.getCurrentPosition(
    (p) => ({ lat: p.coords.latitude, lon: p.coords.longitude }),
    () => new Error('Unable go get your coordinates')
  );
};
