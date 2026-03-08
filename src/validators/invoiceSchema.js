import { z } from "zod";

export const invoiceSchema = z.object({
  courseType: z.enum(["MONTHLY", "FULL_COURSE"]),

  basePrice: z.number().min(0, "basePrice must be >= 0"),

  months: z
    .number()
    .min(1, "months must be between 1 and 3")
    .max(3, "months must be between 1 and 3")
    .optional(),

  promoCode: z
    .enum(["SAVE10", "FLAT50K"], {
      errorMap: () => ({
        message: "promoCode must be SAVE10, FLAT50K or null",
      }),
    })
    .nullable(),

  canceledClasses: z.number().min(0, "canceledClasses must be >= 0"),

  refundPerClass: z.number().min(0, "refundPerClass must be >= 0"),
});
