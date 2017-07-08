const iso = require('./iso-3166.js');

exports.whereCountry = function (name) {
  name = name.toUpperCase();

  return iso.find(function (country) {
    return country.country.toUpperCase() === name;
  });
}

exports.whereAlpha2 = function (alpha2) {
  alpha2 = alpha2.toUpperCase();

  return iso.find(function (country) {
    return country.alpha2 === alpha2;
  });
}

exports.whereAlpha3 = function (alpha3) {
  alpha3 = alpha3.toUpperCase();

  return iso.find(function (country) {
    return country.alpha3 === alpha3;
  });
}

exports.whereNumeric = function (numeric) {
  numeric = numeric.toString();

  return iso.find(function (country) {
    return country.numeric === numeric;
  });
}
