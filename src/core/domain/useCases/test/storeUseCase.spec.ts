import {IStoreRepository} from '../../../adapters/repositories';
import {IProductEntity} from '../../interfaces';
import {StoreUseCase} from '../StoreUseCase';

it('test_get_products_successfully_retrieves_and_returns_all_products', async () => {
  // Arrange
  const mockProducts: IProductEntity[] = [
    {
      Id: '1',
      Name: 'Product 1',
      Price: '10.00',
      Stock: '5',
      Image: 'image1.jpg',
    },
    {
      Id: '2',
      Name: 'Product 2',
      Price: '20.00',
      Stock: '10',
      Image: 'image2.jpg',
    },
    {
      Id: '3',
      Name: 'Product 3',
      Price: '30.00',
      Stock: '15',
      Image: 'image3.jpg',
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
