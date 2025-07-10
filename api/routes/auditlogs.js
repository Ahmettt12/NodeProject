const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.json({
    message: "AuditLogs endpoint çalışıyor ✅",
    body:req.body,
    query: req.query,
    params: req.params,
    headers: req.headers
  });
});

module.exports = router;
