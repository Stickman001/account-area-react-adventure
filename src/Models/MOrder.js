import MOrderItem from "./MOrderItem";

class MOrder {
  constructor(order) {
    this.number = order.name;
    this.type = "One-time";
    this.price = order.total_price_usd;
    this.dispatchDate = order.processed_at;

    // Address
    var address = order.shipping_address;
    this.deliveryAddress = `${address.address1}, ${address.city}, ${address.zip}`
    
    // Order items
    this.items = [];
    order.line_items.forEach(item => {
      this.items.push(new MOrderItem(item));
    });

    // Combine powder orders into one order
    this._combinePowderOrders()
  }

  /*
   * Combines the individual powder order items into one item to be displayed
   */
  _combinePowderOrders() {
    var finalItems = [];
    var orderItem = {
      title: "Huel Powder",
      name: "",
      individualNames: [],
      quantity: "",
      image: "",
      pre_tax_price: 0
    }

    this.items.forEach(item => {
      if (item.title.includes("Powder")) {
        if (orderItem.image === "") {
          orderItem.image = item.iconURL;
        }
        orderItem.pre_tax_price += parseFloat(item.price);

        // Add to individual names
        var powderNameSplit = item.title.split(" ");
        var powderName = powderNameSplit[powderNameSplit.length - 1];
        orderItem.individualNames.push({name: powderName, quantity: item.quantity})
      } else {
        finalItems.push(item);
      }
    });

    // Combine names to create name
    orderItem.individualNames.forEach(product => {
      orderItem.name += `${product.quantity}x ${product.name}, `;
    });
    // Chop off that pesky extra commer at the end of the name
    orderItem.name = orderItem.name.slice(0, -2);

    // Check for any powders and add if they exist
    if (orderItem.name !== "") {
      finalItems.push(new MOrderItem(orderItem));
      this.items = finalItems;
    }
  }
}

export default MOrder;