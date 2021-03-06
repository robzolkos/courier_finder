const courier_name = "Australia Post";
const tracking_url =
  "https://auspost.com.au/parcels-mail/track.html#/track?id=";

// AustraliaPost connotes are various lengths
function valid(connote) {
  if (typeof connote != "string") {
    return false;
  }

  connote = connote.trim().toUpperCase();

  // handle 14 character couriers please
  if (connote.length === 14 && connote.indexOf("CP") === 0) {
    return false;
  }
  return [10, 14, 16, 18, 21, 39, 40].indexOf(connote.length) != -1;
}

module.exports = { courier_name, tracking_url, valid };
