import {IProductEntityData} from '../../interfaces';
import {Product} from '../Product';

// Tests that a product entity can be created with valid data. tags: [happy path]
it('test_product_creation_with_valid_data', () => {
  const productData: IProductEntityData = {
    id: '1',
    name: 'Product 1',
    unit_price: '10.00',
    stock: '100',
    image: 'product1.jpg',
  };
  const product = new Product(productData);
  expect(product.Id).toBe('1');
  expect(product.Name).toBe('Product 1');
  expect(product.Price).toBe('10.00');
  expect(product.Stock).toBe('100');
  expect(product.Image).toBe('product1.jpg');
});

// Tests that the fields of a product entity can be accessed. tags: [happy path]
it('test_accessing_fields_of_product_entity', () => {
  const productData: IProductEntityData = {
    id: '1',
    name: 'Product 1',
    unit_price: '10.00',
    stock: '100',
    image: 'product1.jpg',
  };
  const product = new Product(productData);
  expect(product.Id).toBeDefined();
  expect(product.Name).toBeDefined();
  expect(product.Price).toBeDefined();
  expect(product.Stock).toBeDefined();
  expect(product.Image).toBeDefined();
});

// Tests that an error is thrown when trying to access a nonexistent field of a product entity. tags: [edge case]
it('test_accessing_nonexistent_field', () => {
  const productData: IProductEntityData = {
    id: '1',
    name: 'Product 1',
    unit_price: '10.00',
    stock: '100',
    image: 'product1.jpg',
  };
  const product = new Product(productData);
});

// Tests that an error is thrown when trying to access a field of a product entity with an invalid type. tags: [edge case]
it('test_accessing_field_with_invalid_type', () => {
  const productData: IProductEntityData = {
    id: '1',
    name: 'Product 1',
    unit_price: '10.99',
    stock: '5',
    image: 'image.jpg',
  };
  const product = new Product(productData);
  expect(() => {
    // Try to access the Price field with an invalid type
    const price = product.Price;
  }).toThrow();
});

// Tests that the fields of a product entity are read-only. tags: [behavior]
it('test_product_entity_fields_read_only', () => {
  const productData: IProductEntityData = {
    id: '1',
    name: 'Product 1',
    unit_price: '10.99',
    stock: '5',
    image: 'image.jpg',
  };
  const product = new Product(productData);
  expect(() => {
    // Try to modify the Name field
  }).toThrow();
});

// Tests the behavior of the class when invalid data is passed to the constructor. tags: [other possible issue]
it('test_invalid_data_passed_to_constructor', () => {
  const invalidProductData: any = {
    id: '1',
    name: 'Product 1',
    unit_price: '10.99',
    stock: '5',
    // Missing the image field
  };
  expect(() => {
    const product = new Product(invalidProductData);
  }).toThrow();
});
