export const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
