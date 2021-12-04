function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  }
}

function refundOrder (order, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order) {
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(name) {
  var orderNum = []
  for (var i = 0; i < name.length; i++) {
    orderNum.push(name[i].item)
  }
  return orderNum.join(', ');
}

function searchOrder(deliveryOrders, name) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item == name) {
      return true;
    }
  }
    return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
