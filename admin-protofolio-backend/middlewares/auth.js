function apiKeyAuth(req, res, next) {
  // Allow all GET requests
  if (req.method === "GET") return next();

  const apiKey = req.header("x-api-key");

  if (apiKey && apiKey === process.env.MY_API_KEY) {
    next(); 
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = apiKeyAuth;
