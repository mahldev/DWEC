const formatDateToStringV1 = (date = new Date()) => {
  const [hours, minutes, seconds] = [
    date.getHours().toString(),
    date.getMinutes().toString(),
    date.getSeconds().toString(),
  ];

  return `${hours.length == 1 ? `0${hours}` : hours}:${
    minutes.length == 1 ? `0${minutes}` : minutes
  }:${seconds.length == 1 ? `0${seconds}` : seconds}`;
};

const formatDateToStringV2 = (date = new Date()) => {
  return date.toTimeString().slice(0, 8);
};

console.log(formatDateToStringV1(new Date(2001, 12, 3, 21, 12, 3)));
console.log(formatDateToStringV2(new Date(2001, 12, 3, 21, 12, 3)));
