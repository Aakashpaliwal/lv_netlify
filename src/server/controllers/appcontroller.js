const packageInfo = require("../../../package");
const path = require("path");

function check(req, res) {
  res.sendStatus(200);
}

function getMe(req, res) {
  res.json({
    status: "success",
    payload: {
      message: "Message from Backend Express JS"
    }
  });
}

module.exports = {
  check,
  getMe
};
