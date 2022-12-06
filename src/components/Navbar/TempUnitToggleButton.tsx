import { type MouseEventHandler, useContext } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { ctx } from '../Context/Provider.context';

interface Props {}
function TempUnitToggleButton({}: Props) {
  const { unit, setUnit } = useContext(ctx);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <ButtonGroup>
      <Button
        onClick={handleClick}
        variant={unit === 'metric' ? 'contained' : 'outlined'}
        color='primary'
        aria-label='toggle-celsius'
        size='small'
      >
        &#8451;
      </Button>
      <Button
        onClick={handleClick}
        variant={unit === 'imperial' ? 'contained' : 'outlined'}
        color='primary'
        aria-label='toggle-fahrenheit'
        size='small'
      >
        &#8457;
      </Button>
    </ButtonGroup>
  );
}
export default TempUnitToggleButton;
