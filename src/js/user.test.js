import fetchData from './http';
import getLevel from './user';

jest.mock('./http');

test('user', () => {
  fetchData.mockReturnValue('{}');

  getLevel(1);

  expect(fetchData).toBeCalledTimes(1);
  expect(fetchData).toBeCalledWith('https://server:8080/user/1');
});
