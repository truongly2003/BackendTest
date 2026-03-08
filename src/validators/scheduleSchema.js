import { z } from "zod";
import dayjs from "dayjs";
const dateString = z
  .string({
    required_error: "date is required",
  })
  .refine((val) => dayjs(val, "YYYY-MM-DD", true).isValid(), {
    message: "Date must be YYYY-MM-DD",
  });
export const scheduleSchema = z.object({
  startDate: dateString,

  totalClasses: z
    .number({
      required_error: "totalClasses is required",
    })
    .min(1, "totalClasses must be >= 1"),
  classWeekdays: z.array(
    z
      .number({ invalid_type_error: "weekday must be number" })
      .min(0, "weekday must be between 0-6")
      .max(6, "weekday must be between 0-6"),
    {
      required_error: "classWeekdays is required",
    }
  ),

  holidays: z.array(dateString).optional().default([]),

  holidayRanges: z
    .array(z.tuple([dateString, dateString]))
    .optional()
    .default([]),
});
