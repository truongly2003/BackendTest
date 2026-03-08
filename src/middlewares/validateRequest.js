export const validateRequest = (schema) => {
  return (req, res, next) => {
    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      const details = parsed.error.issues.map((e) => ({
        field: e.path[0],
        reason: e.message,
      }));

      return res.status(400).json({
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid input",
          details,
        },
      });
    }

    req.data = parsed.data;

    next();
  };
};