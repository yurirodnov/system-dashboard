export const secondsConverter = (s: number): string => {
  const SECONDS_IN_DAY = 86400;
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_MINUTE = 60;

  s = Math.floor(Number(s));

  if (s <= 0 || Number.isNaN(s)) return "0 s";

  const days = Math.floor(s / SECONDS_IN_DAY);
  const hours = Math.floor((s % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
  const minutes = Math.floor((s % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = s % 60;

  const fullTime = [];
  if (days > 0) fullTime.push(`${days} d`);
  if (hours > 0) fullTime.push(`${hours} h`);
  if (minutes > 0) fullTime.push(`${minutes} m`);
  if (seconds > 0) fullTime.push(`${seconds} s`);

  return fullTime.length > 0 ? fullTime.join(" ") : "0 s";
};
