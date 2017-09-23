const courier_name = "Australia Post";
const tracking_url =
  "https://auspost.com.au/parcels-mail/track.html#/track?id=";

// AustraliaPost connotes are various lengths
function valid(connote) {
  if (typeof connote != "string") {
    return false;
  }
  return [10, 14, 18, 21, 39].indexOf(connote.length) != -1;
}

module.exports = { courier_name, tracking_url, valid };
