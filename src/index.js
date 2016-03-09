const iso = require('./iso-3166.js');

exports.whereCountry = function (name) {
  name = name.toUpperCase();

  return iso.filter(function (country) {
    return country.country.toUpperCase() === name;
  })[0];
}

exports.whereAlpha2 = function (alpha2) {
  alpha2 = alpha2.toUpperCase();

  return iso.filter(function (country) {
    return country.alpha2 === alpha2;
  })[0];
}

exports.whereAlpha3 = function (alpha3) {
  alpha3 = alpha3.toUpperCase();

  return iso.filter(function (country) {
    return country.alpha3 === alpha3;
  })[0];
}

exports.whereNumeric = function (numeric) {
  numeric = numeric.toString();

  return iso.filter(function (country) {
    return country.numeric === numeric;
  })[0];
}