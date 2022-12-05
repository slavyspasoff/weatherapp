import { Fragment, type MouseEventHandler } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { type CityData } from '../../types/global.types';

import { getFullCountryName } from '../../helpers/IntlHelpers';

interface Props {
  cities: CityData[] | null;
  setCity: (v: CityData) => MouseEventHandler;
  listOffset: string;
}

function ItemList({ cities, setCity, listOffset }: Props) {
  const render = cities!.map((city, idx) => {
    const { name, country, state, lat, lon, local_names } = city;
    //TODO: Show the name based on the browser locale from local_names
    const text = `${name}, ${state ? state : ''} ${getFullCountryName(country)}`.trim();
    const isLastItem = idx < cities!.length - 1;
    return (
      <Fragment key={`${lat}${lon}`}>
        <ListItem
          onClick={setCity(city)}
          sx={(theme) => ({
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: theme.palette.grey[300],
            },
          })}
        >
          <ListItemText
            primary={text}
            sx={(theme) => ({
              [theme.breakpoints.up('sm')]: { paddingLeft: theme.spacing(7) },
            })}
          />
        </ListItem>
        {isLastItem && <Divider />}
      </Fragment>
    );
  });

  return (
    <List
      sx={(theme) => ({
        position: 'absolute',
        top: listOffset,
        width: '95%',
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.common.black,
        paddingBlock: 0,
        borderRadius: 1,
        overflow: 'hidden',
      })}
    >
      {render}
    </List>
  );
}
export default ItemList;
