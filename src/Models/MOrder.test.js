import MOrder from './MOrder';

const testData1 = {
  name: '#467614-US',
  total_price_usd: '113.86',
  processed_at: '2019-08-07T04:39:42-05:00',
  shipping_address: {
    address1: '925 N La Brea Ave',
    city: 'West Hollywood',
    zip: '90038'
  },
  line_items: [
    {
      title: 'Huel Shaker Bottle (Clear)',
      name: 'Huel Shaker Bottle (Clear)',
      quantity: 1,
      image: 'https:\/\/cdn.shopify.com\/s\/files\/1\/1374\/5287\/products\/HUEL_SHAKER_FROSTER_FR_1200.jpg?v=1514888085',
      pre_tax_price: '5.00'
    },
    {
      title: 'Free T-Shirt & Shaker',
      name: 'Free T-Shirt & Shaker - Large \/ Male',
      quantity: 1,
      image: 'https:\/\/cdn.shopify.com\/s\/files\/1\/1374\/5287\/products\/Free_Tshirt_and_Shaker.png?v=1551882727',
      pre_tax_price: '0.00'
    },
    {
      title: 'Huel Powder Berry',
      name: 'Huel Powder Berry - 3',
      quantity: 1,
      image: 'https:\/\/huel-assets.s3.eu-west-2.amazonaws.com\/temp-public\/thumbnails\/powder.jpg',
      pre_tax_price: '33.00'
    },
    {
      title: 'Huel Powder Vanilla',
      name: 'Huel Powder Vanilla - 3',
      quantity: 1,
      image: 'https:\/\/huel-assets.s3.eu-west-2.amazonaws.com\/temp-public\/thumbnails\/powder.jpg',
      pre_tax_price: '33.00'
    },
    {
      title: 'Huel Powder Chocolate',
      name: 'Huel Powder Chocolate - 3',
      quantity: 1,
      image: 'https:\/\/huel-assets.s3.eu-west-2.amazonaws.com\/temp-public\/thumbnails\/powder.jpg',
      pre_tax_price: '33.00'
    }
  ]
};

var order = {};

beforeAll(() => {
  order = new MOrder(testData1);
});

test('check order number, type, price and dispatch date are set', () => {
  expect(order.number).toBe(testData1.name);
  expect(order.type).toBe('One-time');
  expect(order.price).toBe(testData1.total_price_usd);
  expect(order.dispatchDate).toBe(testData1.processed_at);
});

test('check address', () => {
  expect(order.deliveryAddress).toBe('925 N La Brea Ave, West Hollywood, 90038');
});

test('check none powder order items', () => {
  var item = order.items[0]; // Huel shaker
  var item1 = order.items[1]; // T-Shirt & Shaker

  // Item
  expect(item.title).toBe(testData1.line_items[0].title);
  expect(item.name).toBe(testData1.line_items[0].name);
  expect(item.quantity).toBe(testData1.line_items[0].quantity);
  expect(item.iconURL).toBe(testData1.line_items[0].image);
  expect(item.price).toBe(testData1.line_items[0].pre_tax_price);

  // Item1
  expect(item1.title).toBe(testData1.line_items[1].title);
  expect(item1.name).toBe(testData1.line_items[1].name);
  expect(item1.quantity).toBe(testData1.line_items[1].quantity);
  expect(item1.iconURL).toBe(testData1.line_items[1].image);
  expect(item1.price).toBe(testData1.line_items[1].pre_tax_price);
});

test('check powder items', () => {
  var item = order.items[2]; // Huel powders combined

  expect(item.title).toBe('Huel Powder');
  expect(item.name).toBe('1x Berry, 1x Vanilla, 1x Chocolate');
  expect(item.quantity).toBe('');
  expect(item.iconURL).toBe(testData1.line_items[2].image);
  expect(item.price).toBe(99);
});