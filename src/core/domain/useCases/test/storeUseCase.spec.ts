import {IStoreRepository} from '../../../adapters/repositories';
import {IProductEntity} from '../../interfaces';
import {StoreUseCase} from '../StoreUseCase';

it('test_get_products_successfully_retrieves_and_returns_all_products', async () => {
  // Arrange
  const mockProducts: IProductEntity[] = [
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
  const mockStoreRepo: IStoreRepository = {
    getProducts: jest.fn().mockResolvedValue(mockProducts),
    getProduct: jest.fn(),
  };
  const storeUseCase = new StoreUseCase(mockStoreRepo);

  // Act
  const result = await storeUseCase.getProducts();

  // Assert
  expect(result).toEqual(mockProducts);
  expect(mockStoreRepo.getProducts).toHaveBeenCalledTimes(1);
});
