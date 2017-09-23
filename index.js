const couriers = [
  require("./couriers/australia_post"),
  require("./couriers/couriers_please"),
  require("./couriers/fastway")
];

function courier_from_connote(connote) {
  for (var i = 0; i < couriers.length; i++) {
    if (couriers[i].valid(connote)) {
      let courier = couriers[i];

      return {
        courier: courier.courier_name,
        tracking_link: courier.tracking_url + connote
      };

      break;
    }
  }

  return {
    error: true,
    message: "Courier details not found from provided connote: " + connote
  };
}

module.exports = courier_from_connote;
