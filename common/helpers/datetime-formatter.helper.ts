// TODO: Currently unused due to redesigning of app in issue #9
// TODO: Find a use for the helper methods?
export const formatDateTimeStringToDate = (datetime: string): string => {
  const dateObj = new Date(datetime);

  return dateObj.toLocaleDateString("en-DK", {
    dateStyle: "short",
  });
};

export const formatDateTimeToHoursAndMinutes = (datetime: string): string => {
  const dateObj = new Date(datetime);

  return dateObj.toLocaleTimeString("en-DK", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "GMT",
  });
};
