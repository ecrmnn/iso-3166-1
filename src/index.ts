import iso, { Country } from './iso-3166';

/**
 * Get country by country name
 *
 * @param {string} name
 * @returns {Country | undefined}
 */
export const whereCountry = (name: string): Country | undefined => {
  return iso.find((country) => country.country.toUpperCase() === name.toUpperCase());
};

/**
 * Get country by ISO 3166-1 Alpha-2
 *
 * @param {string} alpha2
 * @returns {Country | undefined}
 */
export const whereAlpha2 = (alpha2: string): Country | undefined => {
  return iso.find((country) => country.alpha2 === alpha2.toUpperCase());
};

/**
 * Get country by ISO 3166-1 Alpha-3
 *
 * @param {string} alpha3
 * @returns {Country | undefined}
 */
export const whereAlpha3 = (alpha3: string): Country | undefined => {
  return iso.find((country) => country.alpha3 === alpha3.toUpperCase());
};

/**
 * Get country by ISO 3166-1 Numeric
 *
 * @param {string | number} numeric
 * @returns {Country | undefined}
 */
export const whereNumeric = (numeric: string | number): Country | undefined => {
  return iso.find((country) => country.numeric === String(numeric));
};

/**
 * Get all countries.
 * 
 * @returns {Array<Country>}
 */
export const all = (): Country[] => iso;

export default {
  all,
  whereCountry,
  whereAlpha2,
  whereAlpha3,
  whereNumeric,
};
