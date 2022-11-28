import { useEffect } from 'react';
import { type LocationCoord } from '../types/Global.type';
import getBrowserCoordinates from '../helpers/getBrowserCoordinates';
interface Props {
  setLocationCoord: React.Dispatch<React.SetStateAction<LocationCoord | null>>;
}

function useBrowserGeolocation({ setLocationCoord }: Props): void {
  useEffect(() => {
    (async () => {
      try {
        const { coords } =
          (await getBrowserCoordinates()) as GeolocationPosition;
        setLocationCoord({ lat: coords.latitude, lon: coords.longitude });
      } catch (err) {
        if (err instanceof GeolocationPositionError || err instanceof Error) {
          console.error(err.message);
        }
      }
    })();
  }, []);
}
export default useBrowserGeolocation;
