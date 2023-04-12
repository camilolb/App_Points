import {IRepositories} from '../interfaces';
import {appUseCases} from '../useCases';

// Returns an object with storeUseCase and securityUseCase properties, both instances of their respective classes.
it('test_happy_path: returns an object with storeUseCase and securityUseCase properties, both instances of their respective classes', () => {
  // Arrange
  const mockStoreRepo = {
    getProducts: jest.fn(),
    getProduct: jest.fn(),
  };
  const mockSecurityRepo = {
    loginWithEmail: jest.fn(),
    userLogout: jest.fn(),
  };
  const mockRepositories: IRepositories = {
    store: mockStoreRepo,
    security: mockSecurityRepo,
  };

  // Act
  const result = appUseCases(mockRepositories);

  // Assert
  expect(result).toHaveProperty('storeUseCase');
  expect(result.storeUseCase).toBeInstanceOf(StoreUseCase);
  expect(result).toHaveProperty('securityUseCase');
  expect(result.securityUseCase).toBeInstanceOf(SecurityUseCase);
});

// Throws an error if the repositories parameter is null or undefined.
it('test_bbb: throws an error if the repositories parameter is null or undefined', () => {
  // Arrange
  const mockRepositories = null;

  // Act & Assert
  expect(() => appUseCases(mockRepositories)).toThrow();
});

// Returns an object with only the expected properties, even if the repositories parameter has additional properties.
it('test_ccc: returns an object with only the expected properties, even if the repositories parameter has additional properties', () => {
  // Arrange
  const mockStoreRepo = {
    getProducts: jest.fn(),
    getProduct: jest.fn(),
  };
  const mockSecurityRepo = {
    loginWithEmail: jest.fn(),
    userLogout: jest.fn(),
  };
  const mockRepositories: any = {
    store: mockStoreRepo,
    security: mockSecurityRepo,
    additionalProp: 'additionalValue',
  };

  // Act
  const result = appUseCases(mockRepositories);

  // Assert
  expect(result).toHaveProperty('storeUseCase');
  expect(result.storeUseCase).toBeInstanceOf(StoreUseCase);
  expect(result).toHaveProperty('securityUseCase');
  expect(result.securityUseCase).toBeInstanceOf(SecurityUseCase);
  expect(Object.keys(result).length).toBe(2);
});
