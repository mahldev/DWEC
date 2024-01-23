export const isEmpty = (value: string) => {
  return value === null || value === undefined || value === "";
};

export const formatKey = (camelCase: string) => {
  return camelCase
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
};

export const trimInput = (value: string) => value.trim();
