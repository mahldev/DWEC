const data = {
  name: "Jon",
  surname: "Doe",
  city: "Malaga",
  child: {
    first: "you",
    child: {
      name: "Jane",
      child: {
        name: "Paul",
      },
    },
  },
  position: "CEO",
  toString: function (depth = 0) {
    let result = "";

    const indent = "-".repeat(depth);

    Object.entries(this).forEach(([key, value]) => {
      if (value && typeof value === "object" && key !== "toString") {
        result += `${indent}*${key}*\n${value.toString(depth + 1)}`;
      } else if (value !== null && typeof value !== "function") {
        result += `${indent}*${value}*\n`;
      }
    });

    return result;
  },
};

console.log(data.toString());
