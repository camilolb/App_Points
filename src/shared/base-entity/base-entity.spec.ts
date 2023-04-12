import BaseEntity from './base-entity';

// Tests that tojson() handles nested objects and arrays. tags: [happy path, edge case]
it('test_to_json_handles_nested_objects_and_arrays', () => {
  const entity = new BaseEntity();
  entity.name = 'John';
  entity.age = 30;
  entity.address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
  };
  entity.hobbies = ['reading', 'running', 'cooking'];

  const result = entity.toJSON();

  expect(result).toEqual({
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    hobbies: ['reading', 'running', 'cooking'],
  });
});

// Tests that tojson() returns a new object each time it is called. tags: [general behavior]
it('test_to_json_returns_new_object', () => {
  const entity = new BaseEntity();
  entity.name = 'John';
  entity.age = 30;

  const result1 = entity.toJSON();
  const result2 = entity.toJSON();

  expect(result1).toEqual(result2);
  expect(result1).not.toBe(result2);
});

// Tests that tojson() does not modify the original instance. tags: [general behavior]
it('test_to_json_does_not_modify_original', () => {
  const entity = new BaseEntity();
  entity.name = 'John';
  entity.age = 30;

  const original = {...entity};
  entity.toJSON();

  expect(entity).toEqual(original);
});
