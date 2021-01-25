import React, { useState, useEffect } from 'react';
import Order from './Components/Order';
import MOrder from './Models/MOrder';

const OrderHistoryItem = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (loading && orders.length == 0) {
      fetch('https://reactasty.apps.huel.io/api/customer/orders')
        .then(res => res.json())
        .then(res => {
          var tempOrders = [];
          res[0].orders.forEach(order => {
            tempOrders.push(new MOrder(order));
          });
          setOrders(tempOrders);
        })
        .then(() => {
          setLoading(false);
        });
    }
  });
  return (
    <div className="column is-12">
      {loading ? (
        <div className="column is-12">Loading...</div>
      ) : 
        orders.map((order, key) => {
          return (
            <Order order={order} />
          )
        })
      }
    </div>
  );
};

export default OrderHistoryItem;
