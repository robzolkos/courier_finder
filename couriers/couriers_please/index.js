const courier_name = "Couriers Please";
const tracking_url = "https://www.couriersplease.com.au/Tools/Track?no=";

// CouriersPlease connotes are 14 characters, start with CP, and 7th character is an 'E'
function valid(connote) {
  if (typeof connote != "string") {
    return false;
  }
  connote = connote.trim().toUpperCase();
  return (
    (connote.length === 14 || connote.length === 15) &&
    connote.indexOf("CP") === 0
  );
}

module.exports = { courier_name, tracking_url, valid };
