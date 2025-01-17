// schemas/shipment.ts

export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'shipmentId',
        type: 'string',
        title: 'Shipment ID',
      },
      {
        name: 'orderId',
        type: 'reference',
        to: [{ type: 'order' }],
        title: 'Order Reference',
      },
      {
        name: 'shippingAddress',
        type: 'object',
        title: 'Shipping Address',
        fields: [
          {
            name: 'street',
            type: 'string',
            title: 'Street Address',
          },
          {
            name: 'city',
            type: 'string',
            title: 'City',
          },
          {
            name: 'state',
            type: 'string',
            title: 'State',
          },
          {
            name: 'zipCode',
            type: 'string',
            title: 'Zip Code',
          },
          {
            name: 'country',
            type: 'string',
            title: 'Country',
          },
        ],
      },
      {
        name: 'shippingMethod',
        type: 'string',
        title: 'Shipping Method',
        options: {
          list: ['Standard', 'Express', 'Same Day', 'Overnight'],
        },
      },
      {
        name: 'shipmentDate',
        type: 'datetime',
        title: 'Shipment Date',
      },
      {
        name: 'deliveryDate',
        type: 'datetime',
        title: 'Estimated Delivery Date',
      },
      {
        name: 'shipmentStatus',
        type: 'string',
        title: 'Shipment Status',
        options: {
          list: ['Pending', 'Shipped', 'In Transit', 'Delivered', 'Returned'],
        },
      },
      {
        name: 'trackingNumber',
        type: 'string',
        title: 'Tracking Number',
      },
      {
        name: 'carrier',
        type: 'string',
        title: 'Carrier',
        options: {
          list: ['FedEx', 'UPS', 'DHL', 'USPS'],
        },
      },
      {
        name: 'items',
        type: 'array',
        title: 'Shipped Items',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'productId',
                type: 'reference',
                to: [{ type: 'product' }],
                title: 'Product ID',
              },
              {
                name: 'quantity',
                type: 'number',
                title: 'Quantity Shipped',
              },
            ],
          },
        ],
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At',
      },
      {
        name: 'updatedAt',
        type: 'datetime',
        title: 'Updated At',
      },
    ],
  };
  