import {IUserEntityData} from '../../interfaces';
import {User} from '../User';

// Tests that a user entity can be created with valid email, nickname, and image data. tags: [happy path]
it('test_user_creation_with_valid_data', () => {
  const userData: IUserEntityData = {
    email: 'test@test.com',
    nickname: 'testuser',
    image: 'testimage.jpg',
  };
  const user = new User(userData);
  expect(user.Email).toBe('test@test.com');
  expect(user.NickName).toBe('testuser');
  expect(user.Image).toBe('testimage.jpg');
});

// Tests that a user entity cannot be created with empty or whitespace-only email, nickname, or image data. tags: [edge case]
it('test_user_creation_with_empty_or_whitespace_only_data', () => {
  const userData: IUserEntityData = {
    email: '',
    nickname: '   ',
    image: 'testimage.jpg',
  };
  expect(() => new User(userData)).toThrow();
});

// Tests that the email, nickname, and image properties of a user entity can be retrieved even if they have null or undefined values. tags: [edge case]
it('test_user_properties_retrieval_with_null_or_undefined_values', () => {
  const userData: IUserEntityData = {
    email: null,
    nickname: undefined,
    image: 'testimage.jpg',
  };
  const user = new User(userData);
  expect(user.Email).toBeNull();
  expect(user.NickName).toBeUndefined();
  expect(user.Image).toBe('testimage.jpg');
});

// Tests that the email property of a user entity is a valid email address format. tags: [behavior]
it('test_user_email_format_validation', () => {
  const userData: IUserEntityData = {
    email: 'invalidemail',
    nickname: 'testuser',
    image: 'https://example.com/image.jpg',
  };
  expect(() => new User(userData)).toThrowError('Invalid email format');
});

// Tests that the nickname property of a user entity is not longer than a certain length. tags: [behavior]
it('test_user_nickname_length_validation', () => {
  const userData: IUserEntityData = {
    email: 'testuser@example.com',
    nickname: 'thisnicknameistoolong',
    image: 'https://example.com/image.jpg',
  };
  expect(() => new User(userData)).toThrowError('Nickname is too long');
});

// Tests that the image property of a user entity is a valid url format. tags: [behavior]
it('test_user_image_url_format_validation', () => {
  const userData: IUserEntityData = {
    email: 'testuser@example.com',
    nickname: 'testuser',
    image: 'invalidurl',
  };
  expect(() => new User(userData)).toThrowError('Invalid image URL format');
});
