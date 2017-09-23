const courier_name = "Fastway";
const tracking_url = "https://www.fastway.com.au/tools/track/?l=";

// Fastway connotes are 12 characters and do not start with CP
function valid(connote) {
  if (typeof connote != "string") {
    return false;
  }
  return connote.length === 12 && connote.indexOf("CP") != 0;
}

module.exports = { courier_name, tracking_url, valid };
