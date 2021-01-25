import React from 'react';
import OrderItems from './OrderItems';

const OrderInformation = ({deliveryAddress, items}) => {
  return (
    <div className="order-information">
      <p className="title is-6 is-marginless">
        It&apos;s been dispatched!
      </p>

      <div>
        <div className="order-information-expanded">
          <OrderItems items={items}/>
          <hr />
          <div className="is-flex order-footer-information">
            <div className="left-info">
              <div>Delivery Address</div>
              <div>{deliveryAddress}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderInformation;