import iso, { Country } from './iso-3166.js';

/**
 * Get country by country name
 *
 * @param {string} name
 * @returns {Country | undefined}
 */
export const whereCountry = (name: string): Country | undefined => {
  name = name.toUpperCase();

  return iso.find((country) => country.country.toUpperCase() === name);
};

/**
 * Get country by ISO 3166-1 Alpha-2
 *
 * @param {string} alpha2
 * @returns {Country | undefined}
 */
export const whereAlpha2 = (alpha2: string): Country | undefined => {
  alpha2 = alpha2.toUpperCase();

  return iso.find((country) => country.alpha2 === alpha2);
};

/**
 * Get country by ISO 3166-1 Alpha-3
 *
 * @param {string} alpha3
 * @returns {Country | undefined}
 */
export const whereAlpha3 = (alpha3: string): Country | undefined => {
  alpha3 = alpha3.toUpperCase();

  return iso.find((country) => country.alpha3 === alpha3);
};

/**
 * Get country by ISO 3166-1 Numeric
 *
 * @param {string} numeric
 * @returns {Country | undefined}
 */
export const whereNumeric = (numeric: string): Country | undefined => {
  numeric = numeric.toString();

  return iso.find((country) => country.numeric === numeric);
};
