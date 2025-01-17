// schemas/user.ts

export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'userId',
        title: 'User ID',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'address',
        title: 'Shipping Address',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'street',
                title: 'Street',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'city',
                title: 'City',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'state',
                title: 'State',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'zipCode',
                title: 'Zip Code',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'country',
                title: 'Country',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
      },
      {
        name: 'orderHistory',
        title: 'Order History',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'orderId',
                title: 'Order ID',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'orderDate',
                title: 'Order Date',
                type: 'datetime',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'orderStatus',
                title: 'Order Status',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'totalAmount',
                title: 'Total Amount',
                type: 'number',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'orderItems',
                title: 'Order Items',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'productId',
                        title: 'Product ID',
                        type: 'reference',
                        to: [{ type: 'product' }],
                        validation: (Rule) => Rule.required(),
                      },
                      {
                        name: 'quantity',
                        title: 'Quantity',
                        type: 'number',
                        validation: (Rule) => Rule.required(),
                      },
                      {
                        name: 'price',
                        title: 'Price',
                        type: 'number',
                        validation: (Rule) => Rule.required(),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'createdAt',
        title: 'Account Created At',
        type: 'datetime',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'updatedAt',
        title: 'Last Updated At',
        type: 'datetime',
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  