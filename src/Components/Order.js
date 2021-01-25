import React from 'react';
import OrderHeaderDetails from './OrderHeaderDetails';
import OrderInformation from './OrderInformation';

const Order = ({order}) => {
  return(
    <div className="column is-12">
        <div className="box orders-history-block has-shadow-hover">
          <OrderHeaderDetails orderNumber={order.number} price={order.price} dispatchDate={order.dispatchDate} />
          <hr />
          <OrderInformation deliveryAddress={order.deliveryAddress} items={order.items} />
        </div>
      </div>
  );
};

export default Order;