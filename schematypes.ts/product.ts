// schemas/product.ts

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productId',
        type: 'string',
        title: 'Product ID',
      },
      {
        name: 'productName',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'productDescription',
        type: 'text',
        title: 'Product Description',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: 'category',
        type: 'string',
        title: 'Product Category',
      },
      {
        name: 'dimensions',
        type: 'object',
        title: 'Product Dimensions',
        fields: [
          {
            name: 'height',
            type: 'number',
            title: 'Height',
          },
          {
            name: 'width',
            type: 'number',
            title: 'Width',
          },
          {
            name: 'depth',
            type: 'number',
            title: 'Depth',
          },
          {
            name: 'weight',
            type: 'number',
            title: 'Weight',
          },
          {
            name: 'weightUnit',
            type: 'string',
            title: 'Weight Unit',
            options: {
              list: ['kg', 'lbs'],
            },
          },
          {
            name: 'dimensionUnit',
            type: 'string',
            title: 'Dimension Unit',
            options: {
              list: ['cm', 'm', 'in'],
            },
          },
        ],
      },
      {
        name: 'material',
        type: 'string',
        title: 'Product Material',
      },
      {
        name: 'availableColors',
        type: 'array',
        title: 'Available Colors',
        of: [{ type: 'string' }],
      },
      {
        name: 'inventory',
        type: 'reference',
        to: [{ type: 'inventory' }],
        title: 'Inventory Reference',
      },
      {
        name: 'productImage',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'customerRating',
        type: 'number',
        title: 'Customer Rating',
        validation: (Rule) => Rule.optional().min(0).max(5),
      },
      {
        name: 'ratingCount',
        type: 'number',
        title: 'Number of Ratings',
        description: 'How many users have rated this product',
      },
      {
        name: 'userComments',
        type: 'array',
        title: 'User Comments',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'userName',
                type: 'string',
                title: 'User Name',
              },
              {
                name: 'commentText',
                type: 'string',
                title: 'Comment Text',
              },
              {
                name: 'commentDate',
                type: 'datetime',
                title: 'Comment Date',
              },
            ],
          },
        ],
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Date Added',
      },
    ],
  };
  