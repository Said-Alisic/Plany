export const formatStringToTitleCase = (str: string): string => {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
};
