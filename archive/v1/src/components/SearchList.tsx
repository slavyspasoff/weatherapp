import { Fragment, type MouseEventHandler } from 'react';
import { type CityData } from '../types/Global.type';
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

import { getFullCountryName } from '../helpers/IntlHelpers';

interface Props {
  handleCitySelection: (v: CityData) => MouseEventHandler;
  fetchedCityList: CityData[] | null;
}

function SearchList({ handleCitySelection, fetchedCityList }: Props) {
  return (
    <List
      sx={(theme) => ({
        position: 'absolute',
        top: '5rem',
        width: '100%',
        backgroundColor: theme.palette.grey[800],
        borderRadius: '1rem',
        overflow: 'hidden',
      })}
    >
      {fetchedCityList?.map((city, idx) => (
        <Fragment key={`${city.lat}${city.lon}`}>
          <ListItem
            //TODO: Move the theming to styled component
            sx={(theme) => ({
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme.palette.grey[900],
              },
            })}
            onClick={handleCitySelection(city)}
          >
            <ListItemText>
              {city.name}, {getFullCountryName(city.country)}{' '}
              {city.state && city.state}
            </ListItemText>
          </ListItem>
          {idx < fetchedCityList?.length - 1 && <Divider />}
        </Fragment>
      ))}
    </List>
  );
}
export default SearchList;
