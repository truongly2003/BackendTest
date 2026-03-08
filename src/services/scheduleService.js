import dayjs from "dayjs";
import { convertWeekday } from "../utils/dateUtils.js";
// Bắt đầu từ startDate
// Điều kiện = totalClass
// Nếu ngày đó:
// thuộc classWeekdays
// không phải holiday
// không nằm trong holidayRanges
// => thêm vào schedule

// tạo lịch học cho khóa học
const generate = ({
  startDate,
  totalClasses,
  classWeekdays,
  holidays,
  holidayRanges,
}) => {
  const schedule = [];
  const weekdays = [...new Set(classWeekdays)].sort();
  const holidaySet = new Set(holidays);
  // khởi tạo ngày bắt đầu
  let date = dayjs(startDate);

  while (schedule.length < totalClasses) {
    const weekday = convertWeekday(date);
    const dateStr = date.format("YYYY-MM-DD");
    const isHoliday = holidaySet.has(dateStr);
    let inRange = false;

    const ranges = Array.isArray(holidayRanges) ? holidayRanges : [];
    for (const range  of ranges) {
      const start=range[0]
      const end=range[1]
      if (
        date.isAfter(dayjs(start).subtract(1, "day")) &&
        date.isBefore(dayjs(end).add(1, "day"))
      ) {
        inRange = true;
        break;
      }
    }
    if (weekdays.includes(weekday) && !isHoliday && !inRange) {
      schedule.push(dateStr);
    }
    // tăng lên 1 ngày
    date = date.add(1, "day");
  }
  return {
    endDate: schedule[schedule.length - 1],
    fullSchedule: schedule,
  };
};

export default { generate };
