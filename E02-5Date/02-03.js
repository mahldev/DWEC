const showDateFormated = (date = new Date(), separator = "-") => {
  const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()]

  console.log(`${day}${separator}${month}${separator}${year}`);
}

const tomorrowsDate = new Date(2023,10,19)

showDateFormated(tomorrowsDate, "/")

