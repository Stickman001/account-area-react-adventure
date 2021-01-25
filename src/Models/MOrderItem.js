class MOrderItem {
  constructor(item) {
    this.title = item.title;
    this.name = item.name;
    this.quantity = item.quantity;
    this.iconURL = item.image;
    this.price = item.pre_tax_price;
  }
}

export default MOrderItem;