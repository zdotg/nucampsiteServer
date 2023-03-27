const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })
  .delete((req, res) => {
    res.end("Deleting all partners");
  });

partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Sending details of the partner ${req.params.partnerId}`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST request not supported");
  })
  .put((req, res) => {
    res.end(
      `Will update partner: ${req.body.name} and description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(`Deleteing partner: ${req.params.partnerid}`);
  });

module.exports = partnerRouter;
