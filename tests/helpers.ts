/**
 * Generates a random Date object within the range of the 1st day of the previous month
 * and the last day of the next month from the current month.
 *
 * @returns {Date} A random Date object within the specified range.
 */
export const getRandomDateInRangePreviousToNextMonth = (): Date => {
  const today = new Date();

  const previousMonthStart = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  );
  const nextMonthEnd = new Date(today.getFullYear(), today.getMonth() + 2, 0);

  const randomTime =
    Math.random() * (nextMonthEnd.getTime() - previousMonthStart.getTime()) +
    previousMonthStart.getTime();

  const randomDate = new Date(randomTime);

  return randomDate;
};
