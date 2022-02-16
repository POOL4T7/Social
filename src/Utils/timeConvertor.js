const intervals = [
  { label: "year", seconds: 31536000 },
  { label: "month", seconds: 2592000 },
  { label: "day", seconds: 86400 },
  { label: "hour", seconds: 3600 },
  { label: "minute", seconds: 60 },
  { label: "second", seconds: 1 },
  { label: "just now", seconds: 0 },
];

export const timeSince = (date) => {
  try {
    const second = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find((i) => i.seconds < second);
    const count = Math.floor(second / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
  } catch (e) {
    console.log(e.message);
  }
};
