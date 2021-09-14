# iso-3166-1
> Lookup information with ISO 3166-1 alpha-2, ISO 3166-1 alpha-3 and ISO 3166-1 numeric

[![Build Status](https://travis-ci.org/ecrmnn/iso-3166-1.svg?branch=master)](https://travis-ci.org/ecrmnn/iso-3166-1)
[![npm version](https://img.shields.io/npm/v/iso-3166-1.svg)](http://badge.fury.io/js/iso-3166-1)
[![npm version](https://img.shields.io/npm/dm/iso-3166-1.svg)](http://badge.fury.io/js/iso-3166-1)
[![npm version](https://img.shields.io/npm/l/iso-3166-1.svg)](http://badge.fury.io/js/iso-3166-1)

### Installation
```bash
npm install iso-3166-1 --save
```

### Usage
Get country by ISO 3166-1 Alpha-2
```javascript
const iso = require('iso-3166-1');

console.log(iso.whereAlpha2('no'));
/** Returns:
  {
    country: 'Norway',
    alpha2: 'NO',
    alpha3: 'NOR',
    numeric: '578'
  }
*/
```

Get country by ISO 3166-1 Alpha-3
```javascript
const iso = require('iso-3166-1');

console.log(iso.whereAlpha3('nor'));
/** Returns:
  {
    country: 'Norway',
    alpha2: 'NO',
    alpha3: 'NOR',
    numeric: '578'
  }
*/
```

Get country by ISO 3166-1 Numeric
```javascript
const iso = require('iso-3166-1');

console.log(iso.whereNumeric(578));
/** Returns:
  {
    country: 'Norway',
    alpha2: 'NO',
    alpha3: 'NOR',
    numeric: '578'
  }
*/
```

Get country by country name
```javascript
const iso = require('iso-3166-1');

console.log(iso.whereCountry('NORWAY'));
/** Returns:
  {
    country: 'Norway',
    alpha2: 'NO',
    alpha3: 'NOR',
    numeric: '578'
  }
*/
```

Get all countries
```javascript
const iso = require('iso-3166-1');

console.log(iso.all());
/** Returns:
  [
    {
      country: 'Norway',
      alpha2: 'NO',
      alpha3: 'NOR',
      numeric: '578'
    }
  ]
*/
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)