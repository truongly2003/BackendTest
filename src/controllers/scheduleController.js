import scheduleService from "../services/scheduleService.js";

const generateSchedule = (req, res) => {
  const result = scheduleService.generate(req.data);
  res.json(result);
};

export default {
  generateSchedule,
};
