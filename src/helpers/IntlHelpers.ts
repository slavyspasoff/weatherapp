const locale = navigator.language || 'en-EN';

const getFullCountryName = (countryCode: string) =>
   navigator.language
      ? new Intl.DisplayNames([locale], { type: 'region' }).of(countryCode)
      : countryCode;

const getCurrentTime = () => {
   let hour, minute, dayPeriod, timeZoneName;
   if (navigator.language) {
      const now = new Intl.DateTimeFormat([locale], {
         timeStyle: 'full',
      }).formatToParts(new Date());
      hour = now.find(({ type }) => type === 'hour')?.value;
      minute = now.find(({ type }) => type === 'minute')?.value;
      dayPeriod = now.find(({ type }) => type === 'dayPeriod')?.value;
      timeZoneName = now.find(({ type }) => type === 'timeZoneName')?.value;
   }
   if (!hour || !minute) {
      const now = new Date();
      hour = now.getHours();
      minute = now.getMinutes();
   }

   return `${hour}:${minute} ${dayPeriod ? dayPeriod : ''} ${timeZoneName ? timeZoneName : ''}`;
};

const formatTempUnit = (temp: number, unit: string) => {
   const tempUnit = unit === 'metric' ? 'celsius' : 'fahrenheit';
   return new Intl.NumberFormat(locale, { style: 'unit', unit: tempUnit }).format(Math.round(temp));
};

const formatWindSpeedUnit = (speed: number, unit: string) => {
   const windSpeedUnit = unit === 'metric' ? 'meter-per-second' : 'mile-per-hour';

   new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: windSpeedUnit,
   }).format(Math.round(speed));
};

const formatWindGustUnit = (speed: number, unit: string) => {
   const windGustUnit = unit === 'metric' ? 'meter-per-second' : 'mile-per-hour';

   new Intl.NumberFormat(locale, { style: 'unit', unit: windGustUnit }).format(Math.round(speed));
};

export {
   getFullCountryName,
   getCurrentTime,
   formatTempUnit,
   formatWindSpeedUnit,
   formatWindGustUnit,
};
