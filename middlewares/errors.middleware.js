const handleError = (error, req, res, next) => {
  console.error(error);

  if (process.env.NODE_ENV === 'development') {
    return res.status(500).send({
      success: false,
      message: error.message,
      detail: error
    });
  }

  return res.status(500).send({
    success: false,
    message: `Something went wrong, ${error.message}`
  });
};

export default handleError;
