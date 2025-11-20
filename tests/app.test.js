import { describe, test, expect, it } from 'vitest';
const Laskin = require('../laskin/laskin');

describe('Taskin luonnin testaus', function () {
  const laskin = Laskin;

  it('should do stuff', function () {
    const checkSumma = laskin.plusLasku(1, 1);
    expect(checkSumma).toBe(2);
  });

  it('should do other stuff', function () {
    const checkSumma = laskin.miinusLasku(5, 2);
    expect(checkSumma).toBe(3);
  });
});
