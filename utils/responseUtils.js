const formatResponse = (data, message = "Success", statusCode = 200) => {
  return {
    statusCode,
    message,
    data,
  };
};

module.exports = { formatResponse };
