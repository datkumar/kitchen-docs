export const compareStrings = (first: string, second: string): number => {
  if (first < second) return -1;
  if (first > second) return 1;
  return 0;
};
