const findMatchesInString = (inputString) => {
  return inputString.match(/[A-Z]|\d+\b/g);
};

const splitStringByMatches = (inputString, matches) => {
  return matches.map((match, index) => {
    const startIndex = inputString.indexOf(match);
    let endIndex;
    
    if (index < matches.length - 1) {
      endIndex = inputString.indexOf(matches[index + 1]);
    }

    return endIndex
      ? inputString.slice(startIndex, endIndex)
      : inputString.slice(startIndex);
  });
};

export const uncamelize = (inputString, separator = " ") => {
  const cleanString = inputString.trim().replace(/\s+/g, "");
  const matches = findMatchesInString(cleanString);

  // matches.unshift(inputString[0])

  return matches
    ? splitStringByMatches(cleanString, matches).join(separator)
    : "";
};

console.log(uncamelize("WelloWorld"));
