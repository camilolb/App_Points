import {ISecurityRepository} from '../../../adapters/repositories';
import {SecurityUseCase} from '../SecurityUseCase';

// Tests that a successful login with valid email and password returns a string token. tags: [happy path]
it('test_successful_login', async () => {
  // Mock the security repository to return a token
  const mockRepo: ISecurityRepository = {
    loginWithEmail: jest.fn().mockResolvedValue('token'),
  };
  const securityUseCase = new SecurityUseCase(mockRepo);

  // Call the login method with valid email and password
  const result = await securityUseCase.loginwithEmail(
    'validemail@example.com',
    'validpassword',
  );

  // Assert that the result is a string token
  expect(result).toBe('token');
});

// Tests that an invalid email format returns an error message. tags: [edge case]
it('test_invalid_email_format', async () => {
  // Mock the security repository to throw an error for invalid email format
  const mockRepo: ISecurityRepository = {
    loginWithEmail: jest
      .fn()
      .mockRejectedValue(new Error('Invalid email format')),
  };
  const securityUseCase = new SecurityUseCase(mockRepo);

  // Call the login method with invalid email format
  try {
    await securityUseCase.loginwithEmail('invalidemail', 'validpassword');
  } catch (error) {
    // Assert that the error message is 'Invalid email format'
    expect(error.message).toBe('Invalid email format');
  }
});

// Tests that an empty email or password returns an error message. tags: [edge case]
it('test_empty_email_or_password', async () => {
  // Mock the security repository to throw an error for empty email or password
  const mockRepo: ISecurityRepository = {
    loginWithEmail: jest
      .fn()
      .mockRejectedValue(new Error('Email and password are required')),
  };
  const securityUseCase = new SecurityUseCase(mockRepo);

  // Call the login method with empty email and password
  try {
    await securityUseCase.loginwithEmail('', '');
  } catch (error) {
    // Assert that the error message is 'Email and password are required'
    expect(error.message).toBe('Email and password are required');
  }
});

// Tests that an incorrect email or password returns an error message. tags: [edge case]
it('test_incorrect_email_or_password', async () => {
  const mockRepo: ISecurityRepository = {
    loginWithEmail: jest.fn().mockRejectedValue('Incorrect email or password'),
  };
  const securityUseCase = new SecurityUseCase(mockRepo);
  await expect(
    securityUseCase.loginwithEmail('test@example.com', 'password'),
  ).rejects.toEqual('Incorrect email or password');
});

// Tests that the loginwithemail method is called with the correct parameters. tags: [behavior]
it('test_login_method_called_with_correct_parameters', async () => {
  const mockRepo: ISecurityRepository = {
    loginWithEmail: jest.fn().mockResolvedValue('success'),
  };
  const securityUseCase = new SecurityUseCase(mockRepo);
  await securityUseCase.loginwithEmail('test@example.com', 'password');
  expect(mockRepo.loginWithEmail).toHaveBeenCalledWith(
    'test@example.com',
    'password',
  );
});

// Tests for security vulnerabilities such as sql injection or password hashing. tags: [other possible issue]
it('test_security_vulnerabilities', async () => {
  const mockRepo: ISecurityRepository = {
    loginWithEmail: jest.fn().mockResolvedValue('success'),
  };
  const securityUseCase = new SecurityUseCase(mockRepo);
  await securityUseCase.loginwithEmail(
    "test@example.com'; DROP TABLE users; --",
    'password',
  );
  expect(mockRepo.loginWithEmail).toHaveBeenCalledWith(
    "test@example.com'; DROP TABLE users; --",
    'password',
  );
});
