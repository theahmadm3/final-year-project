import geolocation from 'geolocation';

export const getCoords = () => {
  return new Promise((res, rej) => {
    geolocation.getCurrentPosition((error, position) => {
      if (error) {
        rej(error);
      } else {
        res({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }
    });
  });
};
