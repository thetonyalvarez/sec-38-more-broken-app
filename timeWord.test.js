const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('works: input is correct output', () => {
    expect(timeWord("00:12")).toEqual("twelve twelve am")
    expect(timeWord("01:00")).toEqual("one o'clock am")
    expect(timeWord("06:01")).toEqual("six oh one am")
    expect(timeWord("06:10")).toEqual("six ten am")
    expect(timeWord("06:18")).toEqual("six eighteen am")
    expect(timeWord("06:30")).toEqual("six thirty am")
    expect(timeWord("10:34")).toEqual("ten thirty four am")
    expect(timeWord("12:09")).toEqual("twelve oh nine pm")
    expect(timeWord("13:19")).toEqual("one nineteen pm")
    expect(timeWord("23:23")).toEqual("eleven twenty three pm")
  })

  test('works: convert hour to number', () => {
    let one = timeWord("01:00")
    expect(one).toContain("one")
    let ten = timeWord("10:00")
    expect(ten).toContain("ten")
    let onethree = timeWord("13:00")
    expect(onethree).toContain("one")
    let twothree = timeWord("23:00")
    expect(twothree).toContain("eleven")
  });
  test('fails: hour is out of range', () => {
    try {
      timeWord("24:00")
    } catch (err) {
      expect(err).toBe(err)
    }
    try {
      timeWord("-01:00")
    } catch (err) {
      expect(err).toBe(err)
    }
  });
  test('works: appends am or pm by hour', () => {
    let one = timeWord("01:00")
    expect(one).toContain("am")
    let ten = timeWord("10:00")
    expect(ten).toContain("am")
    let onethree = timeWord("13:00")
    expect(onethree).toContain("pm")
    let twothree = timeWord("23:00")
    expect(twothree).toContain("pm")
  });
  test('fails: minutes is out of range', () => {
    try {
      timeWord("00:75")
    } catch (err) {
      expect(err).toBe(err)
    }
    try {
      timeWord("00:-15")
    } catch (err) {
      expect(err).toBe(err)
    }
  });
  test('works: 00:00 == midnight', () => {
    expect(timeWord("00:00")).toEqual("midnight")
  });
  test('works: 12:00 == noon', () => {
    expect(timeWord("00:00")).toEqual("midnight")
  });
});