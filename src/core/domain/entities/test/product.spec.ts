import {IProductEntityData} from '../../interfaces';
import {Product} from '../Product';

// Tests that a new instance of Product can be created with valid input data.
it('test_product_creation', () => {
  const productData: IProductEntityData = {
    id: '1',
    product: 'Test Product',
    points: 100,
    is_redemption: false,
    image: 'test-image.jpg',
    createdAt: '2022-01-01T00:00:00.000Z',
  };
  const product = new Product(productData);
  expect(product).toBeInstanceOf(Product);
  expect(product.Id).toBe('1');
  expect(product.Product).toBe('Test Product');
  expect(product.Points).toBe(100);
  expect(product.IsRedemption).toBe(false);
  expect(product.Image).toBe('test-image.jpg');
  expect(product.CreatedAt).toBe('2022-01-01T00:00:00.000Z');
});

// Tests that the properties of a Product instance can be accessed correctly.
it('test_product_properties', () => {
  const productData: any = {
    id: '12',
    product: 'Test Product',
    points: 100,
    is_redemption: false,
    image: 'test-image.jpg',
    createdAt: '2022-01-01T00:00:00.000Z',
  };
  const product = new Product(productData);
  expect(product.Id).toBe('12');
  expect(product.Product).toBe('Test Product');
  expect(product.Points).toBe(100);
  expect(product.IsRedemption).toBe(false);
  expect(product.Image).toBe('test-image.jpg');
  expect(product.CreatedAt).toBe('2022-01-01T00:00:00.000Z');
});

// Tests that the toJSON method of a Product instance returns the expected output.
it('test_product_to_json', () => {
  const productData: any = {
    id: '1',
    product: 'Test Product',
    points: 100,
    is_redemption: false,
    image: 'test-image.jpg',
    createdAt: '2022-01-01T00:00:00.000Z',
  };
  const product = new Product(productData);
  const expectedOutput = {
    Id: '1',
    Product: 'Test Product',
    Points: 100,
    IsRedemption: false,
    Image: 'test-image.jpg',
    CreatedAt: '2022-01-01T00:00:00.000Z',
  };
  expect(product.toJSON()).toEqual(expectedOutput);
});

// Tests that trying to access the properties of a Product instance before they have been set returns undefined.
it('test_product_properties_before_set', () => {
  const product = new Product({
    id: '',
    product: '',
    points: 0,
    is_redemption: false,
    image: '',
    createdAt: '',
  });
  expect(product.Id).toBeUndefined();
  expect(product.Product).toBeUndefined();
  expect(product.Points).toBeUndefined();
  expect(product.Image).toBeUndefined();
  expect(product.CreatedAt).toBeUndefined();
  expect(product.IsRedemption).toBeUndefined();
});
