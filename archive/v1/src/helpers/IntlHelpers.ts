const getFullCountryName = (locale: string) =>
  new Intl.DisplayNames([navigator.language], { type: 'region' }).of(locale);
export { getFullCountryName };
