const locale = navigator.language || 'en-EN';

const getFullCountryName = (countryCode: string) =>
   navigator.language
      ? new Intl.DisplayNames([locale], { type: 'region' }).of(countryCode)
      : countryCode;

const getCurrentTime = () => {
   let hour: string | undefined;
   let minute: string | undefined;
   let dayPeriod: string | undefined;
   let timeZoneName: string | undefined;

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
      hour = String(now.getHours());
      minute = String(now.getMinutes());
   }

   return `${hour}:${minute} ${dayPeriod ? dayPeriod : ''} ${timeZoneName ? timeZoneName : ''}`;
};

const formatTime = (dt: number) => {
   let hour: string;
   let dayPeriod: string | undefined;

   const parts = new Intl.DateTimeFormat(['de-DE'], {
      hour: 'numeric',
   }).formatToParts(new Date(dt * 1000));

   hour = parts.find(({ type }) => type === 'hour')?.value as string;
   dayPeriod = parts.find(({ type }) => type === 'dayPeriod')?.value;

   return `${hour}:00 ${dayPeriod ? dayPeriod : ''}`;
};

const formatTempUnit = (temp: number, unit: string) => {
   const tempUnit = unit === 'metric' ? 'celsius' : 'fahrenheit';
   return new Intl.NumberFormat(locale, { style: 'unit', unit: tempUnit }).format(Math.round(temp));
};

const formatWindSpeedUnit = (speed: number, unit: string) => {
   const windSpeedUnit = unit === 'metric' ? 'meter-per-second' : 'mile-per-hour';

   return new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: windSpeedUnit,
   }).format(Math.round(speed));
};

const formatWindGustUnit = (speed: number, unit: string) => {
   const windGustUnit = unit === 'metric' ? 'meter-per-second' : 'mile-per-hour';
   return new Intl.NumberFormat(locale, { style: 'unit', unit: windGustUnit }).format(
      Math.round(speed)
   );
};

export {
   getFullCountryName,
   getCurrentTime,
   formatTempUnit,
   formatWindSpeedUnit,
   formatWindGustUnit,
   formatTime,
};
