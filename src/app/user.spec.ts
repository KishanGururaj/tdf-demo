import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('rob','rob@test.com',55555555566,'','morning',true)).toBeTruthy();
  });
});
