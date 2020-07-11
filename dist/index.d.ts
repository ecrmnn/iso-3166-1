import { Country } from './iso-3166.js';
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
 * @param {string} numeric
 * @returns {Country | undefined}
 */
export declare const whereNumeric: (numeric: string) => Country | undefined;
