import {IProductEntity} from '../../../core/domain';
import {filterListProducts} from '../filter-products';

// Tests that when products array is empty and showRedeemed is undefined, it returns an empty array.
it('test_empty_products_returns_empty_array', () => {
  // Arrange
  const products: IProductEntity[] = [];
  const showRedeemed: boolean | undefined = undefined;

  // Act
  const result = filterListProducts(products, showRedeemed);

  // Assert
  expect(result).toEqual([]);
});

// Tests that when products array is not empty and showRedeemed is true, it returns an array of redeemed products.
it('test_filter_redeemed_products', () => {
  // Arrange
  const products: IProductEntity[] = [
    {
      Id: '1',
      Product: 'Product 1',
      Points: 10,
      Image: 'image1.jpg',
      CreatedAt: '2022-01-01',
      IsRedemption: true,
    },
    {
      Id: '2',
      Product: 'Product 2',
      Points: 20,
      Image: 'image2.jpg',
      CreatedAt: '2022-01-02',
      IsRedemption: false,
    },
    {
      Id: '3',
      Product: 'Product 3',
      Points: 30,
      Image: 'image3.jpg',
      CreatedAt: '2022-01-03',
      IsRedemption: true,
    },
  ];
  const showRedeemed: boolean | undefined = true;

  // Act
  const result = filterListProducts(products, showRedeemed);

  // Assert
  expect(result).toEqual([
    {
      Id: '1',
      Product: 'Product 1',
      Points: 10,
      Image: 'image1.jpg',
      CreatedAt: '2022-01-01',
      IsRedemption: true,
    },
    {
      Id: '3',
      Product: 'Product 3',
      Points: 30,
      Image: 'image3.jpg',
      CreatedAt: '2022-01-03',
      IsRedemption: true,
    },
  ]);
});

// Tests that when products array contains products with null values, it filters them out correctly.
it('test_filter_null_values', () => {
  // Arrange
  const products: IProductEntity[] = [
    {
      Id: '1',
      Product: 'Product 1',
      Points: 10,
      Image: null,
      CreatedAt: '2022-01-01',
      IsRedemption: true,
    },
    {
      Id: '2',
      Product: null,
      Points: 20,
      Image: 'image2.jpg',
      CreatedAt: '2022-01-02',
      IsRedemption: false,
    },
    {
      Id: '3',
      Product: 'Product 3',
      Points: null,
      Image: 'image3.jpg',
      CreatedAt: '2022-01-03',
      IsRedemption: true,
    },
  ];
  const showRedeemed: boolean | undefined = false;

  // Act
  const result = filterListProducts(products, showRedeemed);

  // Assert
  expect(result).toEqual([
    {
      Id: '2',
      Product: null,
      Points: 20,
      Image: 'image2.jpg',
      CreatedAt: '2022-01-02',
      IsRedemption: false,
    },
  ]);
});
