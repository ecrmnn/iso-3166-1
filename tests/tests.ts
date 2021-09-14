import { expect } from 'chai';
import { describe, it } from 'mocha';

import iso from '../src/';
import countries from '../src/iso-3166';

describe('ISO-3166 test suite', function () {
  it('returns an array of all countries', function() {
    expect(iso.all()).to.be.equal(countries);
  });

  it('returns a country by alpha-2 with lowercase letters', function () {
    const deepObject = iso.whereAlpha2('no');

    expect(deepObject).to.have.deep.property('country', 'Norway');
    expect(deepObject).to.have.deep.property('alpha2', 'NO');
    expect(deepObject).to.have.deep.property('alpha3', 'NOR');
    expect(deepObject).to.have.deep.property('numeric', '578');
  });

  it('returns a country by alpha-2 with uppercase letters', function () {
    const deepObject = iso.whereAlpha2('BA');

    expect(deepObject).to.have.deep.property(
      'country',
      'Bosnia and Herzegovina'
    );
    expect(deepObject).to.have.deep.property('alpha2', 'BA');
    expect(deepObject).to.have.deep.property('alpha3', 'BIH');
    expect(deepObject).to.have.deep.property('numeric', '070');
  });

  it('returns a country by alpha-3 with lowercase letters', function () {
    const deepObject = iso.whereAlpha3('png');

    expect(deepObject).to.have.deep.property('country', 'Papua New Guinea');
    expect(deepObject).to.have.deep.property('alpha2', 'PG');
    expect(deepObject).to.have.deep.property('alpha3', 'PNG');
    expect(deepObject).to.have.deep.property('numeric', '598');
  });

  it('returns a country by alpha-3 with uppercase letters', function () {
    const deepObject = iso.whereAlpha3('PNG');

    expect(deepObject).to.have.deep.property('country', 'Papua New Guinea');
    expect(deepObject).to.have.deep.property('alpha2', 'PG');
    expect(deepObject).to.have.deep.property('alpha3', 'PNG');
    expect(deepObject).to.have.deep.property('numeric', '598');
  });

  it('returns a country by country name with uppercase letters', function () {
    const deepObject = iso.whereCountry(
      "Democratic People's Republic of Korea"
    );

    expect(deepObject).to.have.deep.property(
      'country',
      "Democratic People's Republic of Korea"
    );
    expect(deepObject).to.have.deep.property('alpha2', 'KP');
    expect(deepObject).to.have.deep.property('alpha3', 'PRK');
    expect(deepObject).to.have.deep.property('numeric', '408');
  });

  it('returns a country by country name with lowercase letters', function () {
    const deepObject = iso.whereCountry('norway');

    expect(deepObject).to.have.deep.property('country', 'Norway');
    expect(deepObject).to.have.deep.property('alpha2', 'NO');
    expect(deepObject).to.have.deep.property('alpha3', 'NOR');
    expect(deepObject).to.have.deep.property('numeric', '578');
  });

  it('returns a country by numeric (integer)', function () {
    const deepObject = iso.whereNumeric(533);

    expect(deepObject).to.have.deep.property('country', 'Aruba');
    expect(deepObject).to.have.deep.property('alpha2', 'AW');
    expect(deepObject).to.have.deep.property('alpha3', 'ABW');
    expect(deepObject).to.have.deep.property('numeric', '533');
  });

  it('returns a country by numeric (string)', function () {
    const deepObject = iso.whereNumeric('036');

    expect(deepObject).to.have.deep.property('country', 'Australia');
    expect(deepObject).to.have.deep.property('alpha2', 'AU');
    expect(deepObject).to.have.deep.property('alpha3', 'AUS');
    expect(deepObject).to.have.deep.property('numeric', '036');
  });
});
