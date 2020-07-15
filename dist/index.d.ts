import { Country } from './iso-3166';
/**
 * Get country by country name
 *
 * @param {string} name
 * @returns {Country | undefined}
 */
export declare const whereCountry: (name: string) => Country | undefined;
/**
 * Get country by ISO 3166-1 Alpha-2
 *
 * @param {string} alpha2
 * @returns {Country | undefined}
 */
export declare const whereAlpha2: (alpha2: string) => Country | undefined;
/**
 * Get country by ISO 3166-1 Alpha-3
 *
 * @param {string} alpha3
 * @returns {Country | undefined}
 */
export declare const whereAlpha3: (alpha3: string) => Country | undefined;
/**
 * Get country by ISO 3166-1 Numeric
 *
 * @param {string | number} numeric
 * @returns {Country | undefined}
 */
export declare const whereNumeric: (numeric: string | number) => Country | undefined;
declare const _default: {
    whereCountry: (name: string) => Country | undefined;
    whereAlpha2: (alpha2: string) => Country | undefined;
    whereAlpha3: (alpha3: string) => Country | undefined;
    whereNumeric: (numeric: string | number) => Country | undefined;
};
export default _default;
