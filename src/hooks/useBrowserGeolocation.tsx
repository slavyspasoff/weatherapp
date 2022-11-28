import { useEffect, useState } from 'react';
import { type LocationCoord } from '../types/Global.type';
import getBrowserCoordinates from '../helpers/getBrowserCoordinates';

interface Props {
  setLocationCoord: React.Dispatch<React.SetStateAction<LocationCoord>>;
}

function useBrowserGeolocation({ setLocationCoord }: Props) {
  useEffect(() => {
    (async () => {
      try {
        const { coords } =
          (await getBrowserCoordinates()) as GeolocationPosition;
        setLocationCoord({ lat: coords.latitude, lon: coords.longitude });
        //TODO: Add error handler
      } catch (err) {}
    })();
  }, []);

  return null;
}
export default useBrowserGeolocation;
