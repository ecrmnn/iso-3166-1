"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whereNumeric = exports.whereAlpha3 = exports.whereAlpha2 = exports.whereCountry = void 0;
const iso_3166_1 = __importDefault(require("./iso-3166"));
/**
 * Get country by country name
 *
 * @param {string} name
 * @returns {Country | undefined}
 */
exports.whereCountry = (name) => {
    return iso_3166_1.default.find((country) => country.country.toUpperCase() === name.toUpperCase());
};
/**
 * Get country by ISO 3166-1 Alpha-2
 *
 * @param {string} alpha2
 * @returns {Country | undefined}
 */
exports.whereAlpha2 = (alpha2) => {
    return iso_3166_1.default.find((country) => country.alpha2 === alpha2.toUpperCase());
};
/**
 * Get country by ISO 3166-1 Alpha-3
 *
 * @param {string} alpha3
 * @returns {Country | undefined}
 */
exports.whereAlpha3 = (alpha3) => {
    return iso_3166_1.default.find((country) => country.alpha3 === alpha3.toUpperCase());
};
/**
 * Get country by ISO 3166-1 Numeric
 *
 * @param {string | number} numeric
 * @returns {Country | undefined}
 */
exports.whereNumeric = (numeric) => {
    return iso_3166_1.default.find((country) => country.numeric === String(numeric));
};
exports.default = {
    whereCountry: exports.whereCountry,
    whereAlpha2: exports.whereAlpha2,
    whereAlpha3: exports.whereAlpha3,
    whereNumeric: exports.whereNumeric,
};
