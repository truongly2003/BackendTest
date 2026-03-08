export const convertWeekday = (date) => {
  return (date.day() + 6) % 7;
};
