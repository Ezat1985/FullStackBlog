export const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: err.message });
  next();
};
