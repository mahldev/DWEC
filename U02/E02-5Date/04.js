const formatDateToStringV1 = (date = new Date()) => {
  const [hours, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const formatDateToStringV2 = (date = new Date()) => {
  return date.toTimeString().slice(0, 8);
};

// console.log(formatDateToStringV1(new Date(2001, 12, 3, 21, 12, 3)));
// console.log(formatDateToStringV2(new Date(2001, 12, 3, 21, 12, 3)));
