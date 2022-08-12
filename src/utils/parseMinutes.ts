function parseMinutes(minutes: number | undefined): string {
  if (!minutes) {
    throw new TypeError('Something went wrong: minutes invalid');
  }
  if (minutes <= 59) {
    return `${minutes} minutes`;
  }

  let currentMinutes = minutes;
  let hours = 0;

  while (currentMinutes >= 60) {
    hours += 1;
    currentMinutes = currentMinutes - 60;
  }
  // whole hour count
  if (currentMinutes === 0) {
    const hourWord = hours === 1 ? 'hour' : 'hours';
    return `${hours} ${hourWord}`;
  }
  return `${hours} hours ${currentMinutes} minutes`;
}

export default parseMinutes;
