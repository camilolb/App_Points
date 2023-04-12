import {StoreUseCase} from '../../../domain';
import {appUseCases} from '../../useCases';
import {IRepositories} from '../iRepositories';

it('test_valid_input_returns_correct_instances', () => {
  const mockStoreRepo = {
    getProducts: jest.fn(),
    getProduct: jest.fn(),
  };
  const mockSecurityRepo = {
    loginWithEmail: jest.fn(),
  };
  const mockRepositories: IRepositories = {
    store: mockStoreRepo,
    security: mockSecurityRepo,
  };
  const useCases = appUseCases(mockRepositories);
  expect(useCases.storeUseCase).toBeInstanceOf(StoreUseCase);
});
