const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    return new Promise((resolve, reject) => {
      requestHandler(req, res, next).then(resolve).catch(reject);
    });
  };
};

export { asyncHandler };
