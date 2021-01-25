import React from 'react';

/*
 * Give you the gramatically correct date suffix (for english locals)
 */
const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

const OrderHeaderDetails = ({ orderNumber, price, dispatchDate }) => {
  const date = new Date(dispatchDate);
  const month = date.toLocaleDateString(undefined, {month: "long"});
  const day = `${date.getDate()}${nth(date.getDate())}`;
  const year = date.getFullYear();

  return (
    <div className="is-flex orders-block-header">
      <div className="item">
        <div>Order Number</div>
        <div>{orderNumber}</div>
      </div>

      <div className="item">
        <div>Order Type</div>
        <div>
          <p className="is-onetime">One-time</p>
        </div>
      </div>
      <div className="item">
        <div>Price</div>
        <div>${price}</div>
      </div>
      <div className="item">
        <div>Dispatch Date</div>
        <div data-testid="dispatchDate">{`${month} ${day} ${year}`}</div>
      </div>
    </div>
  );
};

export default OrderHeaderDetails;
