export const formatDateTimeStringToDate = (datetime: string): string => {
  const dateObj = new Date(datetime);

  return dateObj.toLocaleDateString("en-GB", {
    weekday: "long",
  });
};

export const formatDateTimeToHoursAndMinutes = (datetime: string): string => {
  const dateObj = new Date(datetime);

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return hours + ":" + minutes;
};
