import express from "express";
import { validateRequest } from "../middlewares/validateRequest.js";
import { scheduleSchema } from "../validators/scheduleSchema.js";
import { invoiceSchema } from "../validators/invoiceSchema.js";
import scheduleController from "../controllers/scheduleController.js";
import invoiceController from "../controllers/invoiceController.js";
const router = express.Router();

router.post(
  "/schedule/generate",
  validateRequest(scheduleSchema),
  scheduleController.generateSchedule
);

router.post(
  "/invoice/calc",
  validateRequest(invoiceSchema),
  invoiceController.calcInvoice
);

export default router;
