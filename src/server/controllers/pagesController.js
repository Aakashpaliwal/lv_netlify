const path = require("path");

function renderPressRelease(req, res) {
  res.sendFile(
    path.join(__dirname + "/../../server/public/press_release.html")
  );
}
module.exports = {
  renderPressRelease
};
