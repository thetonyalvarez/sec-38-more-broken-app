const timeWord = (string) => {

  if (string == "00:00") {
    return "midnight"
  }
  if (string == "12:00") {
    return "noon"
  }

  let conversion = new Map([
    ["00", "twelve"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"]
  ])

  let time = string.split(':')
  let hour = time[0]
  let minutes = time[1]
  let daypart = 'am';
  let singleMinute;
  let tens;

  // convert daypart(am/pm)
  if (Number(hour) >= 12) {
    daypart = 'pm';
  }

  // convert hour
  if (Number(hour) > 23 || Number(hour) < 0) {
    throw new Error('Invalid hour range.')
  }

  if (hour == '00') {
    hour = conversion.get(hour)
  } else if (Number(hour) > 12) {
    hour = String(conversion.get((Number(hour) - 12)));
  } else {
    hour = conversion.get(Number(hour));
  }
  
  // Convert minutes
  // Get modulo remainder of numbers over 20
  if (Number(minutes) == '00') {
    minutes = "o'clock"
  }
  else if (Number(minutes) < 10) {
    minutes = 'oh ' + conversion.get(Number(minutes))
  }
  if (Number(minutes) >= 10 && Number(minutes) < 20) {
    minutes = conversion.get(Number(minutes))
  }
  if (Number(minutes) >= 20) {
    if (Number(minutes) % 10 == 0) {
      minutes = conversion.get(Number(minutes))
    } else {
      singleMinute = Number(minutes) % 10;
      tens = Number(minutes) - singleMinute;
      minutes = conversion.get(tens) + " " + conversion.get(singleMinute)
    }
  }

  return hour + ' ' + minutes + ' ' + daypart
}

module.exports = timeWord