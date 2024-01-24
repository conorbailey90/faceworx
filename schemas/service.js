
  
  export const productSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'price',
        title: 'Price (£)',
        type: 'number',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  };

  export const categorySchema = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Category Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
    ],
  };

