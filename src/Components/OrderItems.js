import React from 'react';

const OrderItems = ({ items }) => {
  // Add quantity to display name
  items.forEach(item => {
    item.name =
      item.quantity === '' ? item.name : `${item.quantity}x ${item.name}`;
  });

  return (
    <div className="product-list-boxes columns is-multiline">
      {items.map((item, index) => {
        return (
          <div key={index} className="column is-6">
            <div className="media">
              <div className="media-left">
                <img alt="Product bars" className="image" src={item.iconURL} />
              </div>
              <div className="media-content">
                <div>
                  <p className="product-title">{item.title}</p>
                  <p className="product-variants">{item.name}</p>
                </div>
              </div>
              <div className="media-right">
                <p className="product-price">${item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderItems;
